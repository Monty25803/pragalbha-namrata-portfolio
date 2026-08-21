import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { socialStrategy } from '../data/profile'

export default function SocialStrategyPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="social-strategy"
      ref={ref}
      className="section-padding bg-ink-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient-author pointer-events-none opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-author-accent text-sm uppercase tracking-[0.25em] mb-4 font-medium">
            {socialStrategy.title}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {socialStrategy.tagline}
          </h2>
          <p className="text-white/50 font-serif text-lg max-w-2xl mb-4">
            {socialStrategy.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-author-accent/15 text-author-accent border border-author-accent/25">
              {socialStrategy.client}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
              {socialStrategy.tenure}
            </span>
            <a
              href={socialStrategy.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10 hover:text-author-accent hover:border-author-accent/40 transition-colors"
            >
              @rollingauthors
            </a>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="mb-6"
        >
          <p className="text-white/40 text-xs uppercase tracking-wider mb-6">
            Results at a glance · {socialStrategy.metricsWindow}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
            {socialStrategy.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.06 }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl glass text-center"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-author-accent mb-1">
                  {metric.value}
                </p>
                <p className="text-white/70 text-xs uppercase tracking-wider mb-1">{metric.label}</p>
                <p className="text-white/35 text-[10px]">{metric.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-white/30 text-xs italic">
            Claim-safe metrics only — no follower growth, leads, or revenue claims without baseline evidence.
          </p>
        </motion.div>

        {/* About */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-white/60 font-serif text-lg leading-relaxed max-w-3xl mb-16"
        >
          {socialStrategy.about}
        </motion.p>

        {/* Scope */}
        <h3 className="font-display text-2xl text-white mb-6">Role in the workflow</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {socialStrategy.scope.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.08 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-author-accent/30 transition-colors"
            >
              <span className="text-author-accent text-xs font-bold tracking-widest">
                0{i + 1}
              </span>
              <h4 className="font-display text-lg font-semibold text-white mt-2 mb-2">{item.title}</h4>
              <p className="text-white/45 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Platforms */}
        <h3 className="font-display text-2xl text-white mb-6">Platforms</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {socialStrategy.platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="p-6 rounded-2xl glass"
            >
              <h4 className="font-display text-xl font-semibold text-author-accent mb-2">
                {platform.name}
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">{platform.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Case studies */}
        <h3 className="font-display text-2xl text-white mb-2">Selected projects</h3>
        <p className="text-white/40 text-sm mb-8 max-w-2xl">
          Campaigns and formats built for Rolling Authors — participation, trust, and calendar systems.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {socialStrategy.caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-author-glow/15 to-transparent border border-white/10 hover:border-author-accent/30 transition-all"
            >
              <p className="text-author-accent/80 text-xs uppercase tracking-wider mb-2">{study.type}</p>
              <h4 className="font-display text-xl font-semibold text-white mb-3">{study.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{study.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What the numbers say */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16 p-8 md:p-10 rounded-3xl bg-ink-900 border border-white/10"
        >
          <h3 className="font-display text-2xl text-white mb-2">What the numbers say</h3>
          <p className="text-white/40 text-sm mb-8">
            Interpretation — not dashboard dumping. Evidence supports a post-led discovery strategy.
          </p>
          <div className="space-y-6">
            {socialStrategy.insights.map((insight) => (
              <div key={insight.title}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">{insight.title}</h4>
                  <span className="text-author-accent text-sm font-semibold">{insight.bar}%</span>
                </div>
                <p className="text-white/45 text-sm mb-3 leading-relaxed">{insight.description}</p>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-author-accent"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${insight.bar}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Instagram gallery */}
        <h3 className="font-display text-2xl text-white mb-2">Instagram design gallery</h3>
        <p className="text-white/40 text-sm mb-8">
          Public Rolling Authors creatives — directed and managed, not claimed as original illustration.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {socialStrategy.instagramGallery.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-author-accent/40 transition-all bg-white/5"
            >
              <div className="aspect-square overflow-hidden bg-ink-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-white font-medium text-sm group-hover:text-author-accent transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/40 text-xs mt-1">{item.caption} · View on Instagram ↗</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Illustration library */}
        <h3 className="font-display text-2xl text-white mb-2">Illustration library</h3>
        <p className="text-white/40 text-sm mb-8">
          Rolling Authors illustration assets used under creative direction.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {socialStrategy.illustrations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden bg-ink-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="p-3 text-white/70 text-sm text-center">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn gallery */}
        <h3 className="font-display text-2xl text-white mb-2">LinkedIn design</h3>
        <p className="text-white/40 text-sm mb-8">
          Brand visuals and a thought-leadership poll that tested audience perspective.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {socialStrategy.linkedinGallery.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-white text-sm font-medium">{item.title}</h4>
                <p className="text-white/40 text-xs mt-1">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <h3 className="font-display text-2xl text-white mb-8">How I work</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {socialStrategy.process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.08 }}
              className="relative p-5 rounded-2xl border border-white/10"
            >
              <span className="font-display text-3xl text-author-accent/30 font-bold">{step.step}</span>
              <h4 className="font-display text-lg text-white mt-2 mb-2">{step.title}</h4>
              <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href={socialStrategy.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-author-accent hover:underline"
          >
            rollingauthors.com ↗
          </a>
          <a
            href={socialStrategy.companyLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-author-accent hover:underline"
          >
            Rolling Authors on LinkedIn ↗
          </a>
          <a
            href={socialStrategy.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-author-accent hover:underline"
          >
            Instagram ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
