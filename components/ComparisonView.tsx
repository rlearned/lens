'use client'

import { motion } from 'framer-motion'
import { Product, CulturalContext } from '@/types'
import { translateNutrition } from '@/lib/translator'

interface ComparisonViewProps {
  product: Product
}

const contexts: { id: CulturalContext; name: string; emoji: string; color: string }[] = [
  { id: 'weird', name: 'Standard WEIRD', emoji: '📊', color: 'weird' },
  { id: 'rural', name: 'Rural Chinese', emoji: '🏘️', color: 'rural' },
  { id: 'eastwa', name: 'Eastern WA', emoji: '🌾', color: 'eastwa' },
  { id: 'lowlit', name: 'Low-Literacy', emoji: '👁️', color: 'lowlit' },
]

export default function ComparisonView({ product }: ComparisonViewProps) {
  const translations = contexts.map((ctx) => ({
    ...ctx,
    translation: translateNutrition(product.nutrition, ctx.id),
  }))

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600">Same product, four different trust languages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {translations.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`card border-2 hover:scale-105 transition-transform cursor-pointer
              ${item.id === 'weird' ? 'border-weird bg-weird-light/20' : ''}
              ${item.id === 'rural' ? 'border-rural bg-rural-light/20' : ''}
              ${item.id === 'eastwa' ? 'border-eastwa bg-eastwa-light/20' : ''}
              ${item.id === 'lowlit' ? 'border-lowlit bg-lowlit-light/20' : ''}
            `}
          >
            {/* Header */}
            <div className="text-center mb-4 pb-3 border-b border-gray-200">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h4 className="font-semibold text-sm">{item.name}</h4>
            </div>

            {/* Sugar */}
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">Sugar</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="text-lg font-bold mb-1 min-h-[3rem] flex items-center"
              >
                {item.translation.sugar.display}
              </motion.div>
              <div className="text-xs text-gray-500 italic">
                {item.translation.sugar.explanation}
              </div>
            </div>

            {/* Sodium */}
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">Sodium</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.4 }}
                className="text-lg font-bold mb-1 min-h-[3rem] flex items-center"
              >
                {item.translation.sodium.display}
              </motion.div>
              <div className="text-xs text-gray-500 italic">
                {item.translation.sodium.explanation}
              </div>
            </div>

            {/* Calories */}
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">Energy</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.5 }}
                className="text-lg font-bold mb-1 min-h-[3rem] flex items-center"
              >
                {item.translation.calories.display}
              </motion.div>
              <div className="text-xs text-gray-500 italic">
                {item.translation.calories.explanation}
              </div>
            </div>

            {/* Trust Indicators */}
            {item.translation.trustIndicators.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.6 }}
                className="pt-3 border-t border-gray-200"
              >
                <div className="text-xs font-semibold text-gray-600 mb-2">Trust:</div>
                <div className="flex flex-wrap gap-1">
                  {item.translation.trustIndicators.map((indicator, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.7 + i * 0.1, type: 'spring' }}
                      className="text-xs px-2 py-1 bg-white rounded-full border border-gray-200"
                    >
                      {indicator.display}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Comprehension Time Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="card bg-gradient-to-br from-sage-50 to-cream-100 border-2 border-sage-200"
      >
        <h4 className="text-xl font-bold mb-6 text-center">
          ⚡ Comprehension Speed Comparison
        </h4>
        
        <div className="space-y-4">
          {/* Standard Label */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Standard WEIRD Label</span>
              <span className="text-sm font-bold text-weird">45 seconds</span>
            </div>
            <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-weird flex items-center justify-end pr-3"
              >
                <span className="text-white text-xs font-bold">📊</span>
              </motion.div>
            </div>
          </div>

          {/* Visual Translation */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Visual Translation</span>
              <span className="text-sm font-bold text-sage-600">8 seconds</span>
            </div>
            <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '17.8%' }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-sage-500 to-sage-400 flex items-center justify-end pr-3"
              >
                <span className="text-white text-xs font-bold">⚡</span>
              </motion.div>
            </div>
          </div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5, type: 'spring' }}
            className="text-center p-4 bg-white rounded-xl border-2 border-sage-300"
          >
            <div className="text-3xl font-bold text-sage-600 mb-1">4.2x Faster</div>
            <div className="text-sm text-gray-600">
              Visual translations reduce comprehension time by <strong>82%</strong>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
