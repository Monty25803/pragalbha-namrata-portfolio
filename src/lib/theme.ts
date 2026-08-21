import type { PortfolioMode } from '../data/profile'

/** Dark themes: Author (gold) + Social (sage). Light: Copywriter (terracotta). */
export function isDarkMode(mode: PortfolioMode) {
  return mode === 'author' || mode === 'social'
}

export function accentText(mode: PortfolioMode) {
  if (mode === 'author') return 'text-author-accent'
  if (mode === 'social') return 'text-social-accent'
  return 'text-terracotta'
}

export function accentBg(mode: PortfolioMode) {
  if (mode === 'author') return 'bg-author-accent'
  if (mode === 'social') return 'bg-social-accent'
  return 'bg-terracotta'
}

export function accentBorder(mode: PortfolioMode) {
  if (mode === 'author') return 'border-author-accent/40'
  if (mode === 'social') return 'border-social-accent/40'
  return 'border-terracotta/40'
}

export function pageBg(mode: PortfolioMode) {
  if (mode === 'author') return '#0d0a12'
  if (mode === 'social') return '#0a1210'
  return '#faf8f5'
}

export function portfolioHref(mode: PortfolioMode) {
  if (mode === 'author') return '#writing-portfolio'
  if (mode === 'social') return '#social-strategy'
  return '#copywriting-portfolio'
}

export const modeLabels: Record<PortfolioMode, string> = {
  author: 'Author',
  copywriter: 'Copywriter',
  social: 'Social',
}
