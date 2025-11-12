import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542444459-db63c7d9aa8b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-900">Gallery</h2>
          <p className="mt-3 text-rose-900/70">Snapshots from our pastel world</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <motion.div key={src} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <img src={src} alt="berries" className="rounded-2xl h-40 sm:h-56 w-full object-cover shadow-md hover:shadow-xl transition-shadow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
