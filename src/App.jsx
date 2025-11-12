import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 text-rose-950">
      <Navbar />

      <main className="relative">
        {/* floating decorative bubbles */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] h-6 w-6 rounded-full bg-rose-300/50 blur-[1px] animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute left-[70%] top-[30%] h-8 w-8 rounded-full bg-fuchsia-300/50 blur-[1px] animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute left-[40%] top-[70%] h-5 w-5 rounded-full bg-pink-300/50 blur-[1px] animate-[float_12s_ease-in-out_infinite]" />
        </div>

        <Hero />
        <Features />
        <Menu />
        <Gallery />
        <Reservation />
      </main>

      <Footer />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-16px) }
          100% { transform: translateY(0px) }
        }
      `}</style>
    </div>
  )
}

export default App
