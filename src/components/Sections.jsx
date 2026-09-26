import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight, FiCheck, FiPlus } from 'react-icons/fi'
import { about, education, experience, focus, approach, services, skills, work } from '../data/content'
import { Counter, Reveal, SectionLabel, SplitText } from './ui'

const ease = [0.22, 1, 0.36, 1]
const container = 'mx-auto max-w-[1400px] px-4 md:px-10'

/* ---------------- About ---------------- */
export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 40])

  return (
    <section id="about" ref={ref} className={`${container} py-24 md:py-36`}>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionLabel>About me</SectionLabel>
          <div className="relative mt-10 aspect-square max-w-md overflow-hidden rounded-[2rem] border border-line bg-panel">
            <motion.div style={{ rotate }} className="absolute inset-[-20%] bg-[conic-gradient(from_0deg,#d4ff3a,transparent_30%,#3a7bff_55%,transparent_75%,#d4ff3a)] opacity-40 blur-2xl" />
            <div className="group absolute inset-3 overflow-hidden rounded-[1.6rem] bg-ink">
              <img
                src="/images/kon-1.webp"
                srcSet="/images/kon-1-600.webp 600w, /images/kon-1.webp 1000w"
                sizes="(min-width: 1024px) 448px, min(448px, 92vw)"
                width={1000}
                height={1000}
                decoding="async"
                alt="Kon Akech, IT Engineer and Software Engineer in Juba, South Sudan"
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <p className="absolute inset-x-4 bottom-4 rounded-full bg-ink/70 px-4 py-2 text-center text-xs uppercase tracking-[0.35em] text-paper/80 backdrop-blur">
                IT · Software · Operations
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            <SplitText text={about.title} />
          </h2>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p className="mt-6 text-lg leading-relaxed text-paper/70">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {about.perspectives.map((p) => (
                <span key={p} className="rounded-full border border-line px-4 py-2 text-sm">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-line pt-10">
            {about.stats.map((s) => (
              <Reveal key={s.label}>
                <div className="font-display text-4xl font-extrabold text-accent md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Services ---------------- */
export function Services() {
  const [open, setOpen] = useState(0)
  return (
    <section id="services" className="rounded-[3rem] bg-paper py-24 text-ink md:py-36">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
              <span className="h-px w-10 bg-ink" /> What I do
            </span>
            <h2 className="mt-6 font-display text-[min(8.5vw,6rem)] font-extrabold uppercase leading-none">
              <SplitText text="Services" />
            </h2>
          </div>
          <p className="max-w-sm text-ink/70">From application code to network cables — the full stack of technology organizations rely on every day.</p>
        </div>

        <div className="mt-16 border-t border-ink/15">
          {services.map((s, i) => {
            const active = open === i
            return (
              <div key={s.title} className="border-b border-ink/15">
                <button
                  onClick={() => setOpen(active ? -1 : i)}
                  className="group flex w-full items-center gap-6 py-8 text-left md:gap-12"
                  aria-expanded={active}
                >
                  <span className="font-display text-sm font-bold text-ink/40">0{i + 1}</span>
                  <span className="flex-1 font-display text-2xl font-bold transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">
                    {s.title}
                  </span>
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-full border border-ink/20 transition-all duration-500 md:size-16 ${
                      active ? 'rotate-45 bg-ink text-accent' : 'group-hover:bg-accent'
                    }`}
                  >
                    <FiPlus className="text-xl" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 md:grid-cols-[auto_1fr_2fr] md:gap-12">
                        <span className="hidden w-5 md:block" />
                        <p className="text-lg text-ink/70">{s.blurb}</p>
                        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                          {s.items.map((it) => (
                            <li key={it} className="flex items-center gap-3 font-medium">
                              <span className="grid size-5 place-items-center rounded-full bg-accent text-[10px]">
                                <FiCheck />
                              </span>
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Featured work ---------------- */
function WorkVisual({ index, hue }) {
  // Abstract, per-project artwork so the grid feels like a portfolio without stock images.
  const shapes = [
    <div key="a" className="grid w-40 grid-cols-3 gap-3 sm:w-48">{Array.from({ length: 9 }).map((_, i) => <div key={i} className="aspect-square rounded-xl bg-white/25" style={{ opacity: 0.3 + ((i * 7) % 10) / 14 }} />)}</div>,
    <div key="b" className="flex h-40 items-end gap-3">{[40, 65, 50, 85, 70, 100, 90].map((h, i) => <div key={i} className="w-6 rounded-t-lg bg-white/40" style={{ height: `${h}%` }} />)}</div>,
    <div key="c" className="relative size-44"><div className="absolute inset-0 rounded-full border-2 border-dashed border-white/50" /><div className="absolute inset-8 rounded-full border-2 border-white/40" /><div className="absolute inset-[4.5rem] rounded-full bg-white/70" /></div>,
    <div key="d" className="flex flex-wrap justify-center gap-2 px-6">{['FIN', 'PRC', 'INV', 'HR', 'PAY', 'PRJ', 'BDG', 'APR', 'RPT'].map((t) => <span key={t} className="rounded-full bg-white/25 px-3 py-1.5 text-xs font-bold text-white">{t}</span>)}</div>,
  ]
  return (
    <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${hue}`}>
      <div className="transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3">{shapes[index % shapes.length]}</div>
      <span className="absolute left-5 top-5 font-display text-sm font-bold text-white/80">0{index + 1}</span>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className={`${container} py-24 md:py-36`}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel>Featured work</SectionLabel>
          <h2 className="mt-6 font-display text-[min(8.5vw,6rem)] font-extrabold uppercase leading-none">
            <SplitText text="Selected" />
            <br />
            <SplitText text="Projects" className="text-outline" delay={0.1} />
          </h2>
        </div>
        <p className="max-w-sm text-muted">Systems built and supported for real organizations — utilities, enterprises, and field teams.</p>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {work.map((w, i) => (
          <Reveal key={w.title} delay={(i % 2) * 0.15} className={i % 2 ? 'md:mt-28' : ''}>
            <article className="group" data-cursor>
              <WorkVisual index={i} hue={w.hue} />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{w.kicker}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight md:text-3xl">{w.title}</h3>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:bg-accent group-hover:text-ink">
                  <FiArrowUpRight />
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-paper/65">{w.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span key={t} className="rounded-full bg-panel px-3 py-1 text-xs text-paper/80">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Experience ---------------- */
export function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-panel py-24 md:py-36">
      <div className={container}>
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mt-6 font-display text-[min(8.5vw,4.5rem)] font-extrabold uppercase leading-none">
          <SplitText text="Where I’ve" />
          <br />
          <SplitText text="worked" className="text-accent" delay={0.1} />
        </h2>
      </div>
      <div className={`${container} mt-8 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal delay={0.15}>
            <div className="group relative aspect-square w-full max-w-xl overflow-hidden lg:max-w-none rounded-[1.6rem] border border-line">
              <img
                src="/images/Kon-2.webp"
                srcSet="/images/Kon-2-600.webp 600w, /images/Kon-2.webp 1000w"
                sizes="(min-width: 1024px) 420px, min(576px, 92vw)"
                width={1000}
                height={1000}
                decoding="async"
                alt="Kon Akech, IT Engineer with the JICA water supply project in Juba"
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-ink/75 px-4 py-3 backdrop-blur">
                <span className="relative flex size-2.5 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-sm">
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted">Currently</span>
                  IT Engineer · JICA Water Supply Project
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-muted lg:max-w-none">Enterprise IT, software leadership, and industrial operations — three perspectives on how technology must work.</p>
          </Reveal>
        </div>

        <div className="space-y-6">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.05}>
              <div className="group rounded-[1.6rem] border border-line bg-ink p-7 transition-colors duration-500 hover:border-accent/60 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold md:text-4xl">{e.role}</h3>
                    <p className="mt-2 font-medium text-accent">{e.org}</p>
                  </div>
                  <span className="rounded-full border border-line px-4 py-1.5 text-xs text-muted">{e.meta}</span>
                </div>
                <p className="mt-6 leading-relaxed text-paper/70">{e.summary}</p>
                <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-paper/80">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Skills ---------------- */
export function Skills() {
  const [tab, setTab] = useState(0)
  return (
    <section id="skills" className={`${container} py-24 md:py-36`}>
      <div className="text-center">
        <SectionLabel>Technical skills</SectionLabel>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">
          <SplitText text="Tools & technologies I work with every day" />
        </h2>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {skills.map((s, i) => (
          <button
            key={s.group}
            onClick={() => setTab(i)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${tab === i ? 'text-ink' : 'text-paper/70 hover:text-paper'}`}
          >
            {tab === i && <motion.span layoutId="skill-pill" className="absolute inset-0 rounded-full bg-accent" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
            <span className="relative">{s.group}</span>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-12 min-h-48 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{ show: { transition: { staggerChildren: 0.04 } }, hidden: {} }}
          >
            {skills[tab].items.map((it) => (
              <motion.span
                key={it}
                variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } }}
                className="rounded-2xl border border-line bg-panel px-6 py-4 font-display text-lg font-semibold transition-colors hover:border-accent hover:text-accent md:text-xl"
              >
                {it}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/* ---------------- Process ---------------- */
export function Process() {
  return (
    <section className="rounded-[3rem] bg-accent py-24 text-ink md:py-36">
      <div className={container}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
              <span className="h-px w-10 bg-ink" /> How I work
            </span>
            <h2 className="mt-6 font-display text-[min(8.5vw,6rem)] font-extrabold uppercase leading-none">
              <SplitText text="My Approach" />
            </h2>
          </div>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {approach.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-[1.6rem] bg-ink p-8 text-paper transition-transform duration-500 hover:-translate-y-2">
                <span className="font-display text-6xl font-extrabold text-outline opacity-60 transition-opacity group-hover:opacity-100">0{i + 1}</span>
                <h3 className="mt-10 font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-paper/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Education & current focus ---------------- */
export function Education() {
  return (
    <section className={`${container} grid gap-16 py-24 md:py-36 lg:grid-cols-2`}>
      <div>
        <SectionLabel>Education</SectionLabel>
        <div className="mt-10 border-t border-line">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className="group border-b border-line py-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{e.org}</p>
                <h3 className="mt-3 font-display text-2xl font-bold transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">{e.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>Current focus</SectionLabel>
        <Reveal>
          <p className="mt-10 font-display text-2xl font-semibold leading-snug md:text-3xl">
            Strengthening my expertise — and pursuing <span className="text-accent">Microsoft professional certification</span> to complement hands-on Microsoft 365 implementation experience.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3">
          {focus.map((f, i) => (
            <Reveal key={f} delay={i * 0.05} y={20}>
              <div className="flex items-center gap-3 rounded-2xl border border-line px-5 py-4 text-sm font-medium transition-colors hover:border-accent">
                <span className="size-2 rounded-full bg-accent" />
                {f}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
