import { useState } from 'react'
import { HelpCircle, X } from 'lucide-react'
import Button from '../../shared/Button'
import Card from '../../shared/Card'
import { TIERS } from '../../../utils/constants'

const HELP_CONTENT = {
  title: 'Need Help?',
  sections: [
    {
      question: 'What is DreamForge?',
      answer: 'DreamForge helps you create digital projects like websites, photo albums, or blogs. You don\'t need to know how to code - we guide you through every step.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply tell us what you\'d like to create. You can type your idea or use the microphone button to speak it. We\'ll help you build it step by step.'
    },
    {
      question: 'Can I save my work?',
      answer: 'Yes! Your work is automatically saved as you go. You can come back anytime and continue where you left off.'
    },
    {
      question: 'What if I make a mistake?',
      answer: 'No worries! You can always go back to previous steps and change anything. Nothing is permanent until you decide to publish.'
    }
  ]
}

export default function HelpButton({ tier }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-primary text-white px-10 py-6 rounded-xl shadow-xl hover:bg-primary/90 transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-2 z-40"
        aria-label="Get help"
      >
        <div className="flex items-center gap-3">
          <HelpCircle size={32} aria-hidden="true" />
          <span className="text-xl font-semibold">Help Me Understand</span>
        </div>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="help-title"
        >
          <Card
            tier={tier}
            className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 id="help-title" className="text-3xl font-heading font-bold text-navy">
                {HELP_CONTENT.title}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-warmGray rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Close help"
              >
                <X size={28} className="text-navy" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-6">
              {HELP_CONTENT.sections.map((section, index) => (
                <div key={index} className="border-b-2 border-warmGray pb-6 last:border-0">
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {section.question}
                  </h3>
                  <p className="text-xl text-navy/80 leading-relaxed">
                    {section.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="primary"
                size="xl"
                tier={tier}
                onClick={() => setIsOpen(false)}
              >
                Got it, thank you!
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}

