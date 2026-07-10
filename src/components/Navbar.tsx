import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import type { PortfolioMode } from '../data/profile'

interface NavbarProps {
  mode: PortfolioMode
  onModeChange: (mode: PortfolioMode) => void
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#writing-portfolio', label: 'Writing' },
  { href: '#copywriting-portfolio', label: 'Copywriting' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ mode, onModeChange }: NavbarProps) {
  const isAuthor = mode === 'author'
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isAuthor
            ? 'bg-author-bg/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3'
            : 'bg-copy-bg/95 backdrop-blur-xl border-b border-ink-200/50 shadow-lg shadow-ink-900/5 py-3'
          : isAuthor
            ? 'bg-transparent border-b border-transparent py-5'
            : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className={`font-display text-xl font-semibold tracking-tight leading-normal px-0.5 ${
            isAuthor ? 'text-author-accent' : 'text-ink-900'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PN
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className={`nav-link text-sm font-medium leading-normal py-1 transition-colors ${
                isAuthor
                  ? 'nav-link-author text-white/70 hover:text-white'
                  : 'nav-link-copy text-ink-600 hover:text-ink-900'
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mode toggle — equal-width columns so pill aligns perfectly */}
        <div
          className={`relative grid grid-cols-2 rounded-full p-1 min-w-[13.5rem] transition-colors duration-700 ${
            isAuthor ? 'bg-white/10' : 'bg-ink-100'
          }`}
        >
          <motion.div
            className={`absolute top-1 bottom-1 rounded-full shadow-sm ${
              isAuthor ? 'bg-author-accent' : 'bg-terracotta'
            }`}
            animate={{
              left: isAuthor ? 4 : '50%',
              width: 'calc(50% - 4px)',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
          <button
            type="button"
            onClick={() => onModeChange('author')}
            className={`relative z-10 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider text-center whitespace-nowrap transition-colors duration-300 ${
              isAuthor ? 'text-author-bg' : 'text-ink-500 hover:text-ink-700'
            }`}
          >
            Author
          </button>
          <button
            type="button"
            onClick={() => onModeChange('copywriter')}
            className={`relative z-10 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider text-center whitespace-nowrap transition-colors duration-300 ${
              !isAuthor ? 'text-white' : 'text-white/60 hover:text-white/80'
            }`}
          >
            Copywriter
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
