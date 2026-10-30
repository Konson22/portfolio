import { FiArrowLeft, FiArrowUpRight, FiCheck, FiDownload, FiFileText, FiPrinter } from 'react-icons/fi'
import { application, cv, profile } from '../data/content'
import { SectionLabel } from './ui'

const container = 'mx-auto max-w-[1400px] px-4 md:px-10'
const site = 'konakech.com'
const cvFile = '/documents/kon-akech-cv.pdf'

function Toolbar({ back, print = true, children }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
      <a href={back.href} className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent">
        <FiArrowLeft /> {back.label}
      </a>
      <div className="flex flex-wrap gap-3">
        {children}
        {print && (
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-paper"
          >
            <FiPrinter /> Print / Save as PDF
          </button>
        )}
      </div>
    </div>
  )
}

// A light, A4-proportioned page that reads as a document on screen and prints as one.
function Sheet({ children }) {
  return (
    <div className="mx-auto mt-10 max-w-[860px] rounded-[1.2rem] bg-paper px-6 py-10 text-ink shadow-2xl sm:px-12 md:px-16 md:py-16 print:mt-0 print:max-w-none print:rounded-none print:p-0 print:shadow-none">
      {children}
    </div>
  )
}

function Letterhead() {
  return (
    <header className="border-b-2 border-ink pb-6">
      <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{profile.name}</h1>
      <p className="mt-1 font-semibold text-ink/70">{cv.title}</p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/70">
        <span>{profile.location}</span>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        <a href={`mailto:${profile.altEmail}`}>{profile.altEmail}</a>
        <a href="/">{site}</a>
      </p>
    </header>
  )
}

export function CvPage() {
  return (
    <section id="top" className={`${container} pb-24 pt-32 md:pt-40`}>
      <Toolbar back={{ href: '/', label: 'Home' }} print={false}>
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
        >
          Open in new tab <FiArrowUpRight />
        </a>
        <a
          href={cvFile}
          download="Kon_Akech_CV.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-paper"
        >
          <FiDownload /> Download CV
        </a>
      </Toolbar>

      <div className="mt-10">
        <SectionLabel>Curriculum Vitae</SectionLabel>
      </div>

      {/* Mobile browsers often can't show a PDF inline; they get the fallback link instead. */}
      <object data={cvFile} type="application/pdf" aria-label={`${profile.name} — Curriculum Vitae`} className="mt-8 h-[85vh] w-full rounded-[1.2rem] border border-line bg-panel">
        <div className="grid h-full place-items-center p-10 text-center">
          <div>
            <FiFileText className="mx-auto text-4xl text-accent" />
            <p className="mt-4 text-paper/80">Your browser can’t display the CV here.</p>
            <a href={cvFile} className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink">
              <FiDownload /> Download CV (PDF)
            </a>
          </div>
        </div>
      </object>
    </section>
  )
}

export function ApplicationPage() {
  const a = application
  return (
    <section id="top" className={`${container} pb-24 pt-32 md:pt-40 print:p-0`}>
      <Toolbar back={{ href: '/', label: 'Home' }}>
        <a
          href="/cv/"
          className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
        >
          <FiFileText /> Curriculum Vitae
        </a>
      </Toolbar>

      <div className="mt-10 print:hidden">
        <SectionLabel>Application · {a.position}</SectionLabel>
      </div>

      <Sheet>
        <Letterhead />
        <p className="mt-8 text-sm">{a.date}</p>
        <address className="mt-6 not-italic leading-relaxed">
          {a.recipient.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="mt-6 font-bold">Re: {a.subject}</p>
        <p className="mt-6">{a.salutation}</p>
        <div className="mt-4 space-y-4 leading-relaxed text-ink/85">
          {a.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-8">{a.closing}</p>
        <p className="mt-10 font-bold">{profile.name}</p>
      </Sheet>

      <div className="mx-auto mt-16 max-w-[860px] print:hidden">
        <div className="grid gap-6 md:grid-cols-2">
          <a href="/cv/" className="group flex flex-col justify-between gap-6 rounded-[1.6rem] border border-line bg-panel p-7 transition-colors hover:border-accent">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">Document 2</span>
              <h2 className="mt-3 font-display text-2xl font-bold">Curriculum Vitae</h2>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">
                Education, employment history, MIS development, database management, reporting, system integration, and training experience.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 font-semibold text-accent group-hover:text-paper">
              View CV <FiArrowUpRight />
            </span>
          </a>
          <div className="rounded-[1.6rem] border border-line bg-panel p-7">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">Supporting documents</span>
            <h2 className="mt-3 font-display text-2xl font-bold">Available on request</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {a.supporting.map((s) => (
                <li key={s} className="flex gap-3 text-paper/80">
                  <FiCheck className="mt-0.5 shrink-0 text-accent" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
