// Shared by the browser entry (app.jsx) and the SSR entry (ssr.jsx).
const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })

export function resolvePage(name) {
  const page = pages[`./Pages/${name}.jsx`]
  if (!page) throw new Error(`Inertia page not found: ${name}`)
  return page.default
}

// Pages pass their full title to <Seo>, so use it as is.
export const title = (t) => t
