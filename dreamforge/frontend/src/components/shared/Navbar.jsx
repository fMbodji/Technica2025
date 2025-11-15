import { Link, useNavigate } from 'react-router-dom'
import { Home, HelpCircle, LogOut } from 'lucide-react'
import { useTier } from '../../hooks/useTier'
import { TIER_LABELS } from '../../utils/constants'
import Button from './Button'

export default function Navbar() {
  const { tier, clearTier } = useTier()
  const navigate = useNavigate()

  const handleLogout = () => {
    clearTier()
    navigate('/')
  }

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
            {tier && (
              <>
                <span 
                  className={`font-semibold text-primary ${tier === 'elder' ? 'text-lg' : 'text-base'}`}
                  aria-label={`Current tier: ${TIER_LABELS[tier]}`}
                >
                  {TIER_LABELS[tier]}
                </span>
                <Link
                  to="/help"
                  className="p-2 rounded-lg hover:bg-warmGray transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Get help"
                >
                  <HelpCircle 
                    size={tier === 'elder' ? 28 : 24} 
                    className="text-navy"
                    aria-hidden="true"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  tier={tier}
                  onClick={handleLogout}
                  aria-label="Change tier or logout"
                >
                  <LogOut size={tier === 'elder' ? 24 : 20} className="mr-2" aria-hidden="true" />
                  Change Tier
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

