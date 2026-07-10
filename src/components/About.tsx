import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PortfolioMode } from '../data/profile'
import { profile } from '../data/profile'

interface AboutProps {
  mode: PortfolioMode
}

export default function About({ mode }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isAuthor = mode === 'author'

  const statCards = isAuthor
    ? [
        { value: '700K+', label: 'Fiction Readers' },
        { value: '10+', label: 'Published Works' },
        { value: '5★', label: 'Freelance Rating' },
        { value: '4+', label: 'Years Experience' },
      ]
    : [
        { value: '25%', label: 'Traffic Growth' },
        { value: '400K+', label: 'WebNovel Readers' },
        { value: '5/5', label: 'Fiverr Rating' },
        { value: '4+', label: 'Years in Strategy' },
      ]

  return (
    <section
      id="about"
      ref={ref}
      className={`section-padding transition-colors duration-1000 ${
        isAuthor ? 'bg-ink-950' : 'bg-white'
      }`}
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
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, type: 'spring' }}
              className="relative mx-auto md:mx-0 w-64 h-64 md:w-72 md:h-72"
            >
              <motion.div
                className={`absolute -inset-3 rounded-full border-2 border-dashed ${
                  isAuthor ? 'border-author-accent/30' : 'border-terracotta/30'
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className={`absolute -inset-6 rounded-full border ${
                  isAuthor ? 'border-author-glow/20' : 'border-terracotta/15'
                }`}
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  isAuthor ? 'bg-author-accent/20' : 'bg-terracotta/20'
                } blur-2xl`}
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img
                src="/profile.jfif"
                alt={profile.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative w-full h-full object-cover rounded-full border-4 ${
                  isAuthor ? 'border-author-accent/40' : 'border-terracotta/40'
                }`}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className={`text-center md:text-left mt-6 font-display text-lg italic ${
                isAuthor ? 'text-author-accent' : 'text-terracotta'
              }`}
            >
              Writing as {profile.penName}
            </motion.p>
          </div>

          <div>
            <p
              className={`text-sm uppercase tracking-[0.25em] mb-4 font-medium ${
                isAuthor ? 'text-author-accent' : 'text-terracotta'
              }`}
            >
              About Me
            </p>
            <h2
              className={`font-display text-4xl md:text-5xl font-bold mb-8 leading-tight ${
                isAuthor ? 'text-white' : 'text-ink-900'
              }`}
            >
              {isAuthor ? (
                <>
                  The Literary World of
                  <br />
                  <span className="italic text-author-accent">Pragalbha Namrata</span>
                </>
              ) : (
                <>
                  Content that earns
                  <br />
                  <span className="italic text-terracotta">trust first.</span>
                </>
              )}
            </h2>

            <motion.div
              key={mode}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base leading-relaxed whitespace-pre-line ${
                isAuthor ? 'text-white/70 font-serif' : 'text-ink-600'
              }`}
            >
              {profile.about[mode]}
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {statCards.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className={`px-5 py-3 rounded-xl ${
                    isAuthor ? 'glass' : 'glass-light'
                  }`}
                >
                  <p className={`text-2xl font-bold ${isAuthor ? 'text-author-accent' : 'text-terracotta'}`}>
                    {stat.value}
                  </p>
                  <p className={`text-xs uppercase tracking-wider ${isAuthor ? 'text-white/50' : 'text-ink-500'}`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {isAuthor && (
              <motion.a
                href={profile.blog}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-2 mt-8 text-author-accent text-sm font-medium hover:underline"
              >
                Visit my blog — Behind the Words
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
