import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck, FiLock } from 'react-icons/fi'
import { work } from '../data/content'
import { WorkCard, WorkVisual } from './Sections'
import { Reveal, SectionLabel, SplitText } from './ui'

const container = 'mx-auto max-w-[1400px] px-4 md:px-10'

const platformTypes = {
  website: 'Website',
  'web-app': 'Web app',
  portal: 'Portal',
  'mobile-app': 'Mobile app',
  'desktop-app': 'Desktop app',
}

const hostname = (url) => new URL(url).hostname

function accessSummary(platforms) {
  if (!platforms.length) return 'Internal deployment'
  const publicCount = platforms.filter((p) => p.access === 'public').length
  if (publicCount === platforms.length) return 'Public'
  if (publicCount === 0) return 'Private · Demo on request'
  return 'Public & private'
}

function PlatformCard({ platform }) {
  const isPublic = platform.access === 'public'
  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-[1.6rem] border border-line bg-panel p-7">
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-muted">{platformTypes[platform.type] ?? platform.type}</span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isPublic ? 'bg-accent/15 text-accent' : 'border border-line text-paper/70'}`}>
            {isPublic ? 'Public' : 'Private'}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold">{platform.label}</h3>
      </div>
      {platform.url ? (
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start font-semibold text-accent hover:text-paper"
        >
          {isPublic ? null : <FiLock />} {hostname(platform.url)} <FiArrowUpRight />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-muted">
          <FiLock /> Private app · Demo on request
        </span>
      )}
    </div>
  )
}

function Actions({ platforms }) {
  const site = platforms.find((p) => p.access === 'public' && p.url)
  const hasPrivate = platforms.some((p) => p.access === 'private')
  if (!site && !hasPrivate) return null
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {site && (
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-bold text-ink transition-colors hover:bg-paper"
        >
          Visit website <FiArrowUpRight />
        </a>
      )}
      {hasPrivate && (
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-7 py-4 font-bold transition-colors hover:border-accent hover:text-accent"
        >
          <FiLock /> Request a demo
        </a>
      )}
    </div>
  )
}

export function ProjectPage({ project }) {
  const index = work.indexOf(project)
  const next = work[(index + 1) % work.length]
  const overview = project.overview ?? [project.summary]
  const meta = [
    { label: 'Client', value: project.client },
    { label: 'Type', value: project.type },
    { label: 'Access', value: accessSummary(project.platforms) },
  ]

  return (
    <article id="top" className={`${container} pb-24 pt-32 md:pb-36 md:pt-40`}>
      <a href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent">
        <FiArrowLeft /> All work
      </a>

      <Reveal>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{project.kicker}</p>
        <h1 className="mt-4 max-w-5xl font-display text-[min(9vw,5.5rem)] font-extrabold leading-[0.95]">{project.title}</h1>
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="mt-12 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">{m.label}</dt>
              <dd className="mt-2 font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>
        <Actions platforms={project.platforms} />
      </Reveal>

      <Reveal delay={0.15} className="mt-14">
        <WorkVisual index={index} hue={project.hue} image={project.image} title={project.title} />
      </Reveal>

      <div className="mt-20 grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionLabel>Overview</SectionLabel>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full bg-panel px-3 py-1 text-xs text-paper/80">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {overview.map((p) => (
            <Reveal key={p}>
              <p className="text-lg leading-relaxed text-paper/75 md:text-xl">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {project.platforms.length > 0 && (
        <div className="mt-24">
          <SectionLabel>Platforms</SectionLabel>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.platforms.map((p, i) => (
              <Reveal key={p.label} delay={(i % 3) * 0.08}>
                <PlatformCard platform={p} />
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {project.features && (
        <div className="mt-24">
          <SectionLabel>What it covers</SectionLabel>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {project.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-[1.6rem] border border-line bg-panel p-7 md:p-9">
                  <h2 className="font-display text-2xl font-bold">{f.title}</h2>
                  <ul className="mt-5 space-y-2">
                    {f.items.map((item) => (
                      <li key={item} className="flex gap-3 text-paper/80">
                        <FiCheck className="mt-1 shrink-0 text-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <a href={`/work/${next.slug}`} className="group mt-24 flex items-center justify-between gap-6 border-t border-line pt-10" data-cursor>
        <span>
          <span className="block text-xs uppercase tracking-[0.2em] text-muted">Next project</span>
          <span className="mt-3 block font-display text-3xl font-bold transition-colors group-hover:text-accent md:text-5xl">{next.title}</span>
        </span>
        <span className="grid size-14 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:bg-accent group-hover:text-ink">
          <FiArrowRight />
        </span>
      </a>
    </article>
  )
}

export function WorkIndexPage() {
  return (
    <section id="top" className={`${container} pb-24 pt-32 md:pb-36 md:pt-40`}>
      <a href="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent">
        <FiArrowLeft /> Home
      </a>
      <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel>All work</SectionLabel>
          <h1 className="mt-6 font-display text-[min(8.5vw,6rem)] font-extrabold uppercase leading-none">
            <SplitText text="All" /> <SplitText text="Projects" className="text-outline" delay={0.1} />
          </h1>
        </div>
        <p className="max-w-sm text-muted">
          {work.length} projects — management systems, portals, mobile apps, and websites for organisations across South Sudan.
        </p>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {work.map((w, i) => (
          <Reveal key={w.slug} delay={(i % 3) * 0.1}>
            <WorkCard project={w} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
