import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'לייזר טאג פולג | חוויית הלייזר הטאג האולטימטיבית בנתניה',
  description:
    'לייזר טאג פולג - חוויית הלייזר טאג המרגשת ביותר בנתניה. זירות מרהיבות, ציוד מתקדם, מסיבות יום הולדת ואירועים קורפורטיביים. הזמינו עכשיו!',
  keywords: 'לייזר טאג, נתניה, פולג, לייזר, משחק לייזר, מסיבת יום הולדת, אירועי קבוצות',
  openGraph: {
    title: 'לייזר טאג פולג | חוויית הלייזר הטאג האולטימטיבית',
    description: 'זירות מרהיבות, ציוד מתקדם, ואדרנלין ללא גבולות. הזמינו עכשיו!',
    type: 'website',
    locale: 'he_IL',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-white antialiased font-heebo">
        {children}
      </body>
    </html>
  )
}
