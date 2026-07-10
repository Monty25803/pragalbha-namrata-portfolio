import { motion, useScroll, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import type { PortfolioMode } from '../data/profile'
import { profile } from '../data/profile'

interface HeroProps {
  mode: PortfolioMode
}

const floatingWords = {
  author: ['Romance', 'Fantasy', 'Drama', 'Redemption', 'Love', 'Agnst_Ella'],
  copywriter: ['Convert', 'Trust', 'Narrate', 'Engage', 'SEO', 'Act'],
}

function AnimatedLetters({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) {
  return (
    <span className={`inline-block overflow-visible ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${text}-${i}-${char}`}
          className="inline-block overflow-visible"
          style={{ padding: '0 0.06em' }}
          initial={{ opacity: 0, y: 40, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -6,
            scale: 1.08,
            transition: { duration: 0.2 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

function AnimatedName() {
  return (
    <span className="block overflow-visible py-1">
      <span className="block overflow-visible">
        <AnimatedLetters text="Pragalbha" delay={0.25} stagger={0.055} />
      </span>
      <span className="block overflow-visible mt-1">
        <AnimatedLetters
          text="Namrata"
          className="text-author-accent italic"
          delay={0.85}
          stagger={0.07}
        />
      </span>
    </span>
  )
}

function RevealLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.span
      className="block overflow-visible"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  )
}

export default function Hero({ mode }: HeroProps) {
  const isAuthor = mode === 'author'
  const words = floatingWords[mode]
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-1000 ${
        isAuthor ? 'bg-author-bg mesh-gradient-author' : 'bg-copy-bg mesh-gradient-copy'
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {isAuthor ? (
          <>
            <motion.div
              className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-author-glow/25 blur-3xl"
              animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-author-accent/15 blur-3xl"
              animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-author-accent/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-author-glow/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-author-accent"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.1, 0.7, 0.1],
                  scale: [1, 2, 1],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </>
        ) : (
          <>
            <motion.div
              className="absolute top-20 right-20 w-72 h-72 rounded-full bg-terracotta/8 blur-3xl"
              animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-32 left-20 w-64 h-64 rounded-full bg-terracotta/5 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="absolute font-display text-ink-200/25 text-2xl md:text-5xl font-bold select-none pointer-events-none"
                style={{
                  left: `${8 + (i % 3) * 32}%`,
                  top: `${12 + Math.floor(i / 3) * 28}%`,
                }}
                animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1], rotate: [-2, 2, -2] }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                {word}
              </motion.span>
            ))}
          </>
        )}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-24 overflow-visible">
        <motion.div key={mode}>
          <motion.p
            className={`text-sm uppercase tracking-[0.3em] mb-6 font-medium ${
              isAuthor ? 'text-author-accent/80' : 'text-terracotta'
            }`}
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {isAuthor ? `Writing as ${profile.penName}` : 'Content Strategist & Copywriter'}
          </motion.p>

          <h1
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] mb-8 overflow-visible px-2 [perspective:1000px] ${
              isAuthor ? 'text-white' : 'text-ink-900'
            }`}
          >
            {isAuthor ? (
              <AnimatedName />
            ) : (
              <>
                <RevealLine delay={0.2}>Words that make</RevealLine>
                <RevealLine delay={0.35}>
                  people{' '}
                  <span className="text-terracotta italic shimmer-text">act.</span>
                </RevealLine>
              </>
            )}
          </h1>

          <motion.p
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${
              isAuthor ? 'text-white/60 font-serif' : 'text-ink-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            {isAuthor
              ? profile.tagline.author
              : 'From founder narratives to email sequences that convert.'}
          </motion.p>

          {isAuthor && (
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.65 } },
              }}
            >
              {['Contemporary Romance', 'Fantasy', 'Drama', 'Ghostwriting'].map((genre) => (
                <motion.span
                  key={genre}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: 'rgba(201, 169, 110, 0.7)',
                    boxShadow: '0 0 20px rgba(201, 169, 110, 0.2)',
                  }}
                  className="px-4 py-2 rounded-full border border-author-accent/30 text-author-accent/90 text-sm font-medium cursor-default transition-shadow"
                >
                  {genre}
                </motion.span>
              ))}
            </motion.div>
          )}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <motion.a
              href="#writing-portfolio"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider overflow-hidden ${
                isAuthor
                  ? 'bg-author-accent text-author-bg shadow-lg shadow-author-accent/20'
                  : 'bg-ink-900 text-white shadow-lg shadow-ink-900/20'
              }`}
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">View Portfolio</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider border transition-colors ${
                isAuthor
                  ? 'border-white/20 text-white hover:bg-white/10 hover:border-author-accent/50'
                  : 'border-ink-300 text-ink-700 hover:bg-ink-100 hover:border-terracotta/50'
              }`}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
            isAuthor ? 'border-white/20' : 'border-ink-300'
          }`}
        >
          <motion.div
            className={`w-1 h-2 rounded-full ${isAuthor ? 'bg-author-accent' : 'bg-terracotta'}`}
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
