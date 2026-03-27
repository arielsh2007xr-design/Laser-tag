'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiMaximize2, FiX } from 'react-icons/fi'

const galleryItems = [
  {
    id: 1,
    title: 'הזירה הראשית',
    subtitle: 'זירת קרב בין-כוכבית',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #0a1628 50%, #061220 100%)',
    accent: 'linear-gradient(135deg, rgba(139,92,246,0.8) 0%, rgba(6,182,212,0.6) 100%)',
    accentColor: '#8B5CF6',
    gridSpan: 'md:col-span-2 md:row-span-2',
    height: 'h-64 md:h-full',
    pattern: 'grid',
  },
  {
    id: 2,
    title: 'ציוד מתקדם',
    subtitle: 'אקדחי לייזר דור חדש',
    gradient: 'linear-gradient(135deg, #061a2a 0%, #041018 100%)',
    accent: 'linear-gradient(135deg, rgba(6,182,212,0.7) 0%, rgba(34,211,238,0.5) 100%)',
    accentColor: '#06B6D4',
    gridSpan: '',
    height: 'h-48',
    pattern: 'dots',
  },
  {
    id: 3,
    title: 'מסיבות יום הולדת',
    subtitle: 'חגיגה בלתי נשכחת',
    gradient: 'linear-gradient(135deg, #1c0a2e 0%, #0a0520 100%)',
    accent: 'linear-gradient(135deg, rgba(167,139,250,0.8) 0%, rgba(139,92,246,0.5) 100%)',
    accentColor: '#A78BFA',
    gridSpan: '',
    height: 'h-48',
    pattern: 'lines',
  },
  {
    id: 4,
    title: 'תחרויות קבוצתיות',
    subtitle: 'אלוף הקבוצה',
    gradient: 'linear-gradient(135deg, #051428 0%, #030a18 100%)',
    accent: 'linear-gradient(135deg, rgba(6,182,212,0.6) 0%, rgba(139,92,246,0.7) 100%)',
    accentColor: '#06B6D4',
    gridSpan: 'md:col-span-2',
    height: 'h-48',
    pattern: 'circuit',
  },
  {
    id: 5,
    title: 'אירועים קורפורטיביים',
    subtitle: 'Team Building בסטייל',
    gradient: 'linear-gradient(135deg, #0a0518 0%, #050310 100%)',
    accent: 'linear-gradient(135deg, rgba(139,92,246,0.7) 0%, rgba(6,182,212,0.6) 100%)',
    accentColor: '#8B5CF6',
    gridSpan: '',
    height: 'h-48',
    pattern: 'hex',
  },
]

type PatternType = 'grid' | 'dots' | 'lines' | 'circuit' | 'hex'

function BackgroundPattern({ type, color }: { type: PatternType; color: string }) {
  const patterns: Record<PatternType, React.ReactNode> = {
    grid: (
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${color}40 1px, transparent 1px), linear-gradient(90deg, ${color}40 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
    ),
    dots: (
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, ${color}60 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
    ),
    lines: (
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, ${color}40 0, ${color}40 1px, transparent 0, transparent 20px)`,
        }}
      />
    ),
    circuit: (
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(${color}50 1px, transparent 1px),
            linear-gradient(90deg, ${color}50 1px, transparent 1px),
            radial-gradient(circle, ${color}80 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
          backgroundPosition: '0 0, 0 0, 20px 20px',
        }}
      />
    ),
    hex: (
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(${color}60 1.5px, transparent 1.5px), linear-gradient(60deg, ${color}60 1.5px, transparent 1.5px), linear-gradient(120deg, ${color}60 1.5px, transparent 1.5px)`,
          backgroundSize: '20px 35px',
        }}
      />
    ),
  }

  return <>{patterns[type]}</>
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null)

  return (
    <section id="gallery" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(6,182,212,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 mb-5">
            גלריה
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            צוללים{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              לזירה
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            חמש זירות ייחודיות, כל אחת עם אווירה שונה. כולן מדהימות.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-[280px_200px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${item.gridSpan} ${item.height}`}
              style={{ background: item.gradient }}
              onClick={() => setSelected(item)}
              whileHover={{ scale: 1.015 }}
            >
              {/* Background pattern */}
              <BackgroundPattern type={item.pattern as PatternType} color={item.accentColor} />

              {/* Accent gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: item.accent }}
              />

              {/* Corner laser lines */}
              <div
                className="absolute top-0 right-0 w-16 h-px opacity-60"
                style={{
                  background: `linear-gradient(to left, ${item.accentColor}, transparent)`,
                  boxShadow: `0 0 8px ${item.accentColor}`,
                }}
              />
              <div
                className="absolute top-0 right-0 w-px h-16 opacity-60"
                style={{
                  background: `linear-gradient(to bottom, ${item.accentColor}, transparent)`,
                  boxShadow: `0 0 8px ${item.accentColor}`,
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-16 h-px opacity-60"
                style={{
                  background: `linear-gradient(to right, ${item.accentColor}, transparent)`,
                  boxShadow: `0 0 8px ${item.accentColor}`,
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-px h-16 opacity-60"
                style={{
                  background: `linear-gradient(to top, ${item.accentColor}, transparent)`,
                  boxShadow: `0 0 8px ${item.accentColor}`,
                }}
              />

              {/* Central glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${item.accentColor}15 0%, transparent 70%)`,
                }}
              />

              {/* Label */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-0.5">{item.subtitle}</p>
              </div>

              {/* Expand icon */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/10"
                  style={{ boxShadow: `0 0 10px ${item.accentColor}40` }}
                >
                  <FiMaximize2 className="text-white text-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden"
              style={{ background: selected.gradient }}
              onClick={(e) => e.stopPropagation()}
            >
              <BackgroundPattern type={selected.pattern as PatternType} color={selected.accentColor} />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h2
                  className="text-3xl sm:text-5xl font-black text-white mb-4"
                  style={{ textShadow: `0 0 30px ${selected.accentColor}` }}
                >
                  {selected.title}
                </h2>
                <p className="text-slate-400 text-lg">{selected.subtitle}</p>
                <motion.a
                  href="#contact"
                  className="mt-8 px-8 py-3.5 rounded-2xl font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${selected.accentColor}, #050505)` }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(null)}
                >
                  הזמן עכשיו
                </motion.a>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
