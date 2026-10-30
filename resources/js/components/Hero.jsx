import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiMapPin } from 'react-icons/fi'
import { marqueeWords, profile } from '../data/content'
import { Magnetic, Marquee, RotatingBadge } from './ui'

const ease = [0.22, 1, 0.36, 1]

function Line({ children, delay, className = '' }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        variants={{ hidden: { y: '105%' }, show: { y: 0, transition: { duration: 1.1, ease, delay } } }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function RoleTicker() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom text-accent">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease }}
          className="block"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// `ready` holds the entrance animation until the preloader has lifted.
export default function Hero({ ready = true }) {
  const { scrollY } = useScroll()
  const yName = useTransform(scrollY, [0, 800], [0, 160])
  const yBg = useTransform(scrollY, [0, 800], [0, 120])

  return (
    <motion.section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden pt-32"
      initial="hidden"
      animate={ready ? 'show' : 'hidden'}
    >
      <motion.div
        aria-hidden
        style={{ y: yBg }}
        variants={{ hidden: { opacity: 0, scale: 1.08 }, show: { opacity: 1, scale: 1, transition: { duration: 1.6, ease } } }}
        className="pointer-events-none absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-[position:70%_center]"
      />
      {/* Fades the image into the page so the marquee and next section blend in. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-4 md:px-10">
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.6, duration: 1 } } }}
          className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/50 px-4 py-2 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Open to opportunities & collaborations
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/50 px-4 py-2 text-paper/80 backdrop-blur">
            <FiMapPin className="text-accent" /> {profile.location}
          </span>
        </motion.div>

        <motion.h1
          style={{ y: yName }}
          className="mt-10 font-display text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tighter md:mt-14 md:text-[12.5vw] xl:text-[min(11rem,12vw)]"
        >
          <Line delay={0.2}>Kon</Line>{' '}
          <Line delay={0.32} className="text-outline md:pl-[18%]">Akech</Line>
        </motion.h1>

        <div className="mt-10 grid items-end gap-10 pb-12 md:mt-auto md:grid-cols-[1fr_auto_auto] md:gap-14">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 1, ease } } }}
            className="max-w-xl"
          >
            <p className="font-display text-2xl font-semibold md:text-3xl">
              <RoleTicker />
            </p>
            <p className="mt-4 text-lg leading-relaxed text-paper/75">{profile.intro}</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { delay: 0.95, duration: 1, ease } } }}
            className="flex flex-wrap gap-3"
          >
            <Magnetic>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-ink transition-colors hover:bg-paper">
                View My Work <FiArrowUpRight />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-7 py-4 font-bold transition-colors hover:border-accent hover:text-accent">
                Contact Me
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.6 }, show: { opacity: 1, scale: 1, transition: { delay: 1.1, duration: 1, ease } } }}
            className="hidden md:block"
          >
            <RotatingBadge text="• Scroll to explore • Scroll to explore ">
              <FiArrowDown className="text-2xl" />
            </RotatingBadge>
          </motion.div>
        </div>
      </div>

      <div className="relative -rotate-2 border-y border-line bg-accent py-4 font-display text-2xl font-bold uppercase text-ink md:text-4xl">
        <Marquee items={marqueeWords} separator="✺" separatorClass="text-ink" />
      </div>
      <div className="h-10" />
    </motion.section>
  )
}
