'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers, FiAward, FiStar, FiTarget } from 'react-icons/fi'

const stats = [
  { icon: FiUsers, value: '10,000+', label: 'שחקנים מרוצים', color: 'text-purple-400', glow: 'rgba(139,92,246,0.4)' },
  { icon: FiTarget, value: '5', label: 'זירות ייחודיות', color: 'text-cyan-400', glow: 'rgba(6,182,212,0.4)' },
  { icon: FiAward, value: '500+', label: 'אירועים בשנה', color: 'text-purple-400', glow: 'rgba(139,92,246,0.4)' },
  { icon: FiStar, value: '4.9★', label: 'דירוג ממוצע', color: 'text-cyan-400', glow: 'rgba(6,182,212,0.4)' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-16 overflow-hidden bg-[#050505]">
      {/* Separator line with glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className="glass-card rounded-2xl p-5 sm:p-6 text-center group cursor-default card-hover"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 mx-auto"
                  style={{
                    background: `${stat.glow.replace('0.4', '0.1')}`,
                    border: `1px solid ${stat.glow.replace('0.4', '0.3')}`,
                  }}
                >
                  <Icon className={`${stat.color} text-xl`} />
                </div>
                <div
                  className={`text-3xl sm:text-4xl font-black mb-1 ${stat.color}`}
                  style={{ textShadow: `0 0 20px ${stat.glow}` }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Separator line with glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
    </section>
  )
}
