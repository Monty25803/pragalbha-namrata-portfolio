import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  copyServices,
  emailSamples,
  founderNarratives,
  linkedinSamples,
  brandStories,
  copyResults,
} from '../data/profile'

export default function CopywritingPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="copywriting-portfolio" ref={ref} className="section-padding bg-copy-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-terracotta text-sm uppercase tracking-[0.25em] mb-4 font-medium">
            Copywriting Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-ink-900 mb-6 leading-tight">
            Words that make people{' '}
            <span className="text-terracotta italic">act.</span>
          </h2>
          <p className="text-ink-500 text-lg max-w-2xl mx-auto">
            From founder narratives to email sequences that convert. I write content that earns
            trust before it asks for anything.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative p-8 md:p-12 mb-16 rounded-3xl bg-ink-900 text-white overflow-hidden"
        >
          <div className="absolute top-4 left-6 font-display text-8xl text-white/5 leading-none select-none">&ldquo;</div>
          <p className="relative z-10 font-display text-xl md:text-2xl italic leading-relaxed text-center max-w-3xl mx-auto">
            The right story, told well, does more than any ad ever could.
          </p>
        </motion.blockquote>

        {/* Services */}
        <h3 className="font-display text-2xl font-bold text-ink-900 mb-2 text-center">What I Do</h3>
        <p className="text-ink-500 text-center mb-10 max-w-xl mx-auto">
          Six ways I make your content work harder — writing that builds authority over time.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {copyServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02, rotateX: 5 }}
              className="group p-8 rounded-2xl bg-white border border-ink-100 hover:border-terracotta/30 hover:shadow-xl hover:shadow-terracotta/10 transition-all duration-500 glow-card"
            >
              <span className="text-terracotta/60 text-xs font-bold tracking-widest">{service.number}</span>
              <span className="text-2xl text-terracotta mb-3 block mt-2 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </span>
              <h4 className="font-display text-xl font-semibold text-ink-900 mb-1 group-hover:text-terracotta transition-colors">
                {service.title}
              </h4>
              <p className="text-terracotta/80 text-sm font-medium mb-3">{service.subtitle}</p>
              <p className="text-ink-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Email samples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Email Marketing</h3>
          <p className="text-ink-500 mb-8">Emails that earn the click — written for Rolling Authors®, a book ghostwriting studio serving founders and executives.</p>
          <div className="space-y-6">
            {emailSamples.map((email) => (
              <div key={email.title} className="p-6 md:p-8 rounded-2xl bg-white border border-ink-100 hover:border-terracotta/20 transition-colors">
                <p className="text-terracotta text-xs uppercase tracking-wider font-medium mb-3">{email.category}</p>
                <h4 className="font-display text-lg md:text-xl font-semibold text-ink-900 mb-3 leading-snug">
                  &ldquo;{email.title}&rdquo;
                </h4>
                <p className="text-ink-600 text-sm leading-relaxed mb-4">{email.excerpt}</p>
                <p className="text-ink-400 text-xs italic border-t border-ink-100 pt-4">
                  <span className="font-medium text-ink-500 not-italic">Strategy: </span>
                  {email.strategy}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Founder narratives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Founder Narratives</h3>
          <p className="text-ink-500 mb-8 max-w-2xl">
            Ghost-written first-person stories for founders, entrepreneurs, and creators — published under their name on LinkedIn. Real people. Real stakes. Human words.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {founderNarratives.map((founder) => (
              <div key={founder.name} className="p-6 rounded-2xl bg-ink-900 text-white">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display text-lg font-semibold">{founder.name}</h4>
                  <span className="text-white/30 text-xs shrink-0 ml-2">{founder.location}</span>
                </div>
                <p className="text-terracotta/80 text-xs uppercase tracking-wider mb-3">{founder.industry}</p>
                <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;{founder.excerpt}&rdquo;</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-ink-500 text-sm italic max-w-xl mx-auto">
            &ldquo;Going viral isn&apos;t an accident. It&apos;s skilled strategy, real stories, and maybe the hand of a writer who knows when to get out of the way.&rdquo;
          </p>
        </motion.div>

        {/* LinkedIn samples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">LinkedIn Content</h3>
          <p className="text-ink-500 mb-8">Posts that pull people in — from motivational business stories to step-by-step thought leadership.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {linkedinSamples.map((post) => (
              <div key={post.title} className="p-6 rounded-2xl bg-white border border-ink-100">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-terracotta/10 text-terracotta">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-display text-lg font-semibold text-ink-900 mb-2">{post.title}</h4>
                <p className="text-ink-400 text-xs mb-3">{post.format}</p>
                <p className="text-ink-600 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Brand stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Brand Storytelling</h3>
          <p className="text-ink-500 mb-8">Brands that feel like people — built from truth, not templates.</p>
          <div className="space-y-6">
            {brandStories.map((story) => (
              <div key={story.title} className="p-8 rounded-2xl bg-gradient-to-br from-terracotta/5 to-white border border-terracotta/10">
                <p className="text-terracotta text-xs uppercase tracking-wider mb-2">{story.type}</p>
                <h4 className="font-display text-xl font-bold text-ink-900 mb-3">{story.title}</h4>
                <p className="text-ink-600 text-sm leading-relaxed mb-4">{story.excerpt}</p>
                <p className="text-terracotta text-xs font-medium">✦ {story.highlight}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="p-8 md:p-12 rounded-3xl bg-ink-900 text-white"
        >
          <h3 className="font-display text-2xl font-bold mb-2 text-center">Results</h3>
          <p className="text-white/50 text-center mb-10 text-sm">Numbers behind the narratives</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {copyResults.map((result) => (
              <div key={result.label} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-terracotta-light mb-2">{result.value}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider">{result.label}</p>
                {result.sub && <p className="text-white/30 text-xs mt-1">{result.sub}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
