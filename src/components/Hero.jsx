import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose-300/40 blur-3xl" />
        <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-8">
        <div className="relative z-10 py-8">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-white/60 px-3 py-1 text-xs text-rose-700 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            New • Seasonal Boba Creations
          </motion.span>
          <motion.h1
            className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight text-rose-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Berries — Luxury Cafe in Durg
          </motion.h1>
          <motion.p
            className="mt-4 text-rose-900/80 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A magical space of pastel dreams, artisanal desserts, and signature bubble teas.
            Float through flavors with cloud-soft ambience and playful 3D delights.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <a href="#menu" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow-lg shadow-rose-200/60 hover:shadow-rose-300/80 transition-all hover:scale-[1.02]">Explore Menu</a>
            <a href="#visit" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-rose-700 bg-white/70 backdrop-blur border border-white/60 hover:bg-white/90 transition-all">Reserve a Table</a>
          </motion.div>
        </div>

        <div className="relative h-[520px] sm:h-[620px] lg:h-[680px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/50 border border-white/40 bg-gradient-to-b from-rose-50/80 to-white/80">
            <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop"
            alt="macaron"
            className="pointer-events-none absolute -left-8 -bottom-8 w-28 sm:w-36 rotate-12 drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop"
            alt="strawberry"
            className="pointer-events-none absolute -right-6 -top-6 w-20 sm:w-24 -rotate-6 drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  )
}
