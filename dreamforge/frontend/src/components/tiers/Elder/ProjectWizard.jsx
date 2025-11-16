import { useState } from 'react'
import Card from '../../shared/Card'
import Button from '../../shared/Button'
import Input from '../../shared/Input'
import StepProgress from './StepProgress'
import { useProfile } from '../../../hooks/useProfile'

const WIZARD_STEPS = [
  {
    id: 1,
    title: 'Share Your Idea',
    question: 'What would you like to create?',
    placeholder: 'For example: "A family photo album" or "A recipe collection"',
    field: 'idea'
  },
  {
    id: 2,
    title: 'Choose a Design',
    question: 'What style do you prefer?',
    options: [
      { value: 'classic', label: 'Classic and Traditional' },
      { value: 'modern', label: 'Modern and Clean' },
      { value: 'warm', label: 'Warm and Cozy' }
    ],
    field: 'design'
  },
  {
    id: 3,
    title: 'Add Content',
    question: 'What would you like to include?',
    placeholder: 'Describe the content you want to add...',
    field: 'content'
  },
  {
    id: 4,
    title: 'Preview',
    question: 'Review your project',
    field: 'preview'
  },
  {
    id: 5,
    title: 'Publish',
    question: 'Ready to publish?',
    field: 'publish'
  }
]

export default function ProjectWizard({ onComplete, onSave }) {
  const { ageRange } = useProfile()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    idea: '',
    design: '',
    content: '',
    preview: '',
    publish: false
  })

  const currentStepData = WIZARD_STEPS.find(step => step.id === currentStep)

  const handleNext = () => {
    if (currentStep < WIZARD_STEPS.length) {
      const nextStep = currentStep + 1
      setCurrentStep(nextStep)
      if (onSave) {
        onSave({ ...formData, currentStep: nextStep })
      }
    } else {
      if (onComplete) {
        onComplete(formData)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (onSave) {
      onSave({ ...formData, [field]: value })
    }
  }

  const canProceed = () => {
    if (currentStep === 1) return formData.idea.trim().length > 0
    if (currentStep === 2) return formData.design.length > 0
    if (currentStep === 3) return formData.content.trim().length > 0
    return true
  }

  return (
    <div className="max-w-3xl mx-auto">
      <StepProgress 
        currentStep={currentStep} 
        onStepClick={(stepId) => {
          if (stepId <= currentStep) {
            setCurrentStep(stepId)
          }
        }}
      />

      <Card ageRange={ageRange} className="mb-8">
        <h2 className="text-3xl font-heading font-bold text-navy mb-6">
          {currentStepData.title}
        </h2>

        <div className="space-y-6">
          <p className="text-2xl text-navy/80">
            {currentStepData.question}
          </p>

          {currentStep === 1 && (
            <Input
              label=""
              value={formData.idea}
              onChange={(e) => handleInputChange('idea', e.target.value)}
              placeholder={currentStepData.placeholder}
              ageRange={ageRange}
              className="mt-4"
            />
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              {currentStepData.options.map(option => (
                <button
                  key={option.value}
                  onClick={() => handleInputChange('design', option.value)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    formData.design === option.value
                      ? 'border-primary bg-primary/10'
                      : 'border-warmGray hover:border-primary/50'
                  } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                  aria-pressed={formData.design === option.value}
                >
                  <p className="text-xl font-semibold text-navy">
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <Input
              label=""
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              placeholder={currentStepData.placeholder}
              ageRange={ageRange}
              className="mt-4"
            />
          )}

          {currentStep === 4 && (
            <div className="bg-cream rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-navy">Your Project Summary</h3>
              <div className="space-y-3 text-xl">
                <p><strong>Idea:</strong> {formData.idea}</p>
                <p><strong>Design:</strong> {currentStepData.options?.find(o => o.value === formData.design)?.label || formData.design}</p>
                <p><strong>Content:</strong> {formData.content}</p>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="text-center space-y-6">
              <p className="text-2xl text-navy/80">
                Your project is ready! Click the button below to publish it.
              </p>
              <div className="bg-accent/20 rounded-xl p-8">
                <p className="text-xl text-navy">
                  🎉 Congratulations! You've created something amazing!
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8 gap-4">
          <Button
            variant="outline"
            size="xl"
            tier={TIERS.ELDER}
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            variant="primary"
            size="xl"
            tier={TIERS.ELDER}
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex-1"
          >
            {currentStep === WIZARD_STEPS.length ? 'Publish' : 'Next'}
          </Button>
        </div>
      </Card>
    </div>
  )
}

