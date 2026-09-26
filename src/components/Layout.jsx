import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { nav, profile } from '../data/content'
import { Magnetic } from './ui'

const ease = [0.76, 0, 0.24, 1]

export function Preloader({ onDone }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 9))
      setCount(n)
      if (n === 100) {
        clearInterval(id)
        setTimeout(onDone, 350)
      }
    }, 45)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <motion.div
      id="preloader"
      className="fixed inset-0 z-[90] flex flex-col justify-between bg-accent p-6 text-ink md:p-10"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease }}
    >
      <span className="font-display text-sm font-bold uppercase tracking-[0.3em]">{profile.name}</span>
      <div className="flex items-end justify-between">
        <span className="max-w-xs text-sm font-medium">{profile.intro}</span>
        <span className="font-display text-[22vw] font-extrabold leading-[0.8] md:text-[14vw]">{count}</span>
      </div>
    </motion.div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-accent" style={{ scaleX: progress }} />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open ? 'bg-ink/80 py-3 backdrop-blur-md' : 'py-6'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 md:px-10">
          <a href="#top" className="font-display text-xl font-extrabold tracking-tight" onClick={() => setOpen(false)}>
            KON<span className="text-accent">.</span>AKECH
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="group relative text-sm font-medium text-paper/80 hover:text-paper">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                href="#contact"
                className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-paper sm:inline-flex"
              >
                Let’s Talk <FiArrowUpRight />
              </a>
            </Magnetic>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
              className="relative z-[80] grid size-12 place-items-center rounded-full border border-line bg-panel lg:hidden"
            >
              <span className={`absolute h-0.5 w-5 bg-paper transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1'}`} />
              <span className={`absolute h-0.5 w-5 bg-paper transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1'}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[45] flex flex-col justify-between bg-panel px-4 pb-10 pt-28 md:px-10"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease }}
          >
            <nav className="flex flex-col">
              {nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.6 }}
                  className="flex items-baseline gap-4 border-b border-line py-3 font-display text-4xl font-bold hover:text-accent sm:text-5xl"
                >
                  <span className="text-xs text-muted">0{i + 1}</span>
                  {n.label}
                </motion.a>
              ))}
            </nav>
            <div className="text-sm text-muted">
              <a href={`mailto:${profile.email}`} className="block text-paper">{profile.email}</a>
              {profile.location}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
