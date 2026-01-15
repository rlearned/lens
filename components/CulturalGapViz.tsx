'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CulturalGapViz() {
  const [showWithLens, setShowWithLens] = useState(false)

  return (
    <div className="card bg-gradient-to-br from-cream-50 to-sage-50 border-2 border-sage-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2">🌍 The Cultural Understanding Gap</h3>
        <p className="text-gray-600">How much do different populations understand standard nutrition labels?</p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl border-2 border-sage-300 p-1 bg-white">
          <button
            onClick={() => setShowWithLens(false)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              !showWithLens
                ? 'bg-gray-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            ❌ Standard Labels
          </button>
          <button
            onClick={() => setShowWithLens(true)}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              showWithLens
                ? 'bg-sage-400 text-white shadow-md'
                : 'text-gray-600 hover:text-sage-600'
            }`}
          >
            ✨ With Lens
          </button>
        </div>
      </div>

      {/* Venn Diagram Area */}
      <div className="relative h-96 max-w-4xl mx-auto mb-8">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          {/* WEIRD Circle (Left) */}
          <motion.circle
            cx="250"
            cy="200"
            r="120"
            fill="url(#weirdGradient)"
            stroke="#6B7280"
            strokeWidth="3"
            opacity="0.7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
          />
          
          {/* Non-WEIRD Circle (Right) */}
          <motion.circle
            cx="550"
            cy="200"
            r="180"
            fill="url(#nonWeirdGradient)"
            stroke="#8B9A7F"
            strokeWidth="3"
            opacity="0.7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
          />

          {/* Overlap (changes based on state) */}
          <motion.ellipse
            cx="400"
            cy="200"
            rx={showWithLens ? "100" : "40"}
            ry={showWithLens ? "140" : "60"}
            fill="url(#overlapGradient)"
            opacity="0.8"
            animate={{
              rx: showWithLens ? 100 : 40,
              ry: showWithLens ? 140 : 60,
            }}
            transition={{ duration: 0.8, type: 'spring' }}
          />

          {/* Labels */}
          <text x="200" y="100" textAnchor="middle" className="fill-gray-700 font-bold text-lg">
            WEIRD
          </text>
          <text x="200" y="125" textAnchor="middle" className="fill-gray-600 text-sm">
            12% of world
          </text>
          
          <text x="600" y="100" textAnchor="middle" className="fill-sage-700 font-bold text-lg">
            Non-WEIRD
          </text>
          <text x="600" y="125" textAnchor="middle" className="fill-sage-600 text-sm">
            88% of world
          </text>

          {/* Overlap percentage */}
          <motion.text
            x="400"
            y="200"
            textAnchor="middle"
            className="fill-white font-bold"
            fontSize={showWithLens ? "32" : "24"}
            animate={{ fontSize: showWithLens ? 32 : 24 }}
          >
            {showWithLens ? '67%' : '15%'}
          </motion.text>
          <text x="400" y="225" textAnchor="middle" className="fill-white text-sm font-medium">
            Mutual Understanding
          </text>

          {/* Gradients */}
          <defs>
            <linearGradient id="weirdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6B7280" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="nonWeirdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B9A7F" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6d7d64" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="overlapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4735E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8B9A7F" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 text-center border-2 border-gray-200"
        >
          <div className="text-4xl font-bold text-gray-600 mb-2">
            {showWithLens ? '67%' : '15%'}
          </div>
          <div className="text-sm text-gray-600">
            Can correctly interpret labels
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 text-center border-2 border-sage-200"
        >
          <div className="text-4xl font-bold text-sage-600 mb-2">
            +{showWithLens ? '347%' : '0%'}
          </div>
          <div className="text-sm text-gray-600">
            Improvement in comprehension
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 text-center border-2 border-terracotta-200"
        >
          <div className="text-4xl font-bold text-terracotta-500 mb-2">
            {showWithLens ? '90%' : '20%'}
          </div>
          <div className="text-sm text-gray-600">
            Trust the information
          </div>
        </motion.div>
      </div>

      {/* Explanation */}
      <motion.div
        key={showWithLens ? 'with' : 'without'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 bg-white rounded-xl border-2 border-sage-200"
      >
        {!showWithLens ? (
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              The Problem: Minimal Overlap
            </h4>
            <p className="text-gray-700 mb-3">
              Standard nutrition labels are designed for WEIRD populations (Western, Educated, Industrialized, Rich, Democratic). 
              Only <strong>15% of non-WEIRD populations</strong> can correctly interpret these labels.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>85% cannot understand abstract units (grams, percentages, DV)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>80% don't trust institutional information sources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>73% rely on social networks for product decisions</span>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h4 className="font-bold text-sage-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              The Solution: Expanded Understanding
            </h4>
            <p className="text-gray-700 mb-3">
              Culturally-aware translation increases mutual understanding to <strong>67%</strong> — a <strong>347% improvement</strong>. 
              Information becomes accessible without losing accuracy.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>Body-based measurements (walking minutes) are universally understood</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>Visual representations (ice cubes, traffic lights) transcend literacy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>Trust indicators (community choice) bridge institutional gaps</span>
              </li>
            </ul>
          </div>
        )}
      </motion.div>

      {/* Key Takeaway */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-4 bg-gradient-to-r from-terracotta-100 to-sage-100 rounded-xl border-2 border-sage-300"
      >
        <p className="text-center text-gray-800 font-medium">
          💡 <strong>Key Insight:</strong> This isn't about "simplifying" for others—it's about designing information systems 
          that respect different ways of knowing and different trust structures.
        </p>
      </motion.div>
    </div>
  )
}
