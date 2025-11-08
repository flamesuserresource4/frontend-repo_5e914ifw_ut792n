import { Store, Gift, Leaf } from 'lucide-react'

const steps = [
  {
    title: 'Discover nearby Surprises',
    description: 'Browse surplus meals and mystery bags from restaurants and bakeries around you.',
    icon: Store,
  },
  {
    title: 'Reserve and Save',
    description: 'Grab limited-time offers at friendly prices and secure your pickup window.',
    icon: Gift,
  },
  {
    title: 'Pick up with a Smile',
    description: 'Show your code in-store and enjoy delicious food while reducing waste.',
    icon: Leaf,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-orange-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">Three simple steps to start saving food and supporting local spots.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
