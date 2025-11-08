import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Highlights from './components/Highlights'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Highlights />
        <footer className="border-t border-orange-100 bg-orange-50/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mabu — Mabuhay, Pilipinas!</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-orange-700">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-orange-700">Terms</a>
              <a href="#partners" className="text-gray-600 hover:text-orange-700">Become a partner</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
