import Navbar from './Navbar'

export default function Layout({ children, tier }) {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <main className={`flex-1 ${tier === 'elder' ? 'p-8' : 'p-4 sm:p-6'}`}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

