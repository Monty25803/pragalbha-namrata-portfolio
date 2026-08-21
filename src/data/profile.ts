export type PortfolioMode = 'author' | 'copywriter' | 'social'

export const profile = {
  name: 'Pragalbha Namrata',
  penName: 'Agnst_Ella',
  title: "Founder's Office Associate",
  location: 'Brahmapur, Odisha, India',
  email: 'namrata25803@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pragalbha-namrata-8a8335275/',
  fiverr: 'https://www.fiverr.com/s/1qy6gm9',
  fiverrCopy: 'https://www.fiverr.com/s/38rxgrV',
  blog: 'https://www.rollingauthors.com/blog',
  rollingAuthors: 'https://www.rollingauthors.com',
  twine: 'https://www.twine.net/user1524632',
  wattpadProfile: 'https://www.wattpad.com/user/Agnst_ella',
  tagline: {
    author: 'Crafting narratives that delve into human emotion, redemption, and the transformative power of love.',
    copywriter: 'Words that make people act.',
    social: 'A point of view before a schedule. Strategy first — management all the way through.',
  },
  about: {
    author: `Welcome to the literary world of Pragalbha Namrata — a versatile digital marketing professional and published author with 4+ years of experience spanning strategic operations, data analytics, and creative content development. Writing under the pen name Agnst_Ella, I craft compelling narratives that delve deep into the complexities of human emotion, redemption, and the transformative power of love.

My unique background combines strong analytical skills with creative storytelling abilities. With proven expertise in SEO optimization, conversion-focused design, and data-driven marketing strategies, I bring both technical precision and creative vision to every project. As a freelance author on WebNovel and Wattpad, I specialise in serialised fiction across romance, fantasy, and drama — maintaining a 5-star rating across all freelance projects.`,
    copywriter: `I write content that earns trust before it asks for anything. Across email marketing, LinkedIn storytelling, brand narratives, and SEO — my work is built on one belief: the right story, told well, does more than any ad ever could.

I specialise in writing that builds authority over time — the kind that earns a reader's trust before it asks for anything in return. Currently serving as a Founder's Office Associate at Rolling Authors®, I create content for founders, ghostwriting studios, and service businesses across email, LinkedIn, and web.`,
    social: `Since July 2025 I've owned Rolling Authors® social end to end — ideation, calendars, copy, creative direction, publishing, and performance. I took over with no formal handover and built the system from scratch.

I lead strategy and management. I brief and refine creatives; I don't claim original illustration. The proof is in the signals: 2.04M Instagram views and 1.26M accounts reached in the last 90 days — mostly from people who weren't followers yet.`,
  },
}

export const stats = [
  { value: '700K+', label: 'Fiction Readers', mode: 'author' as const },
  { value: '10+', label: 'Published Works', mode: 'author' as const },
  { value: '100+', label: 'Ghostwriting Orders', mode: 'author' as const },
  { value: '5★', label: 'Freelance Rating', mode: 'author' as const },
  { value: '25%', label: 'Organic Traffic Lift', mode: 'copywriter' as const },
  { value: '400K+', label: 'WebNovel Readers', mode: 'copywriter' as const },
  { value: '5/5', label: 'Client Rating', mode: 'copywriter' as const },
  { value: '4+', label: 'Years in Content', mode: 'copywriter' as const },
  { value: '2.04M', label: 'IG Views (90d)', mode: 'social' as const },
  { value: '1.26M', label: 'Accounts Reached', mode: 'social' as const },
  { value: '99.4%', label: 'Non-Follower Views', mode: 'social' as const },
  { value: '1,244', label: 'Profile Activity', mode: 'social' as const },
]

export const copyResults = [
  { value: '25%', label: 'Organic Traffic Increase', sub: '3 months' },
  { value: '15%', label: 'Google Rankings Improvement', sub: '' },
  { value: '20%', label: 'User Sessions Boost', sub: '' },
  { value: '400K+', label: 'Fiction Readers on WebNovel', sub: '' },
  { value: '5/5', label: 'Client Rating on Fiverr', sub: '' },
  { value: '4+', label: 'Years Consistent Delivery', sub: '' },
]

export const novels = [
  {
    title: 'How to End This Marriage',
    description: 'Sold to the Duke of the Empire and murdered by assassins, she wakes as her younger self — a second-chance romance playing destiny against free will.',
    views: '418K+',
    chapters: 191,
    status: 'Completed',
    genre: 'Second-Chance Romance',
    platform: 'WebNovel',
    link: 'https://www.webnovel.com/book/how-to-end-this-marriage_27170950206895605',
  },
  {
    title: 'First Love of Mine',
    description: "Ayla White's story of new beginnings — a new school, unexpected friendships, and the quiet chaos of falling for someone when you thought your heart had already chosen.",
    views: '191K+',
    chapters: 133,
    status: 'Completed',
    genre: 'Contemporary Romance',
    platform: 'WebNovel',
    link: 'https://www.webnovel.com/book/first-love-of-mine_23225148706651805',
  },
  {
    title: 'Redemption in the Shadows',
    description: 'A hard-hearted killer wakes one year before his execution with memories of the life that destroyed him — second chances, unlikely love, and the cost of becoming someone worth saving.',
    views: '59K+',
    chapters: 189,
    status: 'Completed',
    genre: 'Fantasy Romance',
    platform: 'WebNovel',
    link: 'https://www.webnovel.com/book/redemption-in-the-shadows_31276006908309405',
  },
  {
    title: 'Bound by Fire',
    description: 'In a world governed by Alphas, Betas, and Omegas — a fiercely independent Omega navigates identity, desire, and the collapse of the walls he built around himself.',
    views: '85.6K+',
    chapters: 91,
    status: 'Completed',
    genre: 'Omegaverse Romance',
    platform: 'WebNovel',
    link: 'https://www.webnovel.com/book/bound-by-fire_31554883708519305',
  },
  {
    title: "Twin's Secret",
    description: 'A journalist accepts a dangerous assignment uncovering the truth about Hiroto Anzai — and the mysterious resemblance between Haru and Akie.',
    views: '33.1K+',
    chapters: 34,
    status: 'Completed',
    genre: 'Mystery Romance',
    platform: 'WebNovel',
    link: 'https://www.webnovel.com/book/twin%27s-secret_29891473808929005',
  },
  {
    title: 'The Princess Is a Witch',
    description: 'Transmigrated into the body of a reviled princess, she must survive a cruel crown prince, a world of betrayal, and the mystery of how she arrived in a kingdom that wants her dead.',
    views: '47.3K+',
    chapters: 62,
    status: 'Ongoing',
    genre: 'Transmigration Fantasy',
    platform: 'WebNovel',
    link: 'https://www.webnovel.com/book/the-princess-is-a-witch_27792377500106405',
  },
]

export const otherPublications = [
  {
    title: 'Venomous Desire',
    description: 'One unforgettable night. Five years of silence. Aria Chen returns with a daughter and a secret — only to face Xavier Knight again.',
    platform: 'Wattpad',
    link: 'https://www.wattpad.com/story/396507354',
    cta: 'Read on Wattpad',
  },
  {
    title: "CEO's Little Secret",
    description: "He's toxic and tender in the same breath — claiming she's beneath him while refusing to let her go.",
    platform: 'Wattpad',
    link: 'https://www.wattpad.com/user/Agnst_ella',
    cta: 'View on Wattpad',
  },
  {
    title: 'Lead Stand-in',
    description: 'Melina disguises herself as a boy to enter an elite dance academy as a stand-in for the person she loves — where love takes an unexpected turn.',
    platform: 'Amazon',
    link: 'https://amzn.in/d/04UGnF6G',
    cta: 'Buy on Amazon',
  },
  {
    title: 'Room Filled with Loneliness',
    description: 'A quiet, devastating portrait of a young woman overwhelmed by life — solitude, invisible struggle, and resilience in the smallest moments of surviving.',
    platform: 'Libri7',
    link: 'https://www.libri7.com/book/15728/Room-filled-with-loneliness',
    cta: 'Read on Libri7',
  },
]

export const ghostwritingSamples = [
  {
    title: 'Dubai Encounter',
    genre: 'Adult Romance',
    tags: ['First-Person POV', 'Adult 18+', 'Contemporary'],
    description: 'A character study of temptation and moral conflict set against a high-stakes business trip — fetish psychology and the tension between duty and desire.',
  },
  {
    title: 'The Man on the Ship',
    genre: 'Emotional Romance',
    tags: ['Literary Romance', 'Grief & Loss', 'Scene Writing'],
    description: 'A heartbreaking scene of mistaken identity at sea — a woman confronting a stranger who mirrors her grief. Delicate emotional prose with cinematic scene-setting.',
  },
  {
    title: "The Paladin's Surrender",
    genre: 'Dark Fantasy / Medieval',
    tags: ['Epic Fantasy', 'Multi-Chapter', 'Battle Scenes'],
    description: 'Crusaders, a hidden settlement, siege warfare, and a paladin\'s sacrifice. Atmospheric world-building and morally complex commanders.',
  },
  {
    title: 'The Secrets of Midhili',
    genre: 'Mystery / Crime Thriller',
    tags: ['Multi-POV', 'Crime Thriller', 'Female Lead'],
    description: 'A fast-paced detective thriller following a sharp female investigator uncovering corruption in an isolated village across 13+ chapters.',
  },
  {
    title: 'From Juba to Downing Street',
    genre: 'Political Drama',
    tags: ['Literary Fiction', '6 Chapters', 'Diaspora'],
    description: 'A South Sudanese refugee who becomes Britain\'s youngest Prime Minister — rich in social commentary, trauma, resilience, and political machinery.',
  },
  {
    title: 'The Varjokansa Chronicles',
    genre: 'Fantasy World-Building',
    tags: ['World Bible', "Children's Fantasy", 'Lore & Mythology'],
    description: 'Comprehensive world-building for a children\'s fantasy universe — rainforest civilisations, royal families, tribal factions, and a full conflict map.',
  },
  {
    title: 'A Glorious Epoch',
    genre: 'Science Fiction',
    tags: ['Literary Sci-Fi', 'Character Study', 'Academia'],
    description: 'A Japanese wildlife biologist on a North American book tour — blending scientific discourse on de-extinction ethics with cultural dislocation.',
  },
  {
    title: 'Closing Time at Inukai',
    genre: 'Horror / Supernatural',
    tags: ['Horror', 'Atmospheric', 'Japan Setting'],
    description: 'A tension-soaked horror short following a park ranger whose loyal Shiba Inu is killed by an unknown predator in a fog-drenched national park.',
  },
  {
    title: 'The Vault',
    genre: 'Erotic Thriller',
    tags: ['Adult 18+', 'Erotic Thriller', 'Serialised'],
    description: 'A slow-burn power-play between a bank robber and a captive CEO — charged dialogue and a heist backdrop escalating across ten story beats.',
  },
]

export const genres = [
  'Contemporary Romance',
  'Fantasy',
  'Drama',
  'Ghostwriting',
  'Transmigration',
  'Urban Fiction',
  'Political Drama',
  'Horror',
]

export const expertiseAreas = [
  { title: 'Ghostwriting', description: 'Full novels, serialised fiction, short stories, and narrative scripts across any genre — delivered with your voice, not mine.' },
  { title: 'Serialised Fiction', description: 'Chapter-by-chapter storytelling built for reader retention — WebNovel, Wattpad, Pocket FM, and platform-native formats.' },
  { title: 'World-Building', description: 'Fantasy universes, lore bibles, character hierarchies, magic systems, and setting documents that give a story its bones.' },
  { title: 'Multi-Genre Range', description: 'Romance, dark fantasy, political drama, horror, literary fiction, erotic thriller — adaptable voice and tone across all registers.' },
  { title: 'SEO & Content', description: 'Long-form SEO blogs, email campaigns, and narrative-led marketing content — particularly for publishing and creative industries.' },
  { title: 'Narrative Strategy', description: 'Helping founders and brands find the story underneath the business — structuring ideas into books, content, and public voice.' },
]

export const copyServices = [
  {
    number: '01',
    title: 'Email Marketing',
    subtitle: 'Sequences That Sell Without Selling',
    description: 'Story-first emails under 300 words. Curiosity-led subject lines. Tight CTAs. Designed for founders, ghostwriting studios, and service businesses.',
    icon: '◈',
  },
  {
    number: '02',
    title: 'Founder Narratives',
    subtitle: 'The Story Behind the Brand',
    description: 'Ghost-written LinkedIn stories for founders across blockchain, education, wellness, and publishing. Your voice, your story, my words.',
    icon: '✦',
  },
  {
    number: '03',
    title: 'SEO Blog Writing',
    subtitle: '6,000–10,000 Word Authority Pieces',
    description: 'Full 8-step SEO process: intent mapping, competitor gap analysis, rich results targeting, and dual CTAs. Ranked content that reads like editorial.',
    icon: '△',
  },
  {
    number: '04',
    title: 'LinkedIn Content',
    subtitle: 'Posts That Start Conversations',
    description: 'Viral-format storytelling, thought leadership posts, and ghostwritten content for executives. Hook → story → insight → CTA.',
    icon: '◇',
  },
  {
    number: '05',
    title: 'Brand & Website Copy',
    subtitle: 'Voice, Positioning, Messaging',
    description: "Full website copy, niche landing pages, service descriptions, and FAQs. Built around the reader's specific fear or desire.",
    icon: '○',
  },
  {
    number: '06',
    title: 'Brand Stories',
    subtitle: 'Emotional Storytelling for B2B & B2C',
    description: 'Founder stories, company origin narratives, case studies, and testimonial-led content. Built for brands that lead with trust.',
    icon: '□',
  },
]

export const emailSamples = [
  {
    category: 'Lead Nurture · Rolling Authors®',
    title: 'Three authors asked for the same book idea this month. Only one will succeed.',
    excerpt: 'Client 3 knew the secret: leadership is a category, not a book idea. What wins is specificity, lived experience, and an underserved audience.',
    strategy: 'Three-way contrast structure. Teaches the reader the rule through story — then positions Rolling Authors as the team that extracts that specificity from you.',
  },
  {
    category: 'Authority Building · Rolling Authors®',
    title: 'Will a manuscript from an outside team ever match Penguin Random House quality?',
    excerpt: 'At Rolling Authors, every manuscript goes through structural development stages that mirror how traditional publishers work — concept definition, chapter architecture, tone planning, line-by-line refinement.',
    strategy: "Opens directly with the prospect's unspoken objection. Answers it with specifics, not reassurance.",
  },
  {
    category: 'Case Study · Rolling Authors®',
    title: 'Why this physician got a ₹5 lakh contract while others were turned down',
    excerpt: 'The HR Director said it plainly: "A book demonstrates commitment that a résumé cannot." 67% of doctors who publish see more corporate inquiries — fees rising 35–50% on average.',
    strategy: 'Data-backed case study framed as a story. ROI framed in real rupees — makes the reader do the math themselves.',
  },
]

export const founderNarratives = [
  { name: 'Lauren — Samavira', industry: 'Meditation & Trauma Recovery', location: 'Global', excerpt: 'My life didn\'t start with tranquillity. It started with suffering. That whisper grew into a mission — and that mission became Samavira.' },
  { name: 'Gabriel Covington', industry: 'WristKey Global Solutions · Blockchain', location: 'Global', excerpt: 'I grew up in the inner city, where aspirations came after survival. Blockchain was my freedom. WristKey became real without venture capital.' },
  { name: 'Veronika Kim — Balansize', industry: "Women's Wellness App", location: 'Dubai / Heriot-Watt', excerpt: 'When I became a mother, everything changed. This confusion led to Balansize — because women need a companion who understands each stage of life.' },
  { name: 'Brian Hoonjong Paik', industry: 'SmashFi · Bitcoin / Fintech', location: 'South Korea', excerpt: 'I was a salaryman in South Korea, doing everything right but still feeling trapped. I chose to be a Bitcoiner for life.' },
  { name: 'Bernardita Sanchez Vieyra', industry: 'EDBinder · EdTech', location: 'New York / Latin America', excerpt: 'We built a platform that connects both worlds — and placed 150+ teachers across 8 U.S. states.' },
  { name: 'Prknack Agency', industry: 'Sports & Luxury PR', location: 'India', excerpt: 'A documentary on Sakshi Malik won gold at the New York Film Festival. Babita Phogat in an Asian Paints commercial. This is Prknack.' },
]

export const linkedinSamples = [
  { title: 'The Power of "Once More"', format: 'Story-Driven Motivational Post', tags: ['Motivational', 'Sales Narrative', 'Viral Format'], excerpt: 'Walt Disney was fired because his editor thought he lacked imagination. The point where most salespeople fail: they stop after the first no.' },
  { title: 'The Venture Capital Journey — Kansaltancy Ventures', format: 'Ghost-Written Founder Story', tags: ['Entrepreneurship', 'Thought Leadership'], excerpt: 'In 2016, I sat at my desk wondering if I\'d made the biggest mistake of my life. We weren\'t just building a company. We were trying to ignite an ecosystem that didn\'t exist.' },
  { title: 'Publishing Scam Alert', format: 'Narrative-Led Awareness Post', tags: ['Publishing', 'Scam Warning'], excerpt: 'Ravi spent years rewriting his book. Then a "well-known" publishing house offered to publish it — with a ₹50,000 processing fee. The bookstores they promised? Gone.' },
  { title: '5 Steps to Ghostwriting Viral LinkedIn Content', format: 'Educational Framework Post', tags: ['Ghostwriting', 'Content Strategy'], excerpt: 'Step 1: Clarify the core message. Step 2: Capture the voice. Step 3: Structure for story. Step 4: Trigger the algorithm. Step 5: Analyse and evolve.' },
]

export const brandStories = [
  { title: 'From a Home Kitchen to a Distinguished Company: Lemon Krust', type: 'Brand Story · B2C Food', highlight: 'Business tripled during lockdown · Zero layoffs · Expanded to high-profile clientele', excerpt: 'Jyoti Kariwala never intended to build an empire. She just loved baking. Some started calling her "Ma Annapurna." Not because she was selling food — because she was serving comfort.' },
  { title: 'The Instinct That Built an Empire — Prknack PR Agency', type: 'Startup Story · Personal Brand', highlight: 'Gold at New York Film Festival · 18+ clients · International representation deals', excerpt: 'From a single assignment with zero experience to India\'s leading sports PR agency. All from a name that started with no idea behind it — just instinct.' },
]

export const experience = [
  {
    role: "Founder's Office Associate",
    company: 'Rolling Authors®',
    period: 'Mar 2025 — Present',
    description: 'Supporting business strategy, content planning, and execution across writing-led initiatives. Owns social strategy and end-to-end management for Rolling Authors channels.',
    current: true,
    link: 'https://www.rollingauthors.com',
  },
  {
    role: 'Freelance Author',
    company: 'WebNovel',
    period: 'Jul 2021 — Present',
    description: 'Serialized fiction author with 700K+ reads across romance, fantasy, and transmigration genres.',
    current: true,
    link: 'https://www.webnovel.com',
  },
  {
    role: 'Ghostwriter',
    company: 'Fiverr',
    period: 'Jun 2022 — Present',
    description: '100+ orders for 50+ clients. 5/5 rating. Romance, fantasy, and drama ghostwriting.',
    current: true,
    link: 'https://www.fiverr.com/s/1qy6gm9',
  },
  {
    role: 'Freelance Writer',
    company: 'Self-Employed',
    period: 'Mar 2024 — Present',
    description: 'High-quality novel ghostwriting with 100% response rate across diverse genres.',
    current: true,
  },
  {
    role: 'Data Specialist',
    company: 'Accenture',
    period: 'Apr 2024 — Jan 2024',
    description: 'Data mining across social media datasets. 15% increase in audience interaction rates.',
    current: false,
  },
  {
    role: 'Content Writer',
    company: 'Accerovic Solutions',
    period: 'Nov 2023 — Jan 2024',
    description: 'SEO-driven content creation. 25% increase in organic traffic within three months.',
    current: false,
  },
]

export const skills = {
  author: [
    'Long-form Serialized Storytelling',
    'Character Arc Development',
    'Reader Retention & Pacing',
    'World-Building & Lore Bibles',
    'Multi-Genre Ghostwriting',
    'Platform-Native Fiction',
  ],
  copywriter: [
    'Email Marketing Sequences',
    'Founder Narratives',
    'SEO Content Strategy',
    'LinkedIn Thought Leadership',
    'Brand & Website Copy',
    'Conversion Copywriting',
  ],
  social: [
    'Social Media Strategy',
    'Content Calendars',
    'Creative Direction',
    'Performance Monitoring',
    'Instagram Systems',
    'LinkedIn Thought Leadership',
    'Campaign Design',
    'Cross-Platform Trust',
  ],
  shared: [
    'Microsoft Excel',
    'Data Visualization',
    'Tableau',
    'HTML & CSS',
    'ChatGPT',
    'Narrative Strategy',
  ],
}

export const certifications = [
  'Data Analytics & Visualization — J.P. Morgan',
  'SEO — Coursera',
  'Tableau Certified — Jobaaj.com',
  'MS Excel — Great Learning & Coursera',
  'ChatGPT — Great Learning',
  'Time Management — Udemy',
]

export const socialStrategy = {
  title: 'Social Strategy Portfolio',
  client: 'Rolling Authors®',
  tenure: 'Since July 2025',
  tagline: 'A point of view before a schedule.',
  subtitle: 'Strategy first. Management all the way through.',
  about: `I took over Rolling Authors' social presence with no formal handover — and built the full workflow from scratch. I own ideation, calendars, copy, creative direction, publishing, and performance monitoring end to end. I direct and refine creative; I don't claim original illustration or graphic-design production.`,
  instagram: 'https://www.instagram.com/rollingauthors/',
  companyLinkedIn: 'https://in.linkedin.com/company/rolling-authors',
  website: 'https://www.rollingauthors.com/',
  metricsWindow: 'Instagram Insights · Last 90 days',
  metrics: [
    { value: '2.04M', label: 'Instagram Views', note: 'Discovery at scale' },
    { value: '1.26M', label: 'Accounts Reached', note: 'Beyond existing followers' },
    { value: '99.4%', label: 'Non-Follower Views', note: 'Proof of discovery' },
    { value: '1,326', label: 'Interactions', note: 'Active audience response' },
    { value: '1,244', label: 'Profile Activity', note: 'Profile-level action' },
    { value: '1,208', label: 'Profile Visits', note: 'Interest signal' },
  ],
  insights: [
    {
      title: 'Post-led discovery',
      description:
        'Posts generated 80.1% of views and 96.2% of interactions — a feed-first system, not a Reels-only bet.',
      bar: 80,
    },
    {
      title: 'Reach beyond the room',
      description:
        '99.4% of views came from non-followers. Content expanded discovery well beyond the existing audience.',
      bar: 99,
    },
    {
      title: 'Profile as a destination',
      description:
        '1,244 profile activities and 1,208 profile visits show content drove people to look closer — not just scroll past.',
      bar: 70,
    },
  ],
  scope: [
    {
      title: 'Find the angle',
      description: 'Ideation and positioning before anything hits the calendar.',
    },
    {
      title: 'Build the system',
      description: 'Content calendars, formats, and platform-native planning.',
    },
    {
      title: 'Run end-to-end',
      description: 'Write or adapt copy, brief creatives, schedule, and publish.',
    },
    {
      title: 'Read the signal',
      description: 'Monitor performance, refine direction, and tweak creatives where needed.',
    },
  ],
  platforms: [
    {
      name: 'LinkedIn',
      description: 'Thought leadership, founder stories, polls, and scenario formats that start conversations.',
    },
    {
      name: 'Instagram',
      description: 'Post-led discovery, educational carousels, community creatives, and occasion-led storytelling.',
    },
    {
      name: 'Short-form',
      description: 'Real-time positioning and lightweight experiments across feed-adjacent formats.',
    },
    {
      name: 'Cross-platform trust',
      description: 'Testimonials, proof assets, and consistent brand voice across channels.',
    },
  ],
  caseStudies: [
    {
      title: 'Unexpressed Wishes Week',
      type: 'Participation Campaign',
      description:
        'A branded-frame + hashtag participation campaign that invited the audience into the brand story — not just the feed.',
    },
    {
      title: 'Backstage RA',
      type: 'Recurring LinkedIn Format',
      description:
        'A scenario series positioning “real writers, not AI” — turning process transparency into trust and conversation.',
    },
    {
      title: 'Founder Story Series',
      type: 'Social Proof Asset',
      description:
        'Eight founder stories packaged as social proof — narrative that doubles as a sales and trust asset.',
    },
    {
      title: 'Occasion-led Calendar',
      type: 'Seasonal System',
      description:
        'World Book Day, Holi, Buddha Purnima, Akshaya Tritiya — cultural moments turned into on-brand creative moments.',
    },
  ],
  process: [
    { step: '01', title: 'Find the angle', description: 'Clarify the point of view before the post.' },
    { step: '02', title: 'Make it native', description: 'Shape the idea for LinkedIn, Instagram, or short-form.' },
    { step: '03', title: 'Write or brief', description: 'Own the copy — or brief creative with clear direction.' },
    { step: '04', title: 'Read the signal', description: 'Publish, watch the data, refine the next move.' },
  ],
  instagramGallery: [
    {
      src: '/social/rolling-authors-instagram-ghostwriting-vs-coaching.jpg',
      title: 'Ghostwriting vs Coaching',
      caption: 'Educational carousel',
      link: 'https://www.instagram.com/p/Dbr6bQdiWzM/',
    },
    {
      src: '/social/rolling-authors-instagram-books-business.jpg',
      title: 'Books as a Business Tool',
      caption: 'Editorial illustration',
      link: 'https://www.instagram.com/p/DcP9jD1jigo/',
    },
    {
      src: '/social/rolling-authors-instagram-blank-page.jpg',
      title: 'Blank Page',
      caption: 'Service storytelling',
      link: 'https://www.instagram.com/p/DcNYwbHj1g1/',
    },
    {
      src: '/social/rolling-authors-instagram-career-growth.jpg',
      title: 'Career Growth',
      caption: 'Thought-leadership graphic',
      link: 'https://www.instagram.com/p/DcIPLaBiQOh/',
    },
    {
      src: '/social/rolling-authors-instagram-freedom.jpg',
      title: 'Freedom',
      caption: 'Occasion-led creative',
      link: 'https://www.instagram.com/p/DcDFkZMD8JM/',
    },
  ],
  illustrations: [
    {
      src: '/social/rolling-authors-character-evolution.png',
      title: 'Character Evolution',
    },
    {
      src: '/social/rolling-authors-chapter-one.png',
      title: 'Chapter One',
    },
    {
      src: '/social/rolling-authors-writing-myth.png',
      title: 'Writing Myth',
    },
    {
      src: '/social/rolling-authors-query-agents.png',
      title: 'Query Agents',
    },
  ],
  linkedinGallery: [
    {
      src: '/social/rolling-authors-design-01.jpg',
      title: 'LinkedIn Visual 01',
      caption: 'Brand visual sample',
    },
    {
      src: '/social/rolling-authors-design-02.jpg',
      title: 'LinkedIn Visual 02',
      caption: 'Brand visual sample',
    },
    {
      src: '/social/1000449365.jpg',
      title: 'Ghostwriting Poll',
      caption: '19 votes · thought-leadership test',
    },
  ],
}
