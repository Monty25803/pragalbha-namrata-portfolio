import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { socialStrategy } from '../data/profile'

export default function SocialStrategyPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="social-strategy" ref={ref} className="relative bg-social-bg overflow-hidden">
      {/* Hero strip */}
      <div className="section-padding pb-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(126,184,154,0.12),_transparent_55%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-social-accent text-sm uppercase tracking-[0.28em] mb-4 font-medium">
              Social Strategy Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.12] mb-5">
              Built for discovery.
              <br />
              <span className="text-social-accent italic">Measured in reach.</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-6">
              End-to-end social for Rolling Authors® — strategy, calendars, copy, creative direction,
              publishing, and performance. Not a feed of tasks. A system that compounds.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider">
              <span className="px-3 py-1.5 rounded-full bg-social-accent/15 text-social-soft border border-social-accent/25">
                {socialStrategy.client}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/55 border border-white/10">
                {socialStrategy.tenure}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 text-white/55 border border-white/10">
                {socialStrategy.metricsWindow}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large metric band */}
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {socialStrategy.metrics.slice(0, 4).map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="bg-social-mist p-6 md:p-8"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-social-accent mb-2">
                {metric.value}
              </p>
              <p className="text-white/70 text-sm font-medium mb-1">{metric.label}</p>
              <p className="text-white/35 text-xs">{metric.note}</p>
            </motion.div>
          ))}
        </div>
        <p className="max-w-6xl mx-auto mt-4 text-white/30 text-xs">
          Claim-safe Instagram Insights only — no follower growth, leads, or revenue without baselines.
        </p>
      </div>

      {/* Workflow */}
      <div className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl text-white mb-3">How the system runs</h3>
          <p className="text-white/45 text-sm mb-10 max-w-xl">
            Four loops. Every post passes through them — or it doesn&apos;t ship.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-20">
            {socialStrategy.scope.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="group relative p-7 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent hover:border-social-accent/35 transition-colors"
              >
                <span className="font-display text-5xl text-social-accent/20 font-bold absolute top-4 right-6 group-hover:text-social-accent/35 transition-colors">
                  0{i + 1}
                </span>
                <h4 className="font-display text-xl text-white mb-2 relative">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed relative max-w-md">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Platforms as horizontal strips */}
          <h3 className="font-display text-2xl md:text-3xl text-white mb-8">Where it lives</h3>
          <div className="space-y-3 mb-20">
            {socialStrategy.platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.06 }}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 p-5 rounded-xl border border-white/8 hover:bg-white/[0.03] transition-colors"
              >
                <h4 className="font-display text-lg text-social-accent shrink-0 sm:w-40">{platform.name}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{platform.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Case studies */}
          <h3 className="font-display text-2xl md:text-3xl text-white mb-3">Selected work</h3>
          <p className="text-white/45 text-sm mb-10 max-w-xl">
            Campaigns and formats that turned brand POV into participation, trust, and calendar rhythm.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {socialStrategy.caseStudies.map((study, i) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-2xl bg-social-mist border border-white/10"
              >
                <p className="text-social-accent text-xs uppercase tracking-[0.2em] mb-3">{study.type}</p>
                <h4 className="font-display text-2xl text-white mb-3">{study.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{study.description}</p>
              </motion.article>
            ))}
          </div>

          {/* Insights */}
          <div className="rounded-3xl border border-social-accent/20 bg-gradient-to-b from-social-mist to-social-bg p-8 md:p-12 mb-20">
            <h3 className="font-display text-2xl md:text-3xl text-white mb-2">What the numbers say</h3>
            <p className="text-white/40 text-sm mb-10 max-w-lg">
              Interpretation beats dashboards. Evidence supports a post-led discovery engine.
            </p>
            <div className="space-y-8">
              {socialStrategy.insights.map((insight) => (
                <div key={insight.title}>
                  <div className="flex items-end justify-between gap-4 mb-2">
                    <h4 className="text-white font-medium">{insight.title}</h4>
                    <span className="text-social-accent font-display text-xl">{insight.bar}%</span>
                  </div>
                  <p className="text-white/45 text-sm mb-3 leading-relaxed">{insight.description}</p>
                  <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-social-accent"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${insight.bar}%` } : {}}
                      transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram gallery — masonry-ish */}
          <h3 className="font-display text-2xl md:text-3xl text-white mb-3">Instagram gallery</h3>
          <p className="text-white/45 text-sm mb-8 max-w-xl">
            Public Rolling Authors creatives — directed and managed. Illustration credit stays with design.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {socialStrategy.instagramGallery.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.05 }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                }`}
              >
                <div className={`${i === 0 ? 'aspect-[3/4] lg:h-full' : 'aspect-square'} bg-social-mist`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-social-soft/80 text-xs mt-0.5">{item.caption} · Instagram ↗</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Illustrations + LinkedIn side by side on large screens */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-display text-2xl text-white mb-3">Illustration library</h3>
              <p className="text-white/40 text-sm mb-6">Assets used under creative direction.</p>
              <div className="grid grid-cols-2 gap-3">
                {socialStrategy.illustrations.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl overflow-hidden border border-white/10 bg-social-mist"
                  >
                    <div className="aspect-[4/5]">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="p-2.5 text-center text-white/60 text-xs">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl text-white mb-3">LinkedIn design</h3>
              <p className="text-white/40 text-sm mb-6">Brand visuals and thought-leadership tests.</p>
              <div className="space-y-4">
                {socialStrategy.linkedinGallery.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl overflow-hidden border border-white/10 bg-social-mist"
                  >
                    <div className="w-32 sm:w-40 shrink-0 aspect-[4/3]">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="py-4 pr-4 flex flex-col justify-center">
                      <h4 className="text-white text-sm font-medium">{item.title}</h4>
                      <p className="text-white/40 text-xs mt-1">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process loop */}
          <h3 className="font-display text-2xl text-white mb-8">Process loop</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {socialStrategy.process.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl border border-dashed border-social-accent/25 hover:border-social-accent/50 transition-colors"
              >
                <span className="text-social-accent text-xs font-bold tracking-widest">{step.step}</span>
                <h4 className="font-display text-lg text-white mt-2 mb-2">{step.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href={socialStrategy.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-social-accent hover:underline"
            >
              Instagram ↗
            </a>
            <a
              href={socialStrategy.companyLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-social-accent hover:underline"
            >
              Company LinkedIn ↗
            </a>
            <a
              href={socialStrategy.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-social-accent hover:underline"
            >
              rollingauthors.com ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
