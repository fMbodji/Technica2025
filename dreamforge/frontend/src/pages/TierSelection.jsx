import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useTier } from '../hooks/useTier'
import Layout from '../components/shared/Layout'
import InterestQuiz from '../components/tiers/MiddleSchool/InterestQuiz'
import { TIERS, STORAGE_KEYS } from '../utils/constants'

export default function TierSelection() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { selectTier, tier } = useTier()
  const [selectedTier, setSelectedTier] = useState(null)

  useEffect(() => {
    const tierParam = searchParams.get('tier')
    if (tierParam && Object.values(TIERS).includes(tierParam)) {
      setSelectedTier(tierParam)
      selectTier(tierParam)
    } else {
      // Redirect to landing if no tier specified
      navigate('/')
    }
  }, [searchParams, navigate, selectTier])

  const handleInterestsComplete = (interests) => {
    // Save interests to localStorage
    localStorage.setItem(STORAGE_KEYS.INTERESTS, JSON.stringify(interests))
    // Navigate to project builder
    navigate('/project-builder')
  }

  // For elder tier, skip interest quiz and go straight to builder
  useEffect(() => {
    if (selectedTier === TIERS.ELDER) {
      // Small delay to show the tier selection page briefly
      const timer = setTimeout(() => {
        navigate('/project-builder')
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [selectedTier, navigate])

  if (!selectedTier) {
    return (
      <Layout tier={selectedTier}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-xl">Loading...</p>
        </div>
      </Layout>
    )
  }

  if (selectedTier === TIERS.ELDER) {
    return (
      <Layout tier={selectedTier}>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-4xl font-heading font-bold text-navy mb-6">
            Welcome to DreamForge
          </h1>
          <p className="text-2xl text-navy/80 mb-8">
            We're setting things up for you...
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout tier={selectedTier}>
      <div className="max-w-2xl mx-auto">
        <InterestQuiz onComplete={handleInterestsComplete} />
      </div>
    </Layout>
  )
}

