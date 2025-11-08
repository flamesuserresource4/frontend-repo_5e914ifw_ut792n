import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'How it works', href: '#how' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Partners', href: '#partners' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-orange-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-orange-500 text-white grid place-items-center font-black">M</span>
            <span className="font-extrabold text-xl tracking-tight text-orange-600">Mabu</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Get the app
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-orange-100 bg-white">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-orange-600 px-3 py-2 text-base font-semibold text-white hover:bg-orange-700"
            >
              Get the app
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
