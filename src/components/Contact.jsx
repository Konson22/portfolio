import { useState } from 'react'
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone, FiArrowUp } from 'react-icons/fi'
import { nav, profile } from '../data/content'
import { Magnetic, Marquee, Reveal, SectionLabel, SplitText } from './ui'

const container = 'mx-auto max-w-[1400px] px-4 md:px-10'

const field =
  'w-full border-b border-line bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-muted focus:border-accent'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No backend: hand the message to the visitor's mail client.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const cards = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiMail, label: 'Alternative email', value: profile.altEmail, href: `mailto:${profile.altEmail}` },
    { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="pt-24 md:pt-36">
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
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-[2rem] border border-line bg-panel p-7 md:p-12">
            <h3 className="font-display text-2xl font-bold">Send a message</h3>
            <div className="mt-6 space-y-2">
              <input required className={field} placeholder="Your name" value={form.name} onChange={set('name')} />
              <input required type="email" className={field} placeholder="Your email" value={form.email} onChange={set('email')} />
              <textarea required rows={5} className={`${field} resize-none`} placeholder="Tell me about your project" value={form.message} onChange={set('message')} />
            </div>
            <div className="mt-10">
              <Magnetic>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-ink transition-colors hover:bg-paper">
                  Get in Touch <FiArrowUpRight />
                </button>
              </Magnetic>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${container} py-14`}>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <a href="#top" className="font-display text-2xl font-extrabold sm:text-3xl">
            KON<span className="text-accent">.</span>AKECH
          </a>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="inline-block py-2 hover:text-accent">
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
