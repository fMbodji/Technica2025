import { useEffect, useState } from 'react'
import { Trophy, X } from 'lucide-react'
import Card from '../../shared/Card'
import Button from '../../shared/Button'
import { TIERS } from '../../../utils/constants'

const ACHIEVEMENTS = {
  firstBlock: {
    id: 'firstBlock',
    title: 'First Block Placed! 🎮',
    description: 'You placed your first block! Awesome start!',
    emoji: '🎮'
  },
  fiveBlocks: {
    id: 'fiveBlocks',
    title: '5 Blocks Connected! 🌟',
    description: 'You\'re building something amazing!',
    emoji: '🌟'
  },
  preview: {
    id: 'preview',
    title: 'Preview Your Work! 🚀',
    description: 'You ran your code! Keep going!',
    emoji: '🚀'
  }
}

export default function AchievementBadge({ achievementId, onClose }) {
  const [show, setShow] = useState(false)
  const achievement = ACHIEVEMENTS[achievementId]

  useEffect(() => {
    if (achievementId) {
      setShow(true)
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setShow(false)
        if (onClose) onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [achievementId, onClose])

  if (!show || !achievement) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 animate-fadeIn">
      <Card
        tier={TIERS.MIDDLE_SCHOOL}
        className="max-w-md mx-4 animate-bounceIn border-4 border-accent"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">{achievement.emoji}</div>
          <Trophy size={48} className="text-accent mx-auto mb-4" aria-hidden="true" />
          <h3 className="font-heading text-2xl font-bold text-navy mb-2">
            {achievement.title}
          </h3>
          <p className="text-lg text-navy/70 mb-6">
            {achievement.description}
          </p>
          <Button
            variant="accent"
            size="md"
            tier={TIERS.MIDDLE_SCHOOL}
            onClick={() => {
              setShow(false)
              if (onClose) onClose()
            }}
          >
            Awesome! 🎉
          </Button>
        </div>
      </Card>
    </div>
  )
}

