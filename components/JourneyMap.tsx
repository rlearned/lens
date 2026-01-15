'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Persona } from '@/types'

interface JourneyMapProps {
  personas: Persona[]
}

interface JourneyStep {
  icon: string
  title: string
  quote: string
  time: string
  status: 'confusion' | 'trying' | 'seeking' | 'decision'
}

export default function JourneyMap({ personas }: JourneyMapProps) {
  const [selectedPersona, setSelectedPersona] = useState(0)
  
  const persona = personas[selectedPersona]

  // Journey steps WITHOUT Lens (traditional labels)
  const traditionalJourney: JourneyStep[] = [
    {
      icon: '📦',
      title: 'Encounters Product',
      quote: 'What does this mean?',
      time: '~30 seconds',
      status: 'confusion',
    },
    {
      icon: '🤷',
      title: 'Tries to Read Label',
      quote: 'These numbers don\'t help',
      time: '~45 seconds',
      status: 'trying',
    },
    {
      icon: '🤝',
      title: 'Asks Trusted Source',
      quote: persona.context === 'rural' ? 'My neighbor uses this brand' : 'My cousin recommends this',
      time: '~10 seconds',
      status: 'seeking',
    },
    {
      icon: '✅',
      title: 'Makes Decision',
      quote: 'I\'ll trust their recommendation',
      time: 'Total: ~1 min 25 sec',
      status: 'decision',
    },
  ]

  // Journey WITH Lens (translated labels)
  const lensJourney: JourneyStep[] = [
    {
      icon: '📦',
      title: 'Sees Translated Label',
      quote: persona.context === 'rural' ? 'Oh! 10 ice cubes - that\'s very sweet' : 'High sugar - I understand!',
      time: '~8 seconds',
      status: 'decision',
    },
    {
      icon: '✅',
      title: 'Makes Informed Decision',
      quote: 'I understand this myself!',
      time: 'Total: ~8 seconds',
      status: 'decision',
    },
  ]

  const statusColors = {
    confusion: 'bg-red-100 border-red-300 text-red-700',
    trying: 'bg-yellow-100 border-yellow-300 text-yellow-700',
    seeking: 'bg-blue-100 border-blue-300 text-blue-700',
    decision: 'bg-green-100 border-green-300 text-green-700',
  }

  return (
    <div className="card bg-gradient-to-br from-sage-50 to-cream-100 border-2 border-sage-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2">📍 How People Actually Make Decisions</h3>
        <p className="text-gray-600">Comparing traditional labels vs culturally-aware translation</p>
      </div>

      {/* Persona Selector */}
      <div className="flex justify-center gap-4 mb-8">
        {personas.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setSelectedPersona(idx)}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              selectedPersona === idx
                ? 'bg-sage-400 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-sage-50'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Traditional Journey */}
        <motion.div
          key={`traditional-${selectedPersona}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl p-6 border-2 border-gray-200"
        >
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-1">❌ Without Lens</h4>
            <p className="text-sm text-gray-500">Traditional nutrition labels</p>
          </div>

          <div className="space-y-4">
            {traditionalJourney.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className={`p-4 rounded-lg border-2 ${statusColors[step.status]}`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold">{step.title}</h5>
                      <span className="text-xs font-mono bg-white/50 px-2 py-1 rounded">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm italic">"{step.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium">
              ⏱️ Slow & Dependent on Others
            </div>
          </div>
        </motion.div>

        {/* Lens Journey */}
        <motion.div
          key={`lens-${selectedPersona}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl p-6 border-2 border-sage-300"
        >
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-sage-700 mb-1">✨ With Lens</h4>
            <p className="text-sm text-sage-600">Culturally-aware translation</p>
          </div>

          <div className="space-y-4">
            {lensJourney.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className={`p-4 rounded-lg border-2 ${statusColors[step.status]}`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold">{step.title}</h5>
                      <span className="text-xs font-mono bg-white/50 px-2 py-1 rounded">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm italic">"{step.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium">
              ⚡ Fast & Independent
            </div>
          </div>
        </motion.div>
      </div>

      {/* Comparison Summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-6 bg-gradient-to-r from-sage-400 to-sage-500 rounded-xl text-white text-center"
      >
        <div className="text-5xl font-bold mb-2">10.6x Faster</div>
        <p className="text-lg opacity-90">
          From <strong>85 seconds</strong> (relying on others) to <strong>8 seconds</strong> (self-sufficient)
        </p>
        <p className="text-sm mt-2 opacity-75">
          Culturally-aware design enables autonomy, not just speed
        </p>
      </motion.div>
    </div>
  )
}
