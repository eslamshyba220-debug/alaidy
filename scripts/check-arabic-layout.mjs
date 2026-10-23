// Run against a local server and a headless Chromium browser started with
// --remote-debugging-port=9223. No additional browser dependency is needed.
import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
const base = process.env.SITE_URL || 'http://localhost:3000'
const targets = await (await fetch('http://127.0.0.1:9223/json/list')).json()
const socket = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl)
await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }))
let sequence = 0
const pending = new Map()
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data)
  if (!message.id) return
  const callback = pending.get(message.id)
  pending.delete(message.id)
  if (message.error) callback.reject(new Error(message.error.message))
  else callback.resolve(message.result)
})
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++sequence
    pending.set(id, { resolve, reject })
    socket.send(JSON.stringify({ id, method, params }))
  })
}
async function evaluate(expression) {
  const response = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  if (response.exceptionDetails) throw new Error(response.exceptionDetails.text)
  return response.result.value
}
const failures = []
try {
  await send('Network.enable')
  await send('Network.setCookie', { name: 'site-language', value: 'ar', url: base, path: '/' })
  for (const width of [390, 768, 1440]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false })
    for (const route of ['/', '/about', '/free-consultation']) {
      await send('Page.navigate', { url: new URL(route, base).href })
      await new Promise(resolve => setTimeout(resolve, 1800))
      await evaluate('document.fonts.ready.then(() => true)')
      const report = await evaluate(`(() => {
        const visible = el => { const r = el.getBoundingClientRect(); return r.width && r.height && getComputedStyle(el).visibility !== 'hidden' }
        const clipped = [...document.querySelectorAll('p,h1,h2,h3,h4,h5,h6')].filter(visible).filter(el => {
          if (el.closest('[aria-hidden="true"]')) return false
          return el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2
        }).map(el => ({ text: el.textContent.slice(0, 65), class: el.className, width: el.clientWidth, scroll: el.scrollWidth }))
        return { lang: document.documentElement.lang, dir: document.documentElement.dir,
          width: innerWidth, scroll: document.documentElement.scrollWidth, clipped }
      })()`)
      console.log(route, width, JSON.stringify(report))
      if (process.env.SCREENSHOT_DIR) {
        await mkdir(process.env.SCREENSHOT_DIR, { recursive: true })
        const screenshot = await send('Page.captureScreenshot', { format: 'png' })
        await writeFile(join(process.env.SCREENSHOT_DIR, `${route.replaceAll('/', '') || 'home'}-${width}.png`), Buffer.from(screenshot.data, 'base64'))
        for (const selector of ['#process-sections', '#solution', 'footer']) {
          const found = await evaluate(`(() => { const el = document.querySelector(${JSON.stringify(selector)}); if (!el) return false; el.scrollIntoView({ behavior: 'instant', block: 'start' }); return true })()`)
          if (!found) continue
          await new Promise(resolve => setTimeout(resolve, 1200))
          const section = await send('Page.captureScreenshot', { format: 'png' })
          await writeFile(join(process.env.SCREENSHOT_DIR, `${route.replaceAll('/', '') || 'home'}-${width}-${selector.replace('#', '')}.png`), Buffer.from(section.data, 'base64'))
        }
      }
      assert.equal(report.lang, 'ar')
      assert.equal(report.dir, 'rtl')
      assert.ok(report.scroll <= width + 2, 'Horizontal page overflow')
      if (report.clipped.length) failures.push({ route, width, clipped: report.clipped })
    }
  }
  assert.deepEqual(failures, [], 'Clipped text')
} finally { socket.close() }
