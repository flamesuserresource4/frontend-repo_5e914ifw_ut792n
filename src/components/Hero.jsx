import { Rocket, Store, Leaf } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-orange-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 py-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              <Leaf className="h-3.5 w-3.5" /> Mabuhay savings, less food waste
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Save surplus meals. Support local. Feel the Mabuhay spirit.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Mabu connects you with nearby restaurants and bakeries offering unsold food at
              friendly prices — good for your wallet and the planet.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <Rocket className="h-5 w-5" /> Get Started
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-orange-700 ring-1 ring-orange-300 font-semibold hover:bg-orange-50"
              >
                <Store className="h-5 w-5" /> How it works
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: 'Partner spots', value: '250+' },
                { label: 'Meals saved', value: '45k+' },
                { label: 'Avg. savings', value: '60%' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-white shadow-sm ring-1 ring-orange-100 p-4 text-center">
                  <dt className="text-xs text-gray-500">{stat.label}</dt>
                  <dd className="mt-1 text-xl font-bold text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative h-[420px] sm:h-[520px]">
            <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
