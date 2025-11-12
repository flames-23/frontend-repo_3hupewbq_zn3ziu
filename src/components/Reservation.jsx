import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Reservation(){
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', guests: 2 })

  function handleChange(e){
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="visit" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-900">Reserve your pastel moment</h2>
          <p className="mt-3 text-rose-900/70">We’re in the heart of Durg. Book a table and we’ll have your favorite ready.</p>
          <div className="mt-6 text-rose-900/80">
            <div>Address: Civil Lines, Durg, Chhattisgarh</div>
            <div>Hours: 10:00 AM – 10:00 PM</div>
            <div>Phone: +91 90000 00000</div>
          </div>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-rose-900/70">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-rose-200/60 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
            <div>
              <label className="text-sm text-rose-900/70">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-rose-200/60 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
            <div>
              <label className="text-sm text-rose-900/70">Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-rose-200/60 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
            <div>
              <label className="text-sm text-rose-900/70">Guests</label>
              <input type="number" min="1" max="12" name="guests" value={form.guests} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-rose-200/60 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            </div>
          </div>

          <button className="mt-4 w-full inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow hover:scale-[1.01] transition">Reserve</button>

          {submitted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-center text-rose-800">
              Your reservation request has been noted. We will call you shortly.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
