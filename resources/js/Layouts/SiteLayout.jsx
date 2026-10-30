import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Header, Preloader } from '../components/Layout'
import { Contact, Footer } from '../components/Contact'
import { Cursor } from '../components/ui'

// Shared page shell. The page content is always rendered (and server-rendered when
// SSR runs) so crawlers see it; the preloader simply sits on top until it lifts.
// Pages that render the preloader receive `ready` once it has gone.
export default function SiteLayout({ home = false, children }) {
  // The preloader only plays on the home page; other pages open straight away.
  const [loading, setLoading] = useState(home)
  const done = useCallback(() => setLoading(false), [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.2, anchors: { offset: -80 } })
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    })
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="grain">
      <Cursor />
      <AnimatePresence>{loading && <Preloader onDone={done} />}</AnimatePresence>
      <Header home={home} />
      <main>
        {typeof children === 'function' ? children({ ready: !loading }) : children}
        <Contact />
      </main>
      <Footer home={home} />
    </div>
  )
}
