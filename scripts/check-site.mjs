import assert from "node:assert/strict"

// Run against an existing dev or production server. No browser packages required.
const base = process.env.SITE_URL || "http://localhost:3000"

for (const route of ["/", "/about", "/free-consultation"]) {
  const response = await fetch(new URL(route, base))
  assert.equal(response.status, 200, `${route}: page failed`)
  const html = await response.text()
  assert.ok(!html.includes("Edit Content"), `${route}: captured Framer editor is still present`)

  const stylesheets = [...html.matchAll(/<link\b[^>]*href="([^"]+\.css[^\"]*)"[^>]*>/g)]
    .map(match => match[1].replaceAll("&amp;", "&"))
  assert.ok(stylesheets.length > 0, `${route}: no CSS linked`)
  const scripts = [...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*>/g)]
    .map(match => match[1].replaceAll("&amp;", "&"))
  const assets = new Set([...stylesheets, ...scripts])
  for (const asset of assets) {
    const url = new URL(asset, base)
    if (url.origin !== new URL(base).origin) continue
    const result = await fetch(url)
    assert.equal(result.status, 200, `${route}: missing asset ${url.pathname}`)
    if (stylesheets.includes(asset)) {
      assert.match(result.headers.get("content-type") || "", /text\/css/, `${asset}: wrong CSS response`)
      assert.ok((await result.text()).length > 100, `${asset}: empty CSS`)
    }
  }

  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
  for (const match of html.matchAll(/<use\b[^>]*href="#([^"]+)"/g)) {
    assert.ok(ids.has(match[1]), `${route}: missing SVG sprite #${match[1]}`)
  }
  if (route === "/") {
    assert.ok(html.includes('viewBox="0 0 48 48"'), "Google artwork is missing")
  }
  console.log(`${route}: page, ${assets.size} CSS/JS assets, SVG references, and editor removal passed`)
}
