import '../css/app.css'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePage, title } from './pages'

createInertiaApp({
  title,
  resolve: resolvePage,
  progress: { color: '#d4ff3a' },
  setup({ el, App, props }) {
    const app = (
      <StrictMode>
        <App {...props} />
      </StrictMode>
    )
    // With SSR running the markup is already on the page; hydrate it.
    if (el.hasChildNodes()) hydrateRoot(el, app)
    else createRoot(el).render(app)
  },
})
