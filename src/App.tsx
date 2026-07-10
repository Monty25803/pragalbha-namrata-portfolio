import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { PortfolioMode } from './data/profile'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import WritingPortfolio from './components/WritingPortfolio'
import CopywritingPortfolio from './components/CopywritingPortfolio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import MarqueeBand from './components/MarqueeBand'

export default function App() {
  const [mode, setMode] = useState<PortfolioMode>('author')

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'author' ? '#0d0a12' : '#faf8f5'
  }, [mode])

  return (
    <div className={`grain transition-colors duration-1000 ${mode === 'author' ? 'text-white' : 'text-ink-900'}`}>
      <Navbar mode={mode} onModeChange={setMode} />
      <Hero mode={mode} />

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <About mode={mode} />
          <SectionDivider mode={mode} />
          <Stats mode={mode} />
        </motion.div>
      </AnimatePresence>

      <WritingPortfolio />
      <MarqueeBand />
      <CopywritingPortfolio />

      <AnimatePresence mode="wait">
        <motion.div
          key={`rest-${mode}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
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
