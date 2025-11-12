export default function Footer(){
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/60 backdrop-blur border border-white/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-rose-900/70 text-sm">© {new Date().getFullYear()} Berries Cafe, Durg. All rights reserved.</div>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-rose-900/80 hover:text-rose-900">Instagram</a>
            <span className="opacity-30">•</span>
            <a href="#" className="text-rose-900/80 hover:text-rose-900">Facebook</a>
            <span className="opacity-30">•</span>
            <a href="#" className="text-rose-900/80 hover:text-rose-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
