import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PortfolioMode } from '../data/profile'

interface SectionDividerProps {
  mode: PortfolioMode
}

export default function SectionDivider({ mode }: SectionDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isAuthor = mode === 'author'

  return (
    <div ref={ref} className="relative h-px max-w-4xl mx-auto overflow-hidden">
      <motion.div
        className={`h-px w-full ${
          isAuthor
            ? 'bg-gradient-to-r from-transparent via-author-accent/50 to-transparent'
            : 'bg-gradient-to-r from-transparent via-terracotta/50 to-transparent'
        }`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
          isAuthor ? 'bg-author-accent' : 'bg-terracotta'
        }`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
      />
    </div>
  )
}
