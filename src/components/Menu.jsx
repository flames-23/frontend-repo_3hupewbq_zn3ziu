import { motion } from 'framer-motion'

const menu = [
  { name: 'Berry Velvet Latte', price: 249, tag: 'Signature' },
  { name: 'Strawberry Boba Milk', price: 229, tag: 'Boba' },
  { name: 'Rose Lychee Fizz', price: 199, tag: 'Mocktail' },
  { name: 'Blueberry Basque Cheesecake', price: 279, tag: 'Dessert' },
  { name: 'Raspberry Macarons (6)', price: 199, tag: 'Patisserie' },
  { name: 'Lavender Cold Brew', price: 219, tag: 'Cold' },
]

export default function Menu() {
  return (
    <section id="menu" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-900">Our Menu Highlights</h2>
          <p className="mt-3 text-rose-900/70">Curated sips and bites inspired by seasonal berries.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-sm inline-flex items-center rounded-full border border-rose-200/60 bg-white/60 px-2 py-0.5 text-rose-700">{item.tag}</div>
              <div className="mt-2 font-semibold text-rose-900">{item.name}</div>
              <div className="mt-1 text-rose-900/70">₹ {item.price}</div>
              <button className="mt-3 inline-flex items-center rounded-full px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow hover:scale-[1.02] transition">Add to wish</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
