import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Header, Preloader } from './components/Layout'
import Hero from './components/Hero'
import { About, Education, Experience, Process, Services, Skills, Work } from './components/Sections'
import { Contact, Footer } from './components/Contact'
import { Cursor } from './components/ui'

// The page content is always rendered (and prerendered into index.html at build
// time) so crawlers see it; the preloader simply sits on top until it lifts.
export default function App() {
  const [loading, setLoading] = useState(true)
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
      <Header />
      <main>
        <Hero ready={!loading} />
        <About />
        <Services />
        <Work />
        <Experience />
        <Skills />
        <Process />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
