'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiPhone, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi'

const WA_NUMBER = '97272338548'
const WA_MESSAGE = encodeURIComponent('שלום! אני מעוניין להזמין חוויית לייזר טאג ב-לייזר טאג פולג 🎯')

const infoCards = [
  {
    icon: FiPhone,
    title: 'טלפון',
    lines: ['072-338-5486', '072-330-5719 | *5082'],
    color: '#25D366',
    glow: 'rgba(37,211,102,0.25)',
  },
  {
    icon: FiMapPin,
    title: 'כתובת',
    lines: ['הבונים 4', 'אזור התעשייה פולג, נתניה'],
    color: '#06B6D4',
    glow: 'rgba(6,182,212,0.25)',
  },
  {
    icon: FiClock,
    title: 'שעות פעילות',
    lines: ["א'–ד': 09:00–24:00 | ה': 09:00–01:30", "ו': 09:00–18:00 | מוצ\"ש: אחרי שבת–01:00"],
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.25)',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = encodeURIComponent(
      `שלום! שמי ${form.name}.\nטלפון: ${form.phone}\n${form.message}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 mb-5">
            צור קשר
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            מוכנים{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              לקרב?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            צרו איתנו קשר ונתאים לכם את החוויה המושלמת. מענה תוך דקות בוואטסאפ.
          </p>
        </motion.div>

        {/* Large WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12"
        >
          <motion.a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-6 sm:p-7 rounded-2xl text-white font-black text-xl sm:text-2xl w-full wa-pulse"
            style={{
              background: 'linear-gradient(135deg, #075E54 0%, #128C7E 50%, #25D366 100%)',
              boxShadow: '0 0 40px rgba(37,211,102,0.35)',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 60px rgba(37,211,102,0.5)',
            }}
            whileTap={{ scale: 0.99 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>שלח הודעה בוואטסאפ – מענה מהיר!</span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <div className="space-y-4">
            {infoCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl card-hover"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${card.glow}`, border: `1px solid ${card.glow}` }}
                  >
                    <Icon style={{ color: card.color }} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                    {card.lines.map((line, j) => (
                      <p key={j} className="text-slate-400 text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )
            })}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="relative rounded-2xl overflow-hidden h-36"
              style={{ border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #0a0520, #050310)',
                  backgroundImage: `
                    linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div
                  className="w-4 h-4 rounded-full animate-pulse"
                  style={{
                    background: '#8B5CF6',
                    boxShadow: '0 0 15px rgba(139,92,246,0.8)',
                  }}
                />
                <span className="text-slate-400 text-sm font-medium">מתחם פולג, נתניה</span>
                <a
                  href="https://maps.google.com/?q=Poleg,+Netanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-400 hover:text-purple-300 transition-colors underline"
                >
                  פתח ב-Google Maps
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <h3 className="text-xl font-bold text-white mb-6">שלח פנייה מהירה</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl"
                  style={{ background: 'rgba(37,211,102,0.15)' }}
                >
                  ✅
                </div>
                <p className="text-green-400 font-bold text-lg">נשלח בהצלחה!</p>
                <p className="text-slate-400 text-sm mt-1">ניצור איתך קשר בקרוב</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    שם מלא
                  </label>
                  <div className="relative">
                    <FiUser className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="ישראל ישראלי"
                      className="w-full pr-10 pl-4 py-3 rounded-xl text-white placeholder-slate-600 text-sm outline-none focus:border-purple-500/60 transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    מספר טלפון
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="05X-XXX-XXXX"
                      type="tel"
                      className="w-full pr-10 pl-4 py-3 rounded-xl text-white placeholder-slate-600 text-sm outline-none focus:border-purple-500/60 transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    הודעה (אופציונלי)
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute right-3.5 top-3.5 text-slate-500 text-sm" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="מספר משתתפים, תאריך מועדף, סוג אירוע..."
                      className="w-full pr-10 pl-4 py-3 rounded-xl text-white placeholder-slate-600 text-sm outline-none resize-none focus:border-purple-500/60 transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED, #0891B2)',
                    boxShadow: '0 0 20px rgba(139,92,246,0.35)',
                  }}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend className="text-sm" />
                  שלח בוואטסאפ
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
