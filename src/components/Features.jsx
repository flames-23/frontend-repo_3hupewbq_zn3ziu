import { Coffee, IceCream2, Leaf, Crown, Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Coffee, title: 'Signature Brews', desc: 'Single-origin coffees with berry notes and velvety crema.' },
  { icon: IceCream2, title: 'Artisanal Desserts', desc: 'Handcrafted patisserie, macarons, and cloud-soft cakes.' },
  { icon: Leaf, title: 'Natural Ingredients', desc: 'Real fruit purees, organic milk, and premium teas.' },
  { icon: Crown, title: 'Luxury Service', desc: 'Concierge-style hospitality with reservation lounge.' },
]

export default function Features() {
  return (
    <section id="story" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-rose-200/40 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-fuchsia-200/40 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl font-extrabold text-rose-900"
          >
            The Berries Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-3 text-rose-900/70 max-w-2xl mx-auto"
          >
            Pastel ambience, fine flavors, and a sprinkle of magic in every sip.
          </motion.p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-rose-300 to-fuchsia-300 text-white shadow">
                  <Icon size={18} />
                </span>
                <div className="font-semibold text-rose-900">{title}</div>
              </div>
              <p className="mt-3 text-sm text-rose-900/70">{desc}</p>
              <Sparkles className="absolute -right-1 -top-1 text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
