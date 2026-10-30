// Renders the app to static HTML so search engines and link previews get the full
// page content without running JS: dist/index.html for the home page,
// dist/work/index.html for the project list, and dist/work/<slug>/index.html per project.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')
const site = 'https://konakech.com'

const { render, work, application } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)
const template = await readFile(path.join(dist, 'index.html'), 'utf-8')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function page(route, head) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
  if (html === template) throw new Error('prerender: <div id="root"></div> not found in dist/index.html')
  if (!head) return html

  const title = escape(head.title)
  const description = escape(head.description)
  const url = `${site}${route}`
  const swaps = [
    [/<title>[^<]*<\/title>/, `<title>${title}</title>`],
    [/(<meta name="description" content=")[^"]*/, `$1${description}`],
    [/(<link rel="canonical" href=")[^"]*/, `$1${url}`],
    [/(<meta property="og:type" content=")[^"]*/, '$1article'],
    [/(<meta property="og:url" content=")[^"]*/, `$1${url}`],
    [/(<meta property="og:title" content=")[^"]*/, `$1${title}`],
    [/(<meta property="og:description" content=")[^"]*/, `$1${description}`],
    [/(<meta name="twitter:title" content=")[^"]*/, `$1${title}`],
    [/(<meta name="twitter:description" content=")[^"]*/, `$1${description}`],
    // The hero background is only used on the home page.
    [/\s*<link rel="preload" as="image" href="\/images\/hero-bg\.webp"[^>]*>/, ''],
  ]
  // Pages addressed to one employer shouldn't turn up in search results.
  if (head.noindex) swaps.push([/(<meta name="robots" content=")[^"]*/, '$1noindex, nofollow'])
  for (const [pattern, replacement] of swaps) {
    if (!pattern.test(html)) throw new Error(`prerender: ${pattern} not found in dist/index.html`)
    html = html.replace(pattern, replacement)
  }
  return html
}

await writeFile(path.join(dist, 'index.html'), page('/'))
console.log('prerender: wrote dist/index.html')

async function writePage(route, head) {
  const dir = path.join(dist, ...route.split('/').filter(Boolean))
  await mkdir(dir, { recursive: true })
  await writeFile(path.join(dir, 'index.html'), page(route, head))
  console.log(`prerender: wrote dist${route}index.html`)
}

await writePage('/work/', {
  title: 'All Projects — Kon Akech',
  description: 'Management systems, portals, mobile apps, and websites built by Kon Akech for organisations across South Sudan.',
})

for (const project of work) {
  await writePage(`/work/${project.slug}/`, {
    title: `${project.title} — Kon Akech`,
    description: project.overview?.[0] ?? project.summary,
  })
}

await writePage('/cv/', {
  title: 'Curriculum Vitae — Kon Akech',
  description: 'CV of Kon Akech, IT Engineer and Software Engineer in Juba, South Sudan: MIS development, database management, reporting, system integration, and training.',
})

await writePage(`/application/${application.slug}/`, {
  title: `${application.position} Application — Kon Akech`,
  description: `Application letter from Kon Akech for the ${application.position} position.`,
  noindex: true,
})

await rm(serverDir, { recursive: true, force: true })
