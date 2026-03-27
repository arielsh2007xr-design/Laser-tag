import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Gallery />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
