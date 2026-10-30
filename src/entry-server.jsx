import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { application, work } from './data/content'

export { application, work }

export function render(path = '/') {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
}
