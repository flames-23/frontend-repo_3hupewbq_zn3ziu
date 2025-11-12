import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#menu', label: 'Menu' },
    { href: '#story', label: 'Our Story' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#visit', label: 'Visit' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur border border-white/20 bg-white/40 shadow-lg shadow-rose-200/40">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <span className="relative inline-flex items-center justify-center">
                <motion.span
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-300 via-pink-300 to-fuchsia-300 text-white shadow-lg shadow-rose-200"
                >
                  <Sparkles size={18} />
                </motion.span>
              </span>
              <div className="leading-tight">
                <div className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">Berries</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-rose-600/70">Luxury Cafe • Durg</div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-rose-900/80 hover:text-rose-900 transition-colors font-medium">
                  {l.label}
                </a>
              ))}
              <a href="#visit" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow-lg shadow-rose-200/60 hover:shadow-rose-300/80 transition-all hover:scale-[1.02]">Reserve</a>
            </div>

            <button onClick={() => setOpen((p) => !p)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 border border-white/30 text-rose-700">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 pb-4 flex flex-col gap-3">
                  {links.map((l) => (
                    <a key={l.href} href={l.href} className="rounded-xl bg-white/70 px-3 py-3 text-rose-900/90 shadow hover:shadow-md transition-all">
                      {l.label}
                    </a>
                  ))}
                  <a href="#visit" className="rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-500 px-4 py-3 text-white font-semibold text-center shadow-md">Reserve a Table</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
