import { motion } from 'framer-motion'
import type { PortfolioMode } from '../data/profile'
import { isDarkMode } from '../lib/theme'

const itemsByMode: Record<PortfolioMode, string[]> = {
  author: [
    'Ghostwriting',
    'WebNovel Fiction',
    'Romance & Fantasy',
    'Character Arcs',
    'World-Building',
    'Serialized Stories',
  ],
  copywriter: [
    'Email Marketing',
    'Founder Narratives',
    'SEO Content',
    'LinkedIn Storytelling',
    'Brand Copy',
    'Conversion Copy',
  ],
  social: [
    'Social Strategy',
    'Content Calendars',
    'Instagram Systems',
    'Creative Direction',
    'Campaign Design',
    'Performance Signals',
  ],
}

interface MarqueeBandProps {
  mode: PortfolioMode
}

export default function MarqueeBand({ mode }: MarqueeBandProps) {
  const items = itemsByMode[mode]
  const doubled = [...items, ...items]
  const dark = isDarkMode(mode)

  const accent =
    mode === 'author'
      ? 'text-author-accent/50'
      : mode === 'social'
        ? 'text-social-accent/50'
        : 'text-terracotta/50'

  return (
    <div
      className={`relative py-5 overflow-hidden border-y transition-colors duration-700 ${
        dark ? 'bg-ink-900 border-white/5' : 'bg-ink-900 border-ink-800'
      }`}
    >
      <motion.div
        key={mode}
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-sm uppercase tracking-[0.2em] text-white/30 font-medium"
          >
            {item}
            <span className={accent}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
