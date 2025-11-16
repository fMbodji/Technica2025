import { useState, useRef, useEffect } from 'react'
import { Send, Mic } from 'lucide-react'
import Button from '../shared/Button'
import Input from '../shared/Input'

export default function ChatInput({ onSend, tier, onVoiceInput }) {
  const [message, setMessage] = useState('')
  const inputRef = useRef(null)

  // Edit


  useEffect(() => {
    // Auto-focus input for elder tier
    if (tier === 'elder' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [tier])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSend(message.trim())
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t-2 border-warmGray bg-white p-4"
    >
      <div className="flex gap-2 items-end">
        {tier === 'elder' && onVoiceInput && (
          <Button
            type="button"
            variant="outline"
            size={tier === 'elder' ? 'lg' : 'md'}
            tier={tier}
            onClick={onVoiceInput}
            aria-label="Use voice input"
          >
            <Mic size={tier === 'elder' ? 24 : 20} aria-hidden="true" />
          </Button>
        )}
        <div className="flex-1">
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={tier === 'elder' ? "Type your message here..." : "Ask me anything! 😊"}
            tier={tier}
            aria-label="Chat message input"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size={tier === 'elder' ? 'lg' : 'md'}
          tier={tier}
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <Send size={tier === 'elder' ? 24 : 20} aria-hidden="true" />
        </Button>
      </div>
    </form>
  )
}

