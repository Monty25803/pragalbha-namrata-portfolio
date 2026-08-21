import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PortfolioMode } from '../data/profile'
import { profile } from '../data/profile'
import { accentText, isDarkMode } from '../lib/theme'

interface FooterProps {
  mode: PortfolioMode
}

export default function Footer({ mode }: FooterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const dark = isDarkMode(mode)

  const roleLabel =
    mode === 'author'
      ? <>Writing as <span className={accentText(mode)}>{profile.penName}</span></>
      : mode === 'social'
        ? <>Social Strategist · Rolling Authors®</>
        : <>Content Strategist & Copywriter</>

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`py-8 px-6 border-t transition-colors duration-1000 ${
        dark
          ? mode === 'social'
            ? 'bg-social-bg border-white/5 text-white/40'
            : 'bg-author-bg border-white/5 text-white/40'
          : 'bg-copy-bg border-ink-200 text-ink-400'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm">{roleLabel}</p>
        <p className="text-sm">
          Site developed by{' '}
          <motion.a
            href="https://deviprasana.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className={`transition-colors hover:underline ${accentText(mode)}`}
          >
            Devi Prasana Mishra
          </motion.a>
        </p>
      </div>
    </motion.footer>
  )
}
