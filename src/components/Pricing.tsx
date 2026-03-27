'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCheck, FiZap, FiStar, FiShield } from 'react-icons/fi'

const plans = [
  {
    name: 'בסיסי',
    nameEn: 'Basic',
    icon: FiZap,
    price: '45',
    priceNote: 'לשחקן',
    description: 'כניסה מושלמת לעולם הלייזר טאג',
    color: '#06B6D4',
    colorLight: 'rgba(6,182,212,0.15)',
    colorBorder: 'rgba(6,182,212,0.25)',
    featured: false,
    features: [
      'משחק אחד (20 דקות)',
      'ציוד לייזר מלא',
      'עד 10 שחקנים',
      'הדרכה מקצועית',
      'כניסה לזירה',
    ],
    notIncluded: ['מאמן אישי', 'חדר VIP', 'קייטרינג'],
  },
  {
    name: 'פרמיום',
    nameEn: 'Premium',
    icon: FiStar,
    price: '65',
    priceNote: 'לשחקן',
    description: 'החבילה הפופולרית ביותר – הכי שווה!',
    color: '#8B5CF6',
    colorLight: 'rgba(139,92,246,0.15)',
    colorBorder: 'rgba(139,92,246,0.4)',
    featured: true,
    features: [
      '3 משחקים (60 דקות)',
      'ציוד לייזר מתקדם',
      'עד 20 שחקנים',
      'הדרכה + ליווי',
      'מאמן אישי',
      'כניסה לכל הזירות',
      'צילומי Action',
    ],
    notIncluded: ['חדר VIP', 'קייטרינג מלא'],
  },
  {
    name: 'VIP',
    nameEn: 'VIP',
    icon: FiShield,
    price: '95',
    priceNote: 'לשחקן',
    description: 'החבילה המלכותית – חוויה מושלמת',
    color: '#A78BFA',
    colorLight: 'rgba(167,139,250,0.15)',
    colorBorder: 'rgba(167,139,250,0.3)',
    featured: false,
    features: [
      '5 משחקים + בונוסים',
      'ציוד VIP מיוחד',
      'עד 30 שחקנים',
      'מאמן ייעודי',
      'חדר VIP פרטי',
      'קייטרינג מלא',
      'צילום וידאו מקצועי',
      'מדליות לזוכים',
    ],
    notIncluded: [],
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Glow accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-purple-500/30 text-purple-400 bg-purple-500/5 mb-5">
            מחירים
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            בחר את{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              חבילתך
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            שלוש חבילות המותאמות לכל גודל קבוצה ותקציב. מחירים כוללים ציוד מלא.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.nameEn}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                className={`relative rounded-3xl p-7 flex flex-col ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
                style={{
                  background: plan.featured
                    ? `linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(6,182,212,0.08) 100%)`
                    : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${plan.colorBorder}`,
                  backdropFilter: 'blur(20px)',
                  boxShadow: plan.featured
                    ? `0 0 40px rgba(139,92,246,0.2), 0 0 80px rgba(6,182,212,0.08)`
                    : `0 0 20px ${plan.colorLight}`,
                }}
              >
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span
                      className="px-5 py-1.5 rounded-full text-xs font-bold text-white tracking-wider"
                      style={{
                        background: 'linear-gradient(135deg, #7C3AED, #0891B2)',
                        boxShadow: '0 0 20px rgba(139,92,246,0.5)',
                      }}
                    >
                      ⭐ הכי פופולרי
                    </span>
                  </div>
                )}

                {/* Plan icon + name */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: plan.colorLight,
                      border: `1px solid ${plan.colorBorder}`,
                      boxShadow: `0 0 15px ${plan.colorLight}`,
                    }}
                  >
                    <Icon style={{ color: plan.color }} className="text-xl" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-none">{plan.name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{plan.nameEn}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-5xl font-black"
                      style={{ color: plan.color, textShadow: `0 0 20px ${plan.colorLight}` }}
                    >
                      ₪{plan.price}
                    </span>
                    <span className="text-slate-400 text-sm">{plan.priceNote}</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1.5">{plan.description}</p>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full mb-6"
                  style={{ background: `linear-gradient(to right, transparent, ${plan.colorBorder}, transparent)` }}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: plan.colorLight }}
                      >
                        <FiCheck style={{ color: plan.color }} className="text-xs" />
                      </span>
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm opacity-30">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                        <span className="text-slate-600 text-xs">–</span>
                      </span>
                      <span className="text-slate-500 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className="block text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-300"
                  style={
                    plan.featured
                      ? {
                          background: 'linear-gradient(135deg, #7C3AED, #0891B2)',
                          color: '#fff',
                          boxShadow: '0 0 25px rgba(139,92,246,0.4)',
                        }
                      : {
                          background: plan.colorLight,
                          color: plan.color,
                          border: `1px solid ${plan.colorBorder}`,
                        }
                  }
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  בחר חבילה
                </motion.a>
              </motion.div>
            )
          })}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          * המחירים כוללים ציוד מלא, הדרכה והשתתפות. ניתן לשלב חבילות לקבוצות גדולות.{' '}
          <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors">
            צור קשר לקבלת הצעת מחיר מיוחדת
          </a>
        </motion.p>
      </div>
    </section>
  )
}
