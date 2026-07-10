import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { novels, genres, otherPublications, ghostwritingSamples, expertiseAreas } from '../data/profile'

export default function WritingPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="writing-portfolio" ref={ref} className="section-padding bg-author-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-author-glow/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-author-accent text-sm uppercase tracking-[0.25em] mb-4 font-medium">
            Writing Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Published Novels & <span className="text-author-accent italic">Serialised Fiction</span>
          </h2>
          <p className="text-white/50 font-serif text-lg max-w-2xl">
            4+ years crafting long-form narratives across romance, fantasy, and transmigration —
            with a proven track record of completing 90–190+ chapter series on WebNovel and Wattpad.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {genres.map((genre, i) => (
            <motion.span
              key={genre}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ backgroundColor: 'rgba(201, 169, 110, 0.1)', borderColor: 'rgba(201, 169, 110, 0.3)' }}
            >
              {genre}
            </motion.span>
          ))}
        </motion.div>

        {/* WebNovel novels */}
        <h3 className="font-display text-2xl text-white mb-6">WebNovel Series</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {novels.map((novel, i) => (
            <motion.a
              key={novel.title}
              href={novel.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-6 rounded-2xl glass glow-card hover:border-author-accent/30 transition-all duration-500 block"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full ${
                    novel.status === 'Completed'
                      ? 'bg-author-accent/20 text-author-accent'
                      : 'bg-author-glow/20 text-purple-300'
                  }`}
                >
                  {novel.status}
                </span>
                <span className="text-white/30 text-xs">{novel.genre}</span>
              </div>

              <h4 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-author-accent transition-colors">
                {novel.title}
              </h4>
              <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3">{novel.description}</p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3 text-white/40">
                  <span>{novel.views} views</span>
                  {novel.chapters && <span>{novel.chapters} ch.</span>}
                </div>
                <span className="text-author-accent text-xs font-medium uppercase tracking-wider group-hover:underline">
                  Read ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Other platforms */}
        <h3 className="font-display text-2xl text-white mb-6">Across Platforms</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {otherPublications.map((pub, i) => (
            <motion.a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl glass hover:border-author-accent/30 transition-all block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-author-accent/80">{pub.platform}</span>
                <span className="text-author-accent text-xs font-medium group-hover:underline">{pub.cta} ↗</span>
              </div>
              <h4 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-author-accent transition-colors">
                {pub.title}
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">{pub.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Ghostwriting samples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl text-white mb-2">Ghostwriting Portfolio</h3>
          <p className="text-white/40 text-sm mb-8 max-w-2xl">
            A curated selection of confidential client work — spanning emotional romance, dark fantasy,
            political drama, horror, and thriller. All projects delivered with full creative ownership
            transferred to the client.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ghostwritingSamples.map((sample, i) => (
              <motion.div
                key={sample.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-author-accent/20 transition-colors"
              >
                <p className="text-author-accent/70 text-xs uppercase tracking-wider mb-2">{sample.genre}</p>
                <h4 className="font-display text-lg font-semibold text-white mb-2">{sample.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed mb-3">{sample.description}</p>
                <div className="flex flex-wrap gap-2">
                  {sample.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-white/30 text-xs italic">
            🔒 All ghostwriting work is delivered with full confidentiality. Writing samples available on request under NDA.
          </p>
        </motion.div>

        {/* Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {expertiseAreas.map((area) => (
            <div key={area.title} className="p-5 rounded-xl border border-white/10">
              <span className="text-author-accent text-lg mb-2 block">✦</span>
              <h4 className="font-display text-lg font-semibold text-white mb-2">{area.title}</h4>
              <p className="text-white/45 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
