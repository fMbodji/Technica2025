import { Gamepad2, Repeat, Code, Volume2 } from 'lucide-react'
import Card from '../../shared/Card'
import { TIERS } from '../../../utils/constants'
import { BLOCK_DEFINITIONS } from './BlockCanvas'

const BLOCK_CATEGORIES = {
  movement: {
    name: 'Movement 🎮',
    icon: Gamepad2,
    color: 'bg-secondary',
    blocks: [
      { id: 'move-up', label: 'Move Up', code: 'moveUp()' },
      { id: 'move-down', label: 'Move Down', code: 'moveDown()' },
      { id: 'move-left', label: 'Move Left', code: 'moveLeft()' },
      { id: 'move-right', label: 'Move Right', code: 'moveRight()' }
    ]
  },
  logic: {
    name: 'Logic 🔄',
    icon: Repeat,
    color: 'bg-primary',
    blocks: [
      { id: 'if-then', label: 'If...Then', code: 'if (condition) { }' },
      { id: 'repeat', label: 'Repeat 5 Times', code: 'for (let i = 0; i < 5; i++) { }' },
      { id: 'wait', label: 'Wait 1 Second', code: 'await sleep(1000)' }
    ]
  },
  variables: {
    name: 'Variables 📦',
    icon: Code,
    color: 'bg-accent',
    blocks: [
      { id: 'set-var', label: 'Set Variable', code: 'let x = 0' },
      { id: 'change-var', label: 'Change Variable', code: 'x = x + 1' }
    ]
  },
  sounds: {
    name: 'Sounds 🔊',
    icon: Volume2,
    color: 'bg-primary/80',
    blocks: [
      { id: 'play-sound', label: 'Play Sound', code: 'playSound("beep")' },
      { id: 'stop-sound', label: 'Stop Sound', code: 'stopSound()' }
    ]
  }
}

export default function BlockPalette({ onBlockClick }) {
  return (
    <div className="bg-white rounded-xl p-4 border-2 border-warmGray">
      <h2 className="font-heading text-2xl font-bold text-navy mb-4">
        Block Palette 🎨
      </h2>
      <p className="text-sm text-navy/60 mb-4">Click a block to add it to your canvas!</p>
      <div className="space-y-4">
        {Object.entries(BLOCK_CATEGORIES).map(([key, category]) => {
          const Icon = category.icon
          return (
            <div key={key} className="space-y-2">
              <div className={`flex items-center gap-2 ${category.color} text-white px-3 py-2 rounded-lg`}>
                <Icon size={20} aria-hidden="true" />
                <span className="font-semibold">{category.name}</span>
              </div>
              <div className="grid grid-cols-1 gap-2 pl-4">
                {category.blocks.map(block => (
                  <button
                    key={block.id}
                    onClick={() => onBlockClick && onBlockClick(block.id)}
                    className={`${category.color}/20 border-2 border-dashed ${category.color} rounded-lg px-4 py-3 cursor-pointer hover:scale-105 hover:opacity-80 transition-all text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                    aria-label={`Add ${block.label} block`}
                  >
                    <p className="font-semibold text-navy">{block.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

