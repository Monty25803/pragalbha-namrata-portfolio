import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PortfolioMode } from '../data/profile'
import { profile } from '../data/profile'

interface ContactProps {
  mode: PortfolioMode
}

export default function Contact({ mode }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isAuthor = mode === 'author'

  const links = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: profile.linkedin,
      external: true,
    },
    {
      label: 'Fiverr',
      value: isAuthor ? 'Hire for Ghostwriting' : 'Hire for Copywriting',
      href: isAuthor ? profile.fiverr : profile.fiverrCopy,
      external: true,
    },
    {
      label: 'Blog',
      value: 'Behind the Words',
      href: profile.blog,
      external: true,
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-padding transition-colors duration-1000 ${
        isAuthor ? 'bg-ink-950' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className={`text-sm uppercase tracking-[0.25em] mb-4 font-medium ${
              isAuthor ? 'text-author-accent' : 'text-terracotta'
            }`}
          >
            Get in Touch
          </p>
          <h2
            className={`font-display text-4xl md:text-6xl font-bold mb-6 ${
              isAuthor ? 'text-white' : 'text-ink-900'
            }`}
          >
            {isAuthor ? (
              <>
                Let&apos;s Write
                <br />
                <span className="text-author-accent italic">Something Beautiful</span>
              </>
            ) : (
              <>
                Let&apos;s Create
                <br />
                <span className="text-terracotta italic">Something That Converts</span>
              </>
            )}
          </h2>
          <p
            className={`text-lg mb-12 max-w-xl mx-auto ${
              isAuthor ? 'text-white/50 font-serif' : 'text-ink-500'
            }`}
          >
            {isAuthor
              ? 'Available for ghostwriting, serialized fiction, and creative collaborations.'
              : 'Available for content strategy, copywriting, and brand narrative projects.'}
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
                isAuthor
                  ? 'glass hover:border-author-accent/30'
                  : 'bg-ink-50 border border-ink-100 hover:border-terracotta/30 hover:shadow-lg'
              }`}
            >
              <p
                className={`text-xs uppercase tracking-wider mb-2 ${
                  isAuthor ? 'text-white/40' : 'text-ink-400'
                }`}
              >
                {link.label}
              </p>
              <p
                className={`font-medium text-sm ${
                  isAuthor ? 'text-white group-hover:text-author-accent' : 'text-ink-700 group-hover:text-terracotta'
                } transition-colors`}
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
