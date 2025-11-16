import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import {
  EXPERTISE_LEVELS,
  EXPERTISE_LABELS,
  EXPERTISE_DESCRIPTIONS,
  EXPERTISE_ICONS,
  AGE_RANGES,
  AGE_RANGE_LABELS,
  AGE_RANGE_DESCRIPTIONS,
  AGE_RANGE_ICONS,
  STORAGE_KEYS
} from '../utils/constants'

/**
 * TierSelection Component
 * Two-step selection process:
 * 1. Choose expertise level (Beginner/Intermediate/Advanced)
 * 2. Choose age range (6-13, 14-17, 18-24, 25-54, 55+)
 */
export default function TierSelection() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1 = expertise, 2 = age
  const [selectedExpertise, setSelectedExpertise] = useState(null)
  const [selectedAge, setSelectedAge] = useState(null)

  // Handle expertise selection
  const handleExpertiseSelect = (expertise) => {
    setSelectedExpertise(expertise)
    setStep(2) // Move to age selection
  }

  // Handle age selection and complete onboarding
  const handleAgeSelect = (ageRange) => {
    setSelectedAge(ageRange)

    // Save to localStorage
    localStorage.setItem(STORAGE_KEYS.EXPERTISE, selectedExpertise)
    localStorage.setItem(STORAGE_KEYS.AGE_RANGE, ageRange)

    // Create user profile
    const userProfile = {
      expertise: selectedExpertise,
      ageRange: ageRange,
      createdAt: new Date().toISOString()
    }
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(userProfile))

    // Navigate to project builder
    navigate('/project-builder')
  }

  // Go back to expertise selection
  const handleBack = () => {
    setStep(1)
    setSelectedAge(null)
  }

  // Get color classes based on expertise level
  const getExpertiseColorClasses = (expertise) => {
    const colorMap = {
      [EXPERTISE_LEVELS.BEGINNER]: {
        bg: 'bg-beginner-secondary',
        border: 'border-beginner-primary',
        hover: 'hover:border-beginner-primary hover:shadow-glow-orange',
        text: 'text-dark-gray'
      },
      [EXPERTISE_LEVELS.INTERMEDIATE]: {
        bg: 'bg-intermediate-bg',
        border: 'border-intermediate-primary',
        hover: 'hover:border-intermediate-secondary hover:shadow-glow-purple',
        text: 'text-dark-gray'
      },
      [EXPERTISE_LEVELS.ADVANCED]: {
        bg: 'bg-advanced-primary',
        border: 'border-advanced-secondary',
        hover: 'hover:border-advanced-accent hover:shadow-glow-orange',
        text: 'text-white'
      }
    }
    return colorMap[expertise]
  }

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">

          {/* Progress indicator */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
              step === 1
                ? 'bg-star-orange text-white'
                : 'bg-light-purple text-dark-purple'
            }`}>
              1
            </div>
            <div className="w-16 h-1 bg-light-gray">
              <div className={`h-full bg-star-orange transition-all duration-500 ${
                step === 2 ? 'w-full' : 'w-0'
              }`} />
            </div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
              step === 2
                ? 'bg-star-orange text-white'
                : 'bg-light-gray text-dark-gray'
            }`}>
              2
            </div>
          </div>

          {/* STEP 1: Expertise Selection */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  What's your coding experience?
                </h1>
                <p className="text-xl text-dark-gray">
                  Choose the level that best describes you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.values(EXPERTISE_LEVELS).map((expertise) => {
                  const colors = getExpertiseColorClasses(expertise)
                  return (
                    <button
                      key={expertise}
                      onClick={() => handleExpertiseSelect(expertise)}
                      className={`
                        ${colors.bg} ${colors.border} ${colors.hover} ${colors.text}
                        border-4 rounded-3xl p-8
                        transition-all duration-300 transform hover:scale-105
                        flex flex-col items-center text-center gap-4
                        shadow-medium hover:shadow-strong
                      `}
                    >
                      <div className="text-6xl">
                        {EXPERTISE_ICONS[expertise]}
                      </div>
                      <h2 className="text-2xl font-heading font-bold">
                        {EXPERTISE_LABELS[expertise]}
                      </h2>
                      <p className={`text-base ${
                        expertise === EXPERTISE_LEVELS.ADVANCED ? 'text-light-gray' : 'text-dark-gray'
                      }`}>
                        {EXPERTISE_DESCRIPTIONS[expertise]}
                      </p>
                    </button>
                  )
                })}
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-dark-gray/70">
                  Don't worry - you can always change this later!
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: Age Range Selection */}
          {step === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  What's your age range?
                </h1>
                <p className="text-xl text-dark-gray">
                  This helps us personalize your experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(AGE_RANGES).map((ageRange) => {
                  // Use expertise-based colors for consistency
                  const colors = getExpertiseColorClasses(selectedExpertise)

                  return (
                    <button
                      key={ageRange}
                      onClick={() => handleAgeSelect(ageRange)}
                      className={`
                        ${colors.bg} ${colors.border} ${colors.hover} ${colors.text}
                        border-3 rounded-2xl p-6
                        transition-all duration-300 transform hover:scale-105
                        flex flex-col items-center text-center gap-3
                        shadow-soft hover:shadow-medium
                      `}
                    >
                      <div className="text-5xl">
                        {AGE_RANGE_ICONS[ageRange]}
                      </div>
                      <h2 className="text-xl font-heading font-bold">
                        {AGE_RANGE_LABELS[ageRange]}
                      </h2>
                      <p className={`text-sm ${
                        selectedExpertise === EXPERTISE_LEVELS.ADVANCED
                          ? 'text-light-gray'
                          : 'text-dark-gray'
                      }`}>
                        {AGE_RANGE_DESCRIPTIONS[ageRange]}
                      </p>
                    </button>
                  )
                })}
              </div>

              {/* Back button */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleBack}
                  className="
                    px-8 py-3 rounded-xl
                    bg-light-gray text-dark-gray
                    hover:bg-dark-gray hover:text-white
                    transition-all duration-300
                    font-semibold
                  "
                >
                  ← Back to Expertise Level
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
