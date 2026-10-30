import { renderToString } from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import { resolvePage, title } from './pages'

// Renders pages to HTML so search engines and link previews get the full content
// without running JS. Start it with `php artisan inertia:start-ssr`.
createServer((page) =>
  createInertiaApp({
    page,
    title,
    render: renderToString,
    resolve: resolvePage,
    setup: ({ App, props }) => <App {...props} />,
  }),
)
