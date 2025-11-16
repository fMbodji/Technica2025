import { Link, useNavigate } from 'react-router-dom'
import { Home, HelpCircle, LogOut } from 'lucide-react'
import { useProfile } from '../../hooks/useProfile'
import { EXPERTISE_LABELS, AGE_RANGE_LABELS } from '../../utils/constants'
import Button from './Button'

export default function Navbar() {
  const { expertise, ageRange, clearProfile } = useProfile()
  const navigate = useNavigate()

  const handleLogout = () => {
    clearProfile()
    navigate('/')
  }

  const displayText = expertise && ageRange 
    ? `${EXPERTISE_LABELS[expertise]} • ${AGE_RANGE_LABELS[ageRange]}`
    : null

  return (
    <nav className="bg-white shadow-md border-b-2 border-warmGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-heading text-xl font-bold text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="DreamForge Home"
          >
            <span>✨ DreamForge</span>
          </Link>

          <div className="flex items-center gap-4">
            {displayText && (
              <>
                <span 
                  className={`font-semibold text-primary ${ageRange === '55+' ? 'text-lg' : 'text-base'}`}
                  aria-label={`Current profile: ${displayText}`}
                >
                  {displayText}
                </span>
                <Link
                  to="/help"
                  className="p-2 rounded-lg hover:bg-warmGray transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Get help"
                >
                  <HelpCircle 
                    size={ageRange === '55+' ? 28 : 24} 
                    className="text-navy"
                    aria-hidden="true"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  ageRange={ageRange}
                  onClick={handleLogout}
                  aria-label="Change profile or logout"
                >
                  <LogOut size={ageRange === '55+' ? 24 : 20} className="mr-2" aria-hidden="true" />
                  Change Profile
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
