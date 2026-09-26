// Renders the app to static HTML and injects it into dist/index.html so search
// engines and link previews get the full page content without running JS.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)
const template = await readFile(path.join(dist, 'index.html'), 'utf-8')
const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)

if (html === template) throw new Error('prerender: <div id="root"></div> not found in dist/index.html')
await writeFile(path.join(dist, 'index.html'), html)
await rm(serverDir, { recursive: true, force: true })
console.log('prerender: wrote dist/index.html')
