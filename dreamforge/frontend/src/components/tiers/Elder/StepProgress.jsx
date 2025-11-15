import { Check } from 'lucide-react'
import { TIERS } from '../../../utils/constants'

const STEPS = [
  { id: 1, label: 'Share your idea' },
  { id: 2, label: 'Choose a design' },
  { id: 3, label: 'Add content' },
  { id: 4, label: 'Preview' },
  { id: 5, label: 'Publish' }
]

export default function StepProgress({ currentStep, onStepClick }) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {STEPS.map((step, index) => {
          const isCompleted = step.id < currentStep
          const isCurrent = step.id === currentStep
          const isClickable = onStepClick && (isCompleted || isCurrent)

          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center flex-1">
                <button
                  onClick={isClickable ? () => onStepClick(step.id) : undefined}
                  disabled={!isClickable}
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    font-bold text-xl transition-all
                    ${isCompleted 
                      ? 'bg-primary text-white' 
                      : isCurrent 
                        ? 'bg-secondary text-white ring-4 ring-secondary/30' 
                        : 'bg-warmGray text-navy/50'
                    }
                    ${isClickable ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  `}
                  aria-label={`Step ${step.id}: ${step.label}${isCompleted ? ' (completed)' : isCurrent ? ' (current)' : ''}`}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {isCompleted ? (
                    <Check size={24} aria-hidden="true" />
                  ) : (
                    step.id
                  )}
                </button>
                <p className={`mt-3 text-center font-semibold max-w-[100px] ${
                  isCurrent ? 'text-navy text-lg' : 'text-navy/60 text-base'
                }`}>
                  {step.label}
                </p>
              </div>

              {/* Connector Line */}
              {index < STEPS.length - 1 && (
                <div className={`
                  flex-1 h-1 mx-2
                  ${isCompleted ? 'bg-primary' : 'bg-warmGray'}
                `} aria-hidden="true" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

