import Link from 'next/link'
import HeroAlt from './components/HeroAlt'
import FooterBrand from './components/FooterBrand'
import HomeContent from './components/HomeContent'

export const metadata = {
  title: 'Sifat Bhatia — Design Engineer | Strategy & Engineering for Visionary Brands',
}

export default function Home() {
  return (
    <main className="bg-[#121212] antialiased overflow-x-hidden min-h-screen selection:bg-[#C41E3D] selection:text-white font-sans">
      {/* ─── Hero Section (Untouched) ─── */}
      <div className="bg-white">
        <HeroAlt />
      </div>

      {/* ─── NEW HOME CONTENT (keeps hero & footer untouched) ─── */}
      <HomeContent />

      {/* ─── BRANDING SURFACE (Untouched) ─── */}
      <section className="relative">
        <div className="relative z-30 rounded-t-[5rem] bg-[#fdf5ef] shadow-[-30px_0_120px_rgba(0,0,0,0.6)]">
           <FooterBrand />
        </div>
      </section>
    </main>
  )
}
