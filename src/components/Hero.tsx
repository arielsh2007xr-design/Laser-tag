'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiZap } from 'react-icons/fi'

const BEAMS = [
  { top: '15%', delay: '0s', duration: '9s', color: 'rgba(139,92,246,0.6)', width: '35vw', height: '1px' },
  { top: '35%', delay: '2s', duration: '11s', color: 'rgba(6,182,212,0.5)', width: '50vw', height: '1px' },
  { top: '55%', delay: '4s', duration: '8s', color: 'rgba(139,92,246,0.4)', width: '40vw', height: '1px' },
  { top: '72%', delay: '1s', duration: '13s', color: 'rgba(6,182,212,0.6)', width: '45vw', height: '1px' },
  { top: '88%', delay: '3s', duration: '10s', color: 'rgba(167,139,250,0.5)', width: '30vw', height: '1px' },
]

const PARTICLES = [
  { top: '20%', right: '15%', delay: '0s', color: '#8B5CF6' },
  { top: '40%', right: '80%', delay: '1.5s', color: '#06B6D4' },
  { top: '60%', right: '30%', delay: '3s', color: '#8B5CF6' },
  { top: '75%', right: '65%', delay: '2s', color: '#22D3EE' },
  { top: '30%', right: '50%', delay: '0.8s', color: '#A78BFA' },
  { top: '85%', right: '20%', delay: '4s', color: '#06B6D4' },
  { top: '10%', right: '70%', delay: '2.5s', color: '#8B5CF6' },
  { top: '50%', right: '90%', delay: '1s', color: '#22D3EE' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Deep radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(139,92,246,0.12)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_60%,rgba(6,182,212,0.08)_0%,transparent_60%)]" />

      {/* Laser grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Perspective grid (bottom) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(139,92,246,0.04) 60%, rgba(6,182,212,0.06))',
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)',
          backgroundSize: '70px 40px',
          maskImage: 'linear-gradient(to bottom, transparent, black 40%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%)',
          transform: 'perspective(600px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }}
      />

      {/* Animated horizontal laser beams */}
      {BEAMS.map((beam, i) => (
        <div
          key={i}
          className="absolute right-0 pointer-events-none overflow-hidden"
          style={{ top: beam.top, width: '100%', height: '40px' }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '-100%',
              width: beam.width,
              height: beam.height,
              background: `linear-gradient(to left, transparent, ${beam.color}, transparent)`,
              boxShadow: `0 0 8px ${beam.color}, 0 0 16px ${beam.color}`,
              animation: `hLaser ${beam.duration} linear ${beam.delay} infinite`,
            }}
          />
        </div>
      ))}

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            right: p.right,
            width: i % 3 === 0 ? 4 : 3,
            height: i % 3 === 0 ? 4 : 3,
            background: p.color,
            boxShadow: `0 0 6px ${p.color}, 0 0 12px ${p.color}`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            delay: parseFloat(p.delay),
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main content */}
      <div ref={canvasRef} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
        >
          <FiZap className="text-purple-400 text-sm" />
          <span className="text-purple-300 text-sm font-medium">נתניה | פולג | חוויה אחרת לגמרי</span>
          <FiZap className="text-cyan-400 text-sm" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 tracking-tight"
        >
          <span className="text-white block">חוויית</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.5))',
            }}
          >
            לייזר טאג
          </span>
          <span className="text-white block text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
            האולטימטיבית
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-slate-400 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          צאו למשימה עם אקדחי לייזר מתקדמים, זירה אטמוספרית מרהיבה,
          ואדרנלין{' '}
          <span className="text-cyan-400 font-semibold">ללא גבולות</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="relative group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #0891B2)',
              boxShadow: '0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.2)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(6,182,212,0.6), 0 0 80px rgba(139,92,246,0.3)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">⚡ הזמן עכשיו</span>
            <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
          </motion.a>

          <motion.a
            href="#gallery"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white/80 border border-white/10 hover:border-purple-500/50 hover:text-white transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(139,92,246,0.08)' }}
            whileTap={{ scale: 0.97 }}
          >
            גלה עוד
            <FiChevronDown className="text-purple-400" />
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
        >
          {['✅ בטוח לכל הגילאים', '🎯 ציוד מקצועי', '🎉 אירועים מותאמים אישית'].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs text-slate-600 font-medium tracking-widest uppercase">גלול</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-purple-400"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
