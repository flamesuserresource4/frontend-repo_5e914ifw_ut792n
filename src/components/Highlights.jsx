import { Shield, Heart, Recycle } from 'lucide-react'

const items = [
  {
    title: 'Community-first',
    description: 'Built for the Philippines, celebrating the spirit of "Mabuhay" and bayanihan.',
    icon: Heart,
  },
  {
    title: 'Planet-positive',
    description: 'Every pickup helps cut food waste and carbon footprint in your neighborhood.',
    icon: Recycle,
  },
  {
    title: 'Secure & simple',
    description: 'Safe reservations and contactless codes keep pickups fast and reliable.',
    icon: Shield,
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why people love Mabu</h2>
          <p className="mt-3 text-gray-600">Save more, waste less, and uplift local businesses — all in one app.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
