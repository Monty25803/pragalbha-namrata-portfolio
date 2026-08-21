import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import type { PortfolioMode } from '../data/profile'
import { profile } from '../data/profile'
import { accentText, isDarkMode } from '../lib/theme'

interface ContactProps {
  mode: PortfolioMode
}

const contactCopy: Record<
  PortfolioMode,
  { title: ReactNode; blurb: string; fiverrLabel: string; fiverrHref: string }
> = {
  author: {
    title: (
      <>
        Let&apos;s Write
        <br />
        <span className="text-author-accent italic">Something Beautiful</span>
      </>
    ),
    blurb: 'Available for ghostwriting, serialized fiction, and creative collaborations.',
    fiverrLabel: 'Hire for Ghostwriting',
    fiverrHref: profile.fiverr,
  },
  copywriter: {
    title: (
      <>
        Let&apos;s Create
        <br />
        <span className="text-terracotta italic">Something That Converts</span>
      </>
    ),
    blurb: 'Available for content strategy, copywriting, and brand narrative projects.',
    fiverrLabel: 'Hire for Copywriting',
    fiverrHref: profile.fiverrCopy,
  },
  social: {
    title: (
      <>
        Let&apos;s Build
        <br />
        <span className="text-social-accent italic">A System That Reaches</span>
      </>
    ),
    blurb: 'Available for social strategy, content systems, campaigns, and platform management.',
    fiverrLabel: 'Hire for Writing',
    fiverrHref: profile.fiverr,
  },
}

export default function Contact({ mode }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const dark = isDarkMode(mode)
  const copy = contactCopy[mode]

  const sectionBg =
    mode === 'author' ? 'bg-ink-950' : mode === 'social' ? 'bg-social-mist' : 'bg-white'

  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin, external: true },
    { label: 'Fiverr', value: copy.fiverrLabel, href: copy.fiverrHref, external: true },
    { label: 'Blog', value: 'Behind the Words', href: profile.blog, external: true },
  ]

  return (
    <section id="contact" ref={ref} className={`section-padding transition-colors duration-1000 ${sectionBg}`}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className={`text-sm uppercase tracking-[0.25em] mb-4 font-medium ${accentText(mode)}`}>
            Get in Touch
          </p>
          <h2 className={`font-display text-4xl md:text-6xl font-bold mb-6 ${dark ? 'text-white' : 'text-ink-900'}`}>
            {copy.title}
          </h2>
          <p className={`text-lg mb-12 max-w-xl mx-auto ${dark ? 'text-white/50 font-serif' : 'text-ink-500'}`}>
            {copy.blurb}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group p-6 rounded-2xl transition-all duration-500 ${
                dark
                  ? 'glass hover:border-white/20'
                  : 'bg-ink-50 border border-ink-100 hover:border-terracotta/30 hover:shadow-lg'
              }`}
            >
              <p className={`text-xs uppercase tracking-wider mb-2 ${dark ? 'text-white/40' : 'text-ink-400'}`}>
                {link.label}
              </p>
              <p
                className={`font-medium text-sm transition-colors ${
                  mode === 'author'
                    ? 'text-white group-hover:text-author-accent'
                    : mode === 'social'
                      ? 'text-white group-hover:text-social-accent'
                      : 'text-ink-700 group-hover:text-terracotta'
                }`}
              >
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
