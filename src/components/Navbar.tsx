import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import type { PortfolioMode } from '../data/profile'
import { accentBg, accentText, isDarkMode, modeLabels } from '../lib/theme'

interface NavbarProps {
  mode: PortfolioMode
  onModeChange: (mode: PortfolioMode) => void
}

const modes: PortfolioMode[] = ['author', 'copywriter', 'social']

const navByMode: Record<PortfolioMode, { href: string; label: string }[]> = {
  author: [
    { href: '#about', label: 'About' },
    { href: '#writing-portfolio', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ],
  copywriter: [
    { href: '#about', label: 'About' },
    { href: '#copywriting-portfolio', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ],
  social: [
    { href: '#about', label: 'About' },
    { href: '#social-strategy', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ],
}

export default function Navbar({ mode, onModeChange }: NavbarProps) {
  const dark = isDarkMode(mode)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const modeIndex = modes.indexOf(mode)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  const navBg = scrolled
    ? mode === 'author'
      ? 'bg-author-bg/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3'
      : mode === 'social'
        ? 'bg-social-bg/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3'
        : 'bg-copy-bg/95 backdrop-blur-xl border-b border-ink-200/50 shadow-lg shadow-ink-900/5 py-3'
    : 'bg-transparent border-b border-transparent py-5'

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        <motion.a
          href="#"
          className={`font-display text-xl font-semibold tracking-tight leading-normal px-0.5 shrink-0 ${accentText(mode)}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PN
        </motion.a>

        <div className="hidden lg:flex items-center gap-7">
          {navByMode[mode].map((link, i) => (
            <motion.a
              key={`${mode}-${link.href}`}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.04 }}
              className={`nav-link text-sm font-medium leading-normal py-1 transition-colors ${
                dark
                  ? 'nav-link-author text-white/70 hover:text-white'
                  : 'nav-link-copy text-ink-600 hover:text-ink-900'
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Three-mode toggle */}
        <div
          className={`relative grid grid-cols-3 rounded-full p-1 min-w-0 sm:min-w-[17.5rem] transition-colors duration-700 ${
            dark ? 'bg-white/10' : 'bg-ink-100'
          }`}
        >
          <motion.div
            className={`absolute top-1 bottom-1 rounded-full shadow-sm ${accentBg(mode)}`}
            animate={{
              left: `calc(${(100 / 3) * modeIndex}% + 4px)`,
              width: 'calc(33.333% - 8px)',
            }}
            transition={{ type: 'spring', stiffness: 480, damping: 36 }}
          />
          {modes.map((m) => {
            const active = mode === m
            return (
              <button
                key={m}
                type="button"
                onClick={() => onModeChange(m)}
                className={`relative z-10 px-2 sm:px-3 py-2 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-center whitespace-nowrap transition-colors duration-300 ${
                  active
                    ? m === 'copywriter'
                      ? 'text-white'
                      : m === 'author'
                        ? 'text-author-bg'
                        : 'text-social-bg'
                    : dark
                      ? 'text-white/55 hover:text-white/85'
                      : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                {modeLabels[m]}
              </button>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
