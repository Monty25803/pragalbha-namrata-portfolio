import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PortfolioMode } from '../data/profile'
import { experience } from '../data/profile'

interface ExperienceProps {
  mode: PortfolioMode
}

export default function Experience({ mode }: ExperienceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isAuthor = mode === 'author'

  return (
    <section
      id="experience"
      ref={ref}
      className={`section-padding transition-colors duration-1000 ${
        isAuthor ? 'bg-ink-950' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p
            className={`text-sm uppercase tracking-[0.25em] mb-4 font-medium ${
              isAuthor ? 'text-author-accent' : 'text-terracotta'
            }`}
          >
            Experience
          </p>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold ${
              isAuthor ? 'text-white' : 'text-ink-900'
            }`}
          >
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-0 md:left-8 top-0 bottom-0 w-px ${
              isAuthor ? 'bg-white/10' : 'bg-ink-200'
            }`}
          />

          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-8 top-1.5 w-3 h-3 -translate-x-1/2 rounded-full border-2 ${
                  job.current
                    ? isAuthor
                      ? 'bg-author-accent border-author-accent'
                      : 'bg-terracotta border-terracotta'
                    : isAuthor
                      ? 'bg-ink-950 border-white/30'
                      : 'bg-white border-ink-300'
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3
                    className={`font-display text-xl font-semibold ${
                      isAuthor ? 'text-white' : 'text-ink-900'
                    }`}
                  >
                    {job.role}
                  </h3>
                  {job.link ? (
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-medium hover:underline ${
                          isAuthor ? 'text-author-accent/80' : 'text-terracotta'
                        }`}
                      >
                        {job.company}
                      </a>
                      {job.current && (
                        <span
                          className={`text-xs uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isAuthor ? 'bg-author-accent/20 text-author-accent' : 'bg-terracotta/10 text-terracotta'
                          }`}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-2">
                      <p
                        className={`font-medium ${
                          isAuthor ? 'text-author-accent/80' : 'text-terracotta'
                        }`}
                      >
                        {job.company}
                      </p>
                      {job.current && (
                        <span
                          className={`text-xs uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isAuthor ? 'bg-author-accent/20 text-author-accent' : 'bg-terracotta/10 text-terracotta'
                          }`}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <span
                  className={`text-sm shrink-0 ${
                    isAuthor ? 'text-white/40' : 'text-ink-400'
                  }`}
                >
                  {job.period}
                </span>
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  isAuthor ? 'text-white/50' : 'text-ink-500'
                }`}
              >
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
