import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
const phase = process.argv[2] || 'before'
const width = Number(process.argv[3] || 1920)
const route = process.argv[4] || '/'
const directory = join(process.env.TEMP, 'al-aidy-layout-evidence', phase)
await mkdir(directory, { recursive: true })
const targets = await (await fetch('http://127.0.0.1:9223/json/list')).json()
const socket = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl)
await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }))
let id = 0
const pending = new Map()
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data)
  if (message.id) { pending.get(message.id)(message); pending.delete(message.id) }
}
const send = (method, params = {}) => new Promise(resolve => {
  pending.set(++id, resolve)
  socket.send(JSON.stringify({ id, method, params }))
}).then(message => { if (message.error) throw Error(message.error.message); return message.result })
const evaluate = expression => send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }).then(r => {
  if (r.exceptionDetails) throw Error(JSON.stringify(r.exceptionDetails))
  return r.result.value
})
try {
  await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: false })
  await send('Network.setCookie', { name: 'site-language', value: 'en', url: 'http://localhost:3000', path: '/' })
  await send('Page.navigate', { url: 'http://localhost:3000' + route })
  await new Promise(r => setTimeout(r, 1800))
  await evaluate(`document.querySelector('[class*="language-toggle"] button[lang="ar"]').click()`)
  for (let i = 0; i < 40; i++) {
    if (await evaluate(`document.documentElement.lang === 'ar' && document.querySelector('[class*="language-toggle"]').getAttribute('aria-busy') === 'false'`)) break
    await new Promise(r => setTimeout(r, 250))
  }
  await evaluate('document.fonts.ready.then(() => true)')
  const prefix = route.replaceAll('/', '') || 'home'
  const report = await evaluate(`(() => {
    const rect = el => { const r=el.getBoundingClientRect(); return {x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom} }
    const style = el => {const s=getComputedStyle(el);return {class:el.className,rect:rect(el),height:s.height,width:s.width,flex:s.flex,overflow:s.overflow,position:s.position,transform:s.transform,lineHeight:s.lineHeight,font:s.fontFamily,fontSize:s.fontSize,gap:s.gap}}
    const headings=[...document.querySelectorAll('h1,h2,h3,h4,p')].filter(el=>el.getBoundingClientRect().width && !el.closest('ul'))
    const issues=[]
    for (const el of headings) {
      const range=document.createRange();range.selectNodeContents(el);const ink=range.getBoundingClientRect()
      let parent=el.parentElement;const chain=[];let clipped=false
      for(let i=0;parent&&i<5;i++,parent=parent.parentElement){const s=getComputedStyle(parent),r=parent.getBoundingClientRect();chain.push(style(parent));if(['hidden','clip'].includes(s.overflowY) && ink.bottom>r.bottom+2)clipped=true}
      const own=el.getBoundingClientRect()
      if(clipped || ink.bottom>own.bottom+3 || chain.some(a=>a.rect.height>0&&own.bottom>a.rect.bottom+3))issues.push({text:el.textContent.slice(0,60),element:style(el),ink:{y:ink.y,bottom:ink.bottom,height:ink.height},clipped,chain})
    }
    const classes=['h1-2','h1-3','paragraph','content-4','top-5','text-17','div-55','title-text-2','text-wrapper','heading-2','subheading-services']
    return {lang:document.documentElement.lang,dir:document.documentElement.dir,fonts:document.fonts.check('16px Alexandria'),issues,components:classes.map(n=>({name:n,elements:[...document.querySelectorAll('[class]')].filter(e=>String(e.className).split(' ').some(c=>c.includes('_'+n+'__'))).slice(0,2).map(style)}))}
  })()`)
  await writeFile(join(directory, `${prefix}-${width}.json`), JSON.stringify(report, null, 2))
  console.log('DOM report', phase, route, width, 'issues', report.issues.map(i=>({text:i.text,class:i.element.class,height:i.element.height,parent:i.chain[0]?.height,clipped:i.clipped})))
  for (const name of ['sections-hero','about-us-section','process-sections','solutions-section','testimonial','about','about-2','consultation-intro','consultation-form']) {
    const found = await evaluate(`(() => {const el=[...document.querySelectorAll('[class]')].find(e=>String(e.className).split(' ').some(c=>c.includes('_${name}__')));if(!el)return false;el.scrollIntoView({behavior:'instant',block:'start'});window.scrollBy({top:-160,behavior:'instant'});return true})()`)
    if (!found) continue
    await new Promise(r=>setTimeout(r,1000))
    const shot=await send('Page.captureScreenshot',{format:'png'})
    await writeFile(join(directory,`${prefix}-${width}-${name}.png`),Buffer.from(shot.data,'base64'))
  }
  console.log('Evidence:', directory)
} finally { socket.close() }
