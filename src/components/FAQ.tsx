'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    q: 'מה הגיל המינימלי לשחק בלייזר טאג?',
    a: 'אנחנו מקבלים שחקנים מגיל 6 ומעלה. לילדים מתחת לגיל 10 מומלץ להגיע עם מבוגר מלווה. הציוד שלנו מותאם לכל הגילאים ובטוח לחלוטין.',
  },
  {
    q: 'כמה שחקנים יכולים לשחק בו-זמנית?',
    a: 'הזירות שלנו מכילות עד 30 שחקנים בו-זמנית. ניתן לחלק לקבוצות מתחרות, לשחק עם/נגד, ולהתאים את מבנה המשחק לגודל הקבוצה.',
  },
  {
    q: 'האם ניתן לארגן מסיבת יום הולדת?',
    a: 'בהחלט! אנחנו מתמחים במסיבות יום הולדת לכל הגילאים. ניתן להזמין חדר מסיבות, קייטרינג, עוגה, ועיצוב מיוחד. נציג שלנו ישמח לתכנן את האירוע המושלם.',
  },
  {
    q: 'כמה זמן נמשך כל משחק?',
    a: 'כל שמשה (mission) נמשכת כ-20 דקות. בחבילות פרמיום ו-VIP תוכלו לשחק מספר שמשות עם הפסקות בין לבין.',
  },
  {
    q: 'האם הציוד בטוח ולא מכאיב?',
    a: 'לחלוטין! הלייזר שלנו הוא אינפרא-אדום הרמוני לחלוטין – לא קרן אור אמיתית. האקדחים קלים ואורגונומיים, המשוריינים נוחים ללבישה. אין שום כאב פיזי – רק עיצבון כשמוחקים אותך!',
  },
  {
    q: 'האם נדרשת הזמנה מראש?',
    a: 'מומלץ מאוד להזמין מראש, במיוחד לסופי שבוע ולאירועים. ניתן להגיע ספונטנית בימי חול, אך אנחנו ממליצים לאשר מקום מראש דרך ווטסאפ.',
  },
  {
    q: 'מה שעות הפעילות?',
    a: 'ראשון–חמישי: 14:00–22:00 | שישי: 10:00–15:00 | שבת (מוצ"ש): 18:00–23:00. בחופשות ניתן לתאם שעות מיוחדות.',
  },
  {
    q: 'יש חניה באזור?',
    a: 'כן! ישנה חניה חינמית ומרווחת לכל אורחינו ממש ליד הזירה. אנחנו ממוקמים בלב מתחם פולג בנתניה עם גישה נוחה.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-purple-500/30 text-purple-400 bg-purple-500/5 mb-5">
            שאלות ותשובות
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            יש לכם{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              שאלות?
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            מצאנו את התשובות לשאלות שכולם שואלים.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
            >
              <div
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: openIndex === i ? 'rgba(139,92,246,0.06)' : 'rgba(255,255,255,0.02)',
                  border: openIndex === i ? '1px solid rgba(139,92,246,0.25)' : '1px solid rgba(255,255,255,0.05)',
                  boxShadow: openIndex === i ? '0 0 20px rgba(139,92,246,0.1)' : 'none',
                }}
              >
                {/* Question button */}
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-right"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span
                    className="font-semibold text-base sm:text-lg leading-snug"
                    style={{ color: openIndex === i ? '#A78BFA' : '#e2e8f0' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: openIndex === i ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.04)',
                      border: openIndex === i ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {openIndex === i ? (
                        <motion.span
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiMinus className="text-purple-400 text-sm" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiPlus className="text-slate-400 text-sm" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="h-px w-full bg-white/5 mb-4" />
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 mb-4">עדיין יש לכם שאלה?</p>
          <motion.a
            href="https://wa.me/972521234567?text=שלום!%20יש%20לי%20שאלה%20לגבי%20לייזר%20טאג%20פולג"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, #128C7E, #25D366)',
              boxShadow: '0 0 25px rgba(37,211,102,0.3)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(37,211,102,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            שלחו לנו הודעה בוואטסאפ
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
