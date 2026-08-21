import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PortfolioMode } from '../data/profile'
import { skills, certifications } from '../data/profile'
import { accentBg, accentText, isDarkMode } from '../lib/theme'

interface SkillsProps {
  mode: PortfolioMode
}

export default function Skills({ mode }: SkillsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const dark = isDarkMode(mode)
  const allSkills = [...skills[mode], ...skills.shared]

  const sectionBg =
    mode === 'author' ? 'bg-author-bg' : mode === 'social' ? 'bg-social-bg' : 'bg-ink-50'

  return (
    <section id="skills" ref={ref} className={`section-padding transition-colors duration-1000 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className={`text-sm uppercase tracking-[0.25em] mb-4 font-medium ${accentText(mode)}`}>
            Skills & Certifications
          </p>
          <h2 className={`font-display text-4xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>
            What I Bring to the Table
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                dark
                  ? 'bg-white/5 border border-white/10 text-white/70 hover:border-white/30'
                  : 'bg-white border border-ink-200 text-ink-600 hover:border-terracotta/40 hover:text-terracotta shadow-sm'
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className={`p-8 rounded-3xl ${dark ? 'glass' : 'bg-white border border-ink-100 shadow-sm'}`}
        >
          <h3 className={`font-display text-xl font-semibold mb-6 ${dark ? 'text-white' : 'text-ink-900'}`}>
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className={`flex items-center gap-3 text-sm ${dark ? 'text-white/60' : 'text-ink-600'}`}
              >
                <span className={`w-2 h-2 rounded-full shrink-0 ${accentBg(mode)}`} />
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
