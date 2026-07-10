import { motion } from 'framer-motion'

const items = [
  'Ghostwriting',
  'Email Marketing',
  'Founder Narratives',
  'SEO Content',
  'LinkedIn Storytelling',
  'Brand Copy',
  'WebNovel Fiction',
  'Romance & Fantasy',
  'Content Strategy',
  'Narrative Design',
]

export default function MarqueeBand() {
  const doubled = [...items, ...items]

  return (
    <div className="relative py-5 overflow-hidden bg-ink-900 border-y border-white/5">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-sm uppercase tracking-[0.2em] text-white/30 font-medium"
          >
            {item}
            <span className="text-author-accent/50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
