import { useState } from 'react'
import { Gamepad2, Palette, Heart, Trophy } from 'lucide-react'
import Card from '../../shared/Card'
import Button from '../../shared/Button'
import { INTERESTS, INTEREST_LABELS } from '../../../utils/constants'

const INTEREST_ICONS = {
  [INTERESTS.GAMING]: Gamepad2,
  [INTERESTS.ART]: Palette,
  [INTERESTS.ANIMALS]: Heart,
  [INTERESTS.SPORTS]: Trophy
}

export default function InterestQuiz({ onComplete }) {
  const [selectedInterests, setSelectedInterests] = useState([])

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const handleSubmit = () => {
    if (selectedInterests.length > 0) {
      onComplete(selectedInterests)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="font-heading text-4xl font-bold text-navy mb-4">
          What do you love? 🎨
        </h1>
        <p className="text-xl text-navy/70">
          Pick your interests so we can make something awesome just for you!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {Object.values(INTERESTS).map(interest => {
          const Icon = INTEREST_ICONS[interest]
          const isSelected = selectedInterests.includes(interest)
          
          return (
            <Card
              key={interest}
              interactive
              onClick={() => toggleInterest(interest)}
              className={`text-center cursor-pointer transition-all ${
                isSelected 
                  ? 'border-4 border-secondary bg-secondary/10 scale-105' 
                  : 'border-4 border-transparent hover:border-secondary/50'
              }`}
              aria-label={`Select ${INTEREST_LABELS[interest]}`}
              aria-pressed={isSelected}
            >
              <Icon 
                size={48} 
                className={`mx-auto mb-3 ${isSelected ? 'text-secondary' : 'text-navy/50'}`}
                aria-hidden="true"
              />
              <p className={`font-semibold text-lg ${isSelected ? 'text-secondary' : 'text-navy'}`}>
                {INTEREST_LABELS[interest]}
              </p>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <Button
          variant="secondary"
          size="lg"
          tier={TIERS.MIDDLE_SCHOOL}
          onClick={handleSubmit}
          disabled={selectedInterests.length === 0}
          className="w-full md:w-auto px-12"
        >
          Let's Go! 🚀
        </Button>
      </div>
    </div>
  )
}

