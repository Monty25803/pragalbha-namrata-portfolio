import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PortfolioMode } from '../data/profile'
import { stats } from '../data/profile'

interface StatsProps {
  mode: PortfolioMode
}

export default function Stats({ mode }: StatsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const isAuthor = mode === 'author'

  const filteredStats = stats.filter(
    (s) => s.mode === 'both' || s.mode === mode
  )

  return (
    <section
      ref={ref}
      className={`py-16 transition-colors duration-1000 relative overflow-hidden ${
        isAuthor
          ? 'bg-gradient-to-r from-author-bg via-ink-950 to-author-bg'
          : 'bg-ink-50'
      }`}
    >
      {/* Animated background line */}
      <motion.div
        className={`absolute top-0 left-0 right-0 h-px ${
          isAuthor
            ? 'bg-gradient-to-r from-transparent via-author-accent/30 to-transparent'
            : 'bg-gradient-to-r from-transparent via-terracotta/30 to-transparent'
        }`}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`text-center p-4 rounded-2xl transition-colors ${
                isAuthor ? 'hover:bg-white/5' : 'hover:bg-white hover:shadow-lg'
              }`}
            >
              <motion.p
                className={`text-3xl md:text-4xl font-display font-bold mb-2 ${
                  isAuthor ? 'text-author-accent' : 'text-terracotta'
                }`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                {stat.value}
              </motion.p>
              <p
                className={`text-xs uppercase tracking-wider ${
                  isAuthor ? 'text-white/40' : 'text-ink-500'
                }`}
              >
                {stat.label}
              </p>
              <motion.div
                className={`h-0.5 mx-auto mt-3 rounded-full ${
                  isAuthor ? 'bg-author-accent/30' : 'bg-terracotta/30'
                }`}
                initial={{ width: 0 }}
                animate={isInView ? { width: '40%' } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
