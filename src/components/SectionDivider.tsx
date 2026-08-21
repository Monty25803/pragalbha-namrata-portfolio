import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PortfolioMode } from '../data/profile'
import { accentBg } from '../lib/theme'

interface SectionDividerProps {
  mode: PortfolioMode
}

export default function SectionDivider({ mode }: SectionDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const line =
    mode === 'author'
      ? 'via-author-accent/50'
      : mode === 'social'
        ? 'via-social-accent/50'
        : 'via-terracotta/50'

  return (
    <div ref={ref} className="relative h-px max-w-4xl mx-auto overflow-hidden">
      <motion.div
        className={`h-px w-full bg-gradient-to-r from-transparent ${line} to-transparent`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${accentBg(mode)}`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
      />
    </div>
  )
}
