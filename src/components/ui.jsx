import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 40, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

// Splits a heading into words that slide up from a mask, one after another.
// The wrapper watches the viewport: the words start fully clipped by their mask,
// so an observer on each word would never report them as visible.
export function SplitText({ text, className = '', delay = 0 }) {
  return (
    <motion.span className={className} aria-label={text} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.06 }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
      <span className="h-px w-10 bg-accent" />
      {children}
    </span>
  )
}

export function Marquee({ items, reverse = false, className = '', separator = '✦', separatorClass = 'text-accent' }) {
  const row = [...items, ...items]
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`flex shrink-0 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {row.map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="px-6">{item}</span>
                <span className={separatorClass}>{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function RotatingBadge({ text, href = '#about', size = 150, children }) {
  const chars = text.split('')
  return (
    <a href={href} className="group relative grid place-items-center rounded-full" style={{ width: size, height: size }}>
      <span className="absolute inset-0 animate-spin-slow">
        {chars.map((c, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 text-[11px] font-semibold uppercase tracking-widest"
            style={{ transform: `rotate(${(360 / chars.length) * i}deg)`, transformOrigin: `0 ${size / 2}px` }}
          >
            {c}
          </span>
        ))}
      </span>
      <span className="grid size-16 place-items-center rounded-full bg-accent text-ink transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45">
        {children}
      </span>
    </a>
  )
}

export function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 200, damping: 15 })
  const y = useSpring(0, { stiffness: 200, damping: 15 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * strength)
    y.set((e.clientY - r.top - r.height / 2) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={reset} className="inline-block">
      {children}
    </motion.div>
  )
}

export function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.8, ease, onUpdate: (v) => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return (
    <span ref={ref}>
      {String(val).padStart(2, '0')}
      {suffix}
    </span>
  )
}

export function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 350, damping: 30 })
  const sy = useSpring(y, { stiffness: 350, damping: 30 })
  const [hover, setHover] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    setEnabled(true)
    document.body.classList.add('has-cursor')
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHover(!!e.target.closest?.('a, button, [data-cursor]'))
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('has-cursor')
    }
  }, [x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-accent mix-blend-difference"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: hover ? 64 : 14, height: hover ? 64 : 14 }}
        transition={{ duration: 0.3, ease }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] size-1.5 rounded-full bg-paper"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
