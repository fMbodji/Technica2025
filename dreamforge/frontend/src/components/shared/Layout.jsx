import Navbar from './Navbar'

export default function Layout({ children, ageRange }) {
  // Adjust padding based on age range
  const padding = ageRange === '55+' 
    ? 'p-8' 
    : ageRange === '6-13'
    ? 'p-6'
    : 'p-4 sm:p-6'
  
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <main className={`flex-1 ${padding}`}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
