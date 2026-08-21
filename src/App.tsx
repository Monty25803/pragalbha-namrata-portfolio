import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { PortfolioMode } from './data/profile'
import { isDarkMode, pageBg } from './lib/theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import WritingPortfolio from './components/WritingPortfolio'
import CopywritingPortfolio from './components/CopywritingPortfolio'
import SocialStrategyPortfolio from './components/SocialStrategyPortfolio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import MarqueeBand from './components/MarqueeBand'

export default function App() {
  const [mode, setMode] = useState<PortfolioMode>('author')
  const dark = isDarkMode(mode)

  useEffect(() => {
    document.body.style.backgroundColor = pageBg(mode)
  }, [mode])

  return (
    <div
      className={`grain transition-colors duration-1000 ${
        dark ? 'text-white' : 'text-ink-900'
      }`}
    >
      <Navbar mode={mode} onModeChange={setMode} />
      <Hero mode={mode} />

      <AnimatePresence mode="wait">
        <motion.div
          key={`intro-${mode}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <About mode={mode} />
          <SectionDivider mode={mode} />
          <Stats mode={mode} />
        </motion.div>
      </AnimatePresence>

      <MarqueeBand mode={mode} />

      <AnimatePresence mode="wait">
        <motion.div
          key={`portfolio-${mode}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45 }}
        >
          {mode === 'author' && <WritingPortfolio />}
          {mode === 'copywriter' && <CopywritingPortfolio />}
          {mode === 'social' && <SocialStrategyPortfolio />}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`rest-${mode}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
        >
          <Experience mode={mode} />
          <SectionDivider mode={mode} />
          <Skills mode={mode} />
          <Contact mode={mode} />
          <Footer mode={mode} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
