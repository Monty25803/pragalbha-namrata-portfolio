import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import type { PortfolioMode } from '../data/profile'
import { profile } from '../data/profile'
import { accentText, isDarkMode } from '../lib/theme'

interface AboutProps {
  mode: PortfolioMode
}

const aboutMeta: Record<
  PortfolioMode,
  { headline: ReactNode; subtitle: string; stats: { value: string; label: string }[]; link?: { href: string; label: string } }
> = {
  author: {
    headline: (
      <>
        The Literary World of
        <br />
        <span className="italic text-author-accent">Pragalbha Namrata</span>
      </>
    ),
    subtitle: `Writing as ${profile.penName}`,
    stats: [
      { value: '700K+', label: 'Fiction Readers' },
      { value: '10+', label: 'Published Works' },
      { value: '5★', label: 'Freelance Rating' },
      { value: '4+', label: 'Years Experience' },
    ],
    link: { href: profile.blog, label: 'Visit my blog — Behind the Words' },
  },
  copywriter: {
    headline: (
      <>
        Content that earns
        <br />
        <span className="italic text-terracotta">trust first.</span>
      </>
    ),
    subtitle: 'Content Strategist & Copywriter',
    stats: [
      { value: '25%', label: 'Traffic Growth' },
      { value: '400K+', label: 'WebNovel Readers' },
      { value: '5/5', label: 'Fiverr Rating' },
      { value: '4+', label: 'Years in Strategy' },
    ],
  },
  social: {
    headline: (
      <>
        Systems that turn
        <br />
        <span className="italic text-social-accent">attention into signal.</span>
      </>
    ),
    subtitle: 'Social Strategy · Rolling Authors®',
    stats: [
      { value: '2.04M', label: 'IG Views (90d)' },
      { value: '1.26M', label: 'Accounts Reached' },
      { value: '99.4%', label: 'Non-Follower Views' },
      { value: '1,244', label: 'Profile Activity' },
    ],
    link: {
      href: 'https://www.instagram.com/rollingauthors/',
      label: 'See @rollingauthors on Instagram',
    },
  },
}

export default function About({ mode }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const dark = isDarkMode(mode)
  const meta = aboutMeta[mode]

  const ring =
    mode === 'author'
      ? 'border-author-accent/30'
      : mode === 'social'
        ? 'border-social-accent/30'
        : 'border-terracotta/30'

  const glow =
    mode === 'author'
      ? 'bg-author-accent/20'
      : mode === 'social'
        ? 'bg-social-accent/20'
        : 'bg-terracotta/20'

  const sectionBg =
    mode === 'author'
      ? 'bg-ink-950'
      : mode === 'social'
        ? 'bg-social-mist'
        : 'bg-white'

  return (
    <section
      id="about"
      ref={ref}
      className={`section-padding transition-colors duration-1000 ${sectionBg}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, type: 'spring' }}
              className="relative mx-auto md:mx-0 w-64 h-64 md:w-72 md:h-72"
            >
              <motion.div
                className={`absolute -inset-3 rounded-full border-2 border-dashed ${ring}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className={`absolute inset-0 rounded-full ${glow} blur-2xl`}
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src={mode === 'social' ? '/social/namrata-portrait.jpg' : '/profile.jfif'}
                alt={profile.name}
                whileHover={{ scale: 1.05 }}
                className={`relative w-full h-full object-cover rounded-full border-4 ${ring}`}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className={`text-center md:text-left mt-6 font-display text-lg italic ${accentText(mode)}`}
            >
              {meta.subtitle}
            </motion.p>
          </div>

          <div>
            <p className={`text-sm uppercase tracking-[0.25em] mb-4 font-medium ${accentText(mode)}`}>
              About Me
            </p>
            <h2
              className={`font-display text-4xl md:text-5xl font-bold mb-8 leading-tight ${
                dark ? 'text-white' : 'text-ink-900'
              }`}
            >
              {meta.headline}
            </h2>

            <motion.div
              key={mode}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base leading-relaxed whitespace-pre-line ${
                dark ? 'text-white/70 font-serif' : 'text-ink-600'
              }`}
            >
              {profile.about[mode]}
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-4">
              {meta.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`px-5 py-3 rounded-xl ${dark ? 'glass' : 'glass-light'}`}
                >
                  <p className={`text-2xl font-bold ${accentText(mode)}`}>{stat.value}</p>
                  <p className={`text-xs uppercase tracking-wider ${dark ? 'text-white/50' : 'text-ink-500'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {meta.link && (
              <a
                href={meta.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-8 text-sm font-medium hover:underline ${accentText(mode)}`}
              >
                {meta.link.label}
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
