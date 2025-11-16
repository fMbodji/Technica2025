import { useState, useRef, useEffect } from 'react'
import { Send, Mic } from 'lucide-react'
import Button from '../shared/Button'
import Input from '../shared/Input'

export default function ChatInput({ onSend, ageRange, expertise, onVoiceInput }) {
  const [message, setMessage] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    // Auto-focus input for 55+ age range
    if (ageRange === '55+' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [ageRange])

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

  // Voice input available for 6-13 and 55+
  const showVoiceInput = (ageRange === '55+' || ageRange === '6-13') && onVoiceInput
  const buttonSize = ageRange === '55+' ? 'lg' : 'md'
  const inputSize = ageRange === '55+' ? 'xl' : ageRange === '6-13' ? 'lg' : 'md'

  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t-2 border-warmGray bg-white p-4"
    >
      <div className="flex gap-2 items-end">
        {showVoiceInput && (
          <Button
            type="button"
            variant="outline"
            size={buttonSize}
            onClick={onVoiceInput}
            aria-label="Use voice input"
          >
            <Mic size={ageRange === '55+' ? 24 : 20} aria-hidden="true" />
          </Button>
        )}
        <div className="flex-1">
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              ageRange === '55+' 
                ? "Type your message here..." 
                : ageRange === '6-13'
                ? "Ask me anything! 😊"
                : "Type your message..."
            }
            ageRange={ageRange}
            aria-label="Chat message input"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size={buttonSize}
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <Send size={ageRange === '55+' ? 24 : 20} aria-hidden="true" />
        </Button>
      </div>
    </form>
  )
}
