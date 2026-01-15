'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { products } from '@/data/products'
import { personas, researchInsights } from '@/data/personas'
import { translateNutrition } from '@/lib/translator'
import { CulturalContext } from '@/types'
import ComparisonView from '@/components/ComparisonView'

export default function LensLanding() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [selectedContext, setSelectedContext] = useState<CulturalContext>('weird')
  const [viewMode, setViewMode] = useState<'single' | 'comparison'>('comparison')

  const translation = translateNutrition(selectedProduct.nutrition, selectedContext)

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Height of fixed nav
      const top = element.offsetTop - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-sm border-b border-sage-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gradient-sage">Lens</h1>
            <div className="flex items-center gap-6 text-sm">
              <a href="#problem" className="text-gray-700 hover:text-sage-600 transition-colors">Problem</a>
              <a href="#research" className="text-gray-700 hover:text-sage-600 transition-colors">Research</a>
              <a href="#demo" className="text-gray-700 hover:text-sage-600 transition-colors">Solution</a>
              <a href="#demo" className="btn btn-primary text-sm py-2 px-4">Try Demo</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section pt-32 pb-20 bg-gradient-to-br from-sage-50 to-cream-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Eyebrow */}
            <span className="text-section-title">Cross-Cultural Information Design</span>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              What if labels could speak <span className="text-gradient-sage">everyone's</span> language?
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Translating institutional trust into social trust through culturally-aware information design
            </p>

            {/* Ms. Zhang's quote - The Hook */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <div className="card border-l-4 border-rural bg-rural-light/20">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💬</div>
                  <div className="text-left">
                    <p className="text-lg md:text-xl italic text-gray-800 mb-3">
                      "These numbers mean nothing to me. I trust what my neighbor tells me, not what some label says."
                    </p>
                    <p className="text-sm text-gray-600">
                      — Ms. Zhang Wei, 58, Jiaxian County, China
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#demo" className="btn btn-primary text-lg">
                See the Solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#research" className="btn btn-outline text-lg">
                View Research
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-section-title">The Problem</span>
            <h2 className="mb-8">Standard Information Design Excludes Non-WEIRD Populations</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card card-hover">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">WEIRD Assumptions</h3>
                <p className="text-gray-600">
                  Western, Educated, Industrialized, Rich, Democratic populations represent <strong>12% of the world</strong> but inform <strong>95% of design decisions</strong>.
                </p>
              </div>

              <div className="card card-hover">
                <div className="text-3xl mb-4">🚫</div>
                <h3 className="text-xl font-semibold mb-3">Trust Deficit</h3>
                <p className="text-gray-600">
                  Numerical labels assume institutional trust. For many populations, trust flows through <strong>social networks</strong>, not government agencies.
                </p>
              </div>

              <div className="card card-hover">
                <div className="text-3xl mb-4">🔢</div>
                <h3 className="text-xl font-semibold mb-3">Numbers Don't Translate</h3>
                <p className="text-gray-600">
                  "12g sugar" means nothing without cultural anchors. Abstract units lack <strong>contextual meaning</strong> outside WEIRD frameworks.
                </p>
              </div>

              <div className="card card-hover">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Not Just Language</h3>
                <p className="text-gray-600">
                  Translating text isn't enough. The <strong>conceptual models</strong> behind information must be culturally adapted.
                </p>
              </div>
            </div>

            <div className="card bg-sage-50 border-sage-200">
              <h4 className="text-xl font-semibold mb-4 text-sage-800">The Core Question:</h4>
              <p className="text-lg text-gray-700">
                How do we translate information design from <strong>institutional trust systems</strong> (WEIRD) 
                to <strong>social trust systems</strong> (non-WEIRD) without losing accuracy or patronizing users?
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="section bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-section-title">Research Foundation</span>
            <h2 className="mb-4">Ethnographic Research Across Two Contexts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              16 interviews and contextual inquiry across rural China and Eastern Washington
            </p>
          </motion.div>

          {/* Personas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {personas.map((persona, idx) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`card ${persona.context === 'rural' ? 'context-card-rural' : 'context-card-eastwa'}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">👤</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{persona.name}</h3>
                    <p className="text-gray-600">{persona.age} • {persona.occupation}</p>
                    <p className="text-sm text-gray-500">{persona.location}</p>
                  </div>
                </div>

                <div className="bg-white/50 rounded-xl p-4 mb-4">
                  <p className="italic text-gray-800">"{persona.quote}"</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm uppercase text-gray-600 mb-2">Trust Pathway</h4>
                    <div className="flex flex-wrap gap-2">
                      {persona.trustPathway.map((step, i) => (
                        <span key={i} className="badge badge-sage text-xs">
                          {i + 1}. {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm uppercase text-gray-600 mb-2">Pain Points</h4>
                    <ul className="text-sm space-y-1">
                      {persona.painPoints.slice(0, 2).map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">•</span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Methodology */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Research Methodology</h3>
            <div className="card bg-white border-2 border-sage-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-sage-700 mb-3 flex items-center gap-2">
                    <span className="text-xl">📋</span> Data Collection
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">•</span>
                      <span><strong>Semi-structured interviews</strong> (n=8 per context, 16 total)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">•</span>
                      <span><strong>Contextual inquiry</strong> in grocery stores and local markets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">•</span>
                      <span><strong>Usability testing</strong> with prototype labels (n=16)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">•</span>
                      <span><strong>Field documentation</strong> through photos and ethnographic notes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sage-700 mb-3 flex items-center gap-2">
                    <span className="text-xl">🔍</span> Analysis Methods
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">•</span>
                      <span><strong>Thematic analysis</strong> of interview transcripts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">•</span>
                      <span><strong>Affinity mapping</strong> to identify patterns across contexts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">•</span>
                      <span><strong>Comparative comprehension testing</strong> (standard vs. visual labels)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sage-500 mt-1">•</span>
                      <span><strong>Trust pathway mapping</strong> from participant mental models</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-sage-700 mb-3 flex items-center gap-2">
                  <span className="text-xl">👥</span> Participant Recruitment
                </h4>
                <p className="text-sm text-gray-700">
                  Participants were recruited through community organizations and local networks in rural Henan Province, China, and Yakima County, Washington. 
                  Inclusion criteria: primary household food purchasers, limited English proficiency (Eastern WA cohort), 
                  and self-reported difficulty understanding nutrition labels.
                </p>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Key Research Insights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchInsights.slice(0, 6).map((insight, idx) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card card-hover"
                >
                  <h4 className="font-semibold mb-2 text-sage-700">{insight.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                  <div className="text-xs text-gray-500 bg-gray-50 rounded p-2">
                    <strong>Finding:</strong> {insight.evidence}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution/Demo Section */}
      <section id="demo" className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-section-title">The Solution</span>
            <h2 className="mb-4">Context-Aware Translation Engine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The same product information, translated into four different cultural trust languages
            </p>
          </motion.div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-xl border-2 border-sage-300 p-1 bg-white">
              <button
                onClick={() => setViewMode('comparison')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'comparison'
                    ? 'bg-sage-400 text-white shadow-md'
                    : 'text-gray-600 hover:text-sage-600'
                }`}
              >
                ⚡ 4-Way Comparison
              </button>
              <button
                onClick={() => setViewMode('single')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'single'
                    ? 'bg-sage-400 text-white shadow-md'
                    : 'text-gray-600 hover:text-sage-600'
                }`}
              >
                Single Context
              </button>
            </div>
          </div>

          {viewMode === 'comparison' ? (
            /* Comparison View */
            <div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                  Select a Product to Compare:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`p-3 rounded-xl border-2 transition-all text-left ${
                        selectedProduct.id === product.id
                          ? 'border-sage-400 bg-sage-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-xs">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.brand}</div>
                    </button>
                  ))}
                </div>
              </div>
              <ComparisonView product={selectedProduct} />
            </div>
          ) : (
            /* Single Context View */
            <div className="max-w-6xl mx-auto">
              {/* Product Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Select a Product:</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-3 rounded-xl border-2 transition-all text-left ${
                      selectedProduct.id === product.id
                        ? 'border-sage-400 bg-sage-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-sm">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.brand}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Context Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">Choose Cultural Context:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'weird' as CulturalContext, name: 'Standard WEIRD', color: 'weird' },
                  { id: 'rural' as CulturalContext, name: 'Rural Chinese', color: 'rural' },
                  { id: 'eastwa' as CulturalContext, name: 'Eastern WA', color: 'eastwa' },
                  { id: 'lowlit' as CulturalContext, name: 'Low-Literacy', color: 'lowlit' },
                ].map((context) => (
                  <button
                    key={context.id}
                    onClick={() => setSelectedContext(context.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedContext === context.id
                        ? `border-${context.color} bg-${context.color}-light/30`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{context.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Translation Result */}
            <motion.div
              key={`${selectedProduct.id}-${selectedContext}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card border-4 border-sage-200 bg-gradient-to-br from-white to-sage-50/30"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                <p className="text-gray-600">{translation.contextName}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-sm text-gray-600 mb-2">Sugar Content</div>
                  <div className="text-2xl font-bold mb-2">{translation.sugar.display}</div>
                  <div className="text-xs text-gray-500">{translation.sugar.explanation}</div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-sm text-gray-600 mb-2">Sodium/Salt</div>
                  <div className="text-2xl font-bold mb-2">{translation.sodium.display}</div>
                  <div className="text-xs text-gray-500">{translation.sodium.explanation}</div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-sm text-gray-600 mb-2">Energy/Calories</div>
                  <div className="text-2xl font-bold mb-2">{translation.calories.display}</div>
                  <div className="text-xs text-gray-500">{translation.calories.explanation}</div>
                </div>
              </div>

              {/* Trust Indicators */}
              {translation.trustIndicators.length > 0 && (
                <div className="bg-white/50 rounded-xl p-4 mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Trust Indicators:</div>
                  <div className="flex flex-wrap gap-2">
                    {translation.trustIndicators.map((indicator, idx) => (
                      <span key={idx} className="badge badge-sage">
                        {indicator.display}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-center text-lg font-medium text-sage-700">
                {translation.overallMessage}
              </div>
            </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Limitations & Reflection */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Limitations & Open Questions</h2>
            
            <div className="card bg-white border-2 border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">🔍</span> Scope Limitations
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Domain specificity:</strong> This prototype addresses nutrition labels but doesn't solve medication instructions, financial documents, or legal forms, other critical information types that affect non-WEIRD populations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Cultural oversimplification:</strong> Real cultural variation is far more nuanced than four categories. Within "Rural Chinese" and "Eastern WA" contexts exist tremendous diversity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Small sample size:</strong> With n=16 participants across two contexts, findings may not generalize to all non-WEIRD populations globally.</span>
                </li>
              </ul>
            </div>

            <div className="card bg-white border-2 border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">❓</span> Unresolved Design Questions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-sage-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Trust indicators for isolated individuals:</strong> The "Neighbor Verified" badge assumes local trust networks exist, how does this work for people without strong community ties?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Delivery mechanism:</strong> We tested with printed labels attached to products in our demo. But what's the best way to deliver this information at scale? Mobile apps? In-store digital displays? QR codes? Each has accessibility trade-offs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Dynamic translation accuracy:</strong> Can visual metaphors (ice cubes, walking minutes) maintain accuracy across thousands of products? Does "3 sugar cubes" work for both soda and granola bars?</span>
                </li>
              </ul>
            </div>

            <div className="card bg-white border-2 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Technical & Scalability Challenges
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Database architecture:</strong> How would this work with 1000+ products? Real-time translation requires robust backend infrastructure and content management systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Maintaining cultural accuracy:</strong> Who validates that trust indicators and visual metaphors remain culturally appropriate? This requires ongoing collaboration with community stakeholders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                  <span><strong>Regulatory compliance:</strong> How do culturally-adapted labels satisfy FDA/USDA legal requirements while remaining accessible?</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-sage-50 border-2 border-sage-200 rounded-xl">
              <p className="text-gray-800 text-center">
                <strong className="text-sage-700">What I'm still learning:</strong> These limitations don't undermine the core insight, that information design must respect different epistemologies, but they highlight that this is a <em>starting point</em>, not a complete solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="section bg-gradient-to-br from-sage-600 to-sage-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">This is just the beginning.</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Lens demonstrates that accessibility isn't about "simplifying" for others, it's about respecting different ways of knowing.
          </p>
        </div>
      </section>
    </main>
  )
}
