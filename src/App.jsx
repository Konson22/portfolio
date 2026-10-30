import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { Header, Preloader } from './components/Layout'
import Hero from './components/Hero'
import { About, Education, Experience, Process, Services, Skills, Work } from './components/Sections'
import { Contact, Footer } from './components/Contact'
import { ProjectPage, WorkIndexPage } from './components/Project'
import { ApplicationPage, CvPage } from './components/Documents'
import { Cursor } from './components/ui'
import { application, work } from './data/content'

export function findProject(path) {
  const match = path.match(/^\/work\/([^/]+)\/?$/)
  return match ? work.find((w) => w.slug === match[1]) : undefined
}

// The page content is always rendered (and prerendered into index.html at build
// time) so crawlers see it; the preloader simply sits on top until it lifts.
export default function App({ path = '/' }) {
  const project = findProject(path)
  const workIndex = /^\/work\/?$/.test(path)
  const cvPage = /^\/cv\/?$/.test(path)
  const applicationPage = path.replace(/\/$/, '') === `/application/${application.slug}`
  const home = !project && !workIndex && !cvPage && !applicationPage
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
        {project ? (
          <ProjectPage project={project} />
        ) : workIndex ? (
          <WorkIndexPage />
        ) : cvPage ? (
          <CvPage />
        ) : applicationPage ? (
          <ApplicationPage />
        ) : (
          <>
            <Hero ready={!loading} />
            <About />
            <Services />
            <Work />
            <Experience />
            <Skills />
            <Process />
            <Education />
          </>
        )}
        <Contact />
      </main>
      <Footer home={home} />
    </div>
  )
}
