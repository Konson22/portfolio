import { useState } from 'react'
import { useForm } from '@inertiajs/react'
import { FiArrowUpRight, FiCheck, FiMail, FiMapPin, FiPhone, FiArrowUp } from 'react-icons/fi'
import { nav, navHref, profile, services } from '../data/content'
import { Magnetic, Marquee, Reveal, SectionLabel, SplitText } from './ui'

const container = 'mx-auto max-w-[1400px] px-4 md:px-10'

const field =
  'w-full rounded-xl border border-paper/15 bg-ink/40 px-5 py-4 text-lg outline-none transition-colors placeholder:text-muted hover:border-paper/30 focus:border-accent'

function FieldError({ message }) {
  return message ? <p className="text-sm text-red-400">{message}</p> : null
}

export function Contact() {
  // `website` is a honeypot: hidden from people, so only bots fill it in.
  const form = useForm({ name: '', email: '', service: '', message: '', website: '' })
  const set = (k) => (e) => form.setData(k, e.target.value)
  const [sent, setSent] = useState(false)

  // ContactController emails the message over SMTP (see MAIL_* in .env).
  const submit = (e) => {
    e.preventDefault()
    setSent(false)
    form.post('/contact', {
      preserveScroll: true,
      onSuccess: () => {
        form.reset()
        setSent(true)
      },
    })
  }

  const cards = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiMail, label: 'Alternative email', value: profile.altEmail, href: `mailto:${profile.altEmail}` },
    { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="pt-24 md:pt-36 print:hidden">
      <div className="border-y border-line py-8 font-display text-6xl font-extrabold uppercase md:text-9xl">
        <Marquee items={['Get in Touch', 'Let’s Connect']} separator="✺" />
      </div>

      <div className={`${container} grid gap-16 py-24 lg:grid-cols-2`}>
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
            <SplitText text="Have a project or opportunity in mind?" />
          </h2>
          <Reveal>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/70">
              I am interested in opportunities and collaborations involving IT engineering, software engineering, digital transformation, Microsoft
              technologies, business information systems, and technology implementation.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {cards.map(({ icon: Icon, label, value, href }) => {
              const Tag = href ? 'a' : 'div'
              return (
                <Reveal key={label} y={20}>
                  <Tag href={href} className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-accent">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-ink">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
                      <span className="mt-1 block break-words font-semibold group-hover:text-accent">{value}</span>
                    </span>
                  </Tag>
                </Reveal>
              )
            })}
          </div>
          <a href="/cv" className="mt-8 inline-flex items-center gap-2 font-semibold text-accent hover:text-paper">
            View my CV <FiArrowUpRight />
          </a>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-[2rem] border border-line bg-panel p-7 md:p-12">
            <h3 className="font-display text-2xl font-bold">Send a message</h3>
            <div className="mt-6 space-y-4">
              <input required name="name" autoComplete="name" maxLength={100} aria-label="Your name" className={field} placeholder="Your name" value={form.data.name} onChange={set('name')} />
              <FieldError message={form.errors.name} />
              <input required name="email" type="email" autoComplete="email" maxLength={150} aria-label="Your email" className={field} placeholder="Your email" value={form.data.email} onChange={set('email')} />
              <FieldError message={form.errors.email} />
              {/* ContactController accepts exactly these values: the service titles plus 'Other'. */}
              <select
                required
                name="service"
                aria-label="Service"
                className={`${field} cursor-pointer ${form.data.service ? '' : 'text-muted'}`}
                value={form.data.service}
                onChange={set('service')}
              >
                <option value="" disabled>
                  What can I help you with?
                </option>
                {services.map((s) => (
                  <option key={s.title} value={s.title} className="bg-panel text-paper">
                    {s.title}
                  </option>
                ))}
                <option value="Other" className="bg-panel text-paper">
                  Other
                </option>
              </select>
              <FieldError message={form.errors.service} />
              <textarea required name="message" rows={5} maxLength={5000} aria-label="Your message" className={`${field} resize-none`} placeholder="Tell me about your project" value={form.data.message} onChange={set('message')} />
              <FieldError message={form.errors.message} />
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.data.website} onChange={set('website')} />
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Magnetic>
                <button
                  type="submit"
                  disabled={form.processing}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-ink transition-colors hover:bg-paper disabled:cursor-wait disabled:opacity-60"
                >
                  {form.processing ? 'Sending…' : 'Get in Touch'} <FiArrowUpRight />
                </button>
              </Magnetic>
              <p role="status" aria-live="polite" className="text-sm">
                {sent && (
                  <span className="inline-flex items-center gap-2 text-accent">
                    <FiCheck /> Thanks — your message has been sent. I’ll get back to you soon.
                  </span>
                )}
                {form.errors.form && <span className="text-red-400">{form.errors.form}</span>}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer({ home = true }) {
  return (
    <footer className="border-t border-line print:hidden">
      <div className={`${container} py-14`}>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <a href={home ? '#top' : '/'} className="font-display text-2xl font-extrabold sm:text-3xl">
            KON<span className="text-accent">.</span>AKECH
          </a>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
            {nav.map((n) => (
              <a key={n.href} href={navHref(n.href, home)} className="inline-block py-2 hover:text-accent">
                {n.label}
              </a>
            ))}
          </nav>
          <Magnetic>
            <a href="#top" aria-label="Back to top" className="grid size-14 place-items-center rounded-full border border-line hover:bg-accent hover:text-ink">
              <FiArrowUp />
            </a>
          </Magnetic>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-line pt-8 text-sm text-muted">
          <span>© {new Date().getFullYear()} Kon Akech. All rights reserved.</span>
          <span>IT Engineer · Software Engineer · {profile.location}</span>
        </div>
      </div>
    </footer>
  )
}
