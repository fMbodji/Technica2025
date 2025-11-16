import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../hooks/useProfile'
import Layout from '../components/shared/Layout'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import { 
  EXPERTISE_LEVELS, 
  EXPERTISE_LABELS, 
  EXPERTISE_DESCRIPTIONS,
  AGE_RANGES,
  AGE_RANGE_LABELS,
  AGE_RANGE_DESCRIPTIONS
} from '../utils/constants'
import { Code, Rocket, Zap } from 'lucide-react'

export default function TierSelection() {
  const navigate = useNavigate()
  const { saveProfile } = useProfile()
  const [step, setStep] = useState(1) // 1 = expertise, 2 = age range
  const [selectedExpertise, setSelectedExpertise] = useState(null)
  const [selectedAgeRange, setSelectedAgeRange] = useState(null)

  const handleExpertiseSelect = (expertise) => {
    setSelectedExpertise(expertise)
    setStep(2)
  }

  const handleAgeRangeSelect = (ageRange) => {
    setSelectedAgeRange(ageRange)
  }

  const handleComplete = () => {
    if (selectedExpertise && selectedAgeRange) {
      saveProfile(selectedExpertise, selectedAgeRange)
      navigate('/project-builder')
    }
  }

  const handleBack = () => {
    if (step === 2) {
      setStep(1)
      setSelectedAgeRange(null)
    } else {
      navigate('/')
    }
  }

  // Step 1: Select Expertise Level
  if (step === 1) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
              What's your experience level? 🎯
            </h1>
            <p className="text-xl text-navy/70">
              Choose the option that best describes you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Beginner */}
            <Card
              interactive
              onClick={() => handleExpertiseSelect(EXPERTISE_LEVELS.BEGINNER)}
              className={`text-center transition-all border-4 ${
                selectedExpertise === EXPERTISE_LEVELS.BEGINNER
                  ? 'border-secondary scale-105'
                  : 'border-transparent hover:border-secondary/50'
              }`}
            >
              <div className="mb-6">
                <div className="bg-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Code size={40} className="text-secondary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  {EXPERTISE_LABELS[EXPERTISE_LEVELS.BEGINNER]}
                </h2>
                <p className="text-lg text-navy/70">
                  {EXPERTISE_DESCRIPTIONS[EXPERTISE_LEVELS.BEGINNER]}
                </p>
              </div>
            </Card>

            {/* Intermediate */}
            <Card
              interactive
              onClick={() => handleExpertiseSelect(EXPERTISE_LEVELS.INTERMEDIATE)}
              className={`text-center transition-all border-4 ${
                selectedExpertise === EXPERTISE_LEVELS.INTERMEDIATE
                  ? 'border-primary scale-105'
                  : 'border-transparent hover:border-primary/50'
              }`}
            >
              <div className="mb-6">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Rocket size={40} className="text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  {EXPERTISE_LABELS[EXPERTISE_LEVELS.INTERMEDIATE]}
                </h2>
                <p className="text-lg text-navy/70">
                  {EXPERTISE_DESCRIPTIONS[EXPERTISE_LEVELS.INTERMEDIATE]}
                </p>
              </div>
            </Card>

            {/* Advanced */}
            <Card
              interactive
              onClick={() => handleExpertiseSelect(EXPERTISE_LEVELS.ADVANCED)}
              className={`text-center transition-all border-4 ${
                selectedExpertise === EXPERTISE_LEVELS.ADVANCED
                  ? 'border-accent scale-105'
                  : 'border-transparent hover:border-accent/50'
              }`}
            >
              <div className="mb-6">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Zap size={40} className="text-accent" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  {EXPERTISE_LABELS[EXPERTISE_LEVELS.ADVANCED]}
                </h2>
                <p className="text-lg text-navy/70">
                  {EXPERTISE_DESCRIPTIONS[EXPERTISE_LEVELS.ADVANCED]}
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={handleBack}
            >
              Back
            </Button>
          </div>
        </div>
      </Layout>
    )
  }

  // Step 2: Select Age Range
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Selected: {EXPERTISE_LABELS[selectedExpertise]}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            What's your age range? 👤
          </h1>
          <p className="text-xl text-navy/70">
            This helps us personalize your experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Object.values(AGE_RANGES).map((ageRange) => (
            <Card
              key={ageRange}
              interactive
              onClick={() => handleAgeRangeSelect(ageRange)}
              className={`text-center transition-all border-4 ${
                selectedAgeRange === ageRange
                  ? 'border-primary scale-105 bg-primary/5'
                  : 'border-transparent hover:border-primary/50'
              }`}
            >
              <h3 className="font-heading text-xl font-bold text-navy mb-2">
                {AGE_RANGE_LABELS[ageRange]}
              </h3>
              <p className="text-sm text-navy/60">
                {AGE_RANGE_DESCRIPTIONS[ageRange]}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={handleComplete}
            disabled={!selectedAgeRange}
          >
            Start Creating! 🚀
          </Button>
        </div>
      </div>
    </Layout>
  )
}
