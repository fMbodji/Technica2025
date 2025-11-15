import { useState, useRef, useEffect } from 'react'
import { useAI } from '../../hooks/useAI'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'
import LoadingSpinner from '../shared/LoadingSpinner'

export default function ChatInterface({ tier, userId, onVoiceInput }) {
  const [messages, setMessages] = useState([])
  const { sendMessage, loading } = useAI(tier)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    // Welcome message based on tier
    const welcomeMessage = tier === 'elder'
      ? "Hello! I'm here to help you bring your ideas to life. What would you like to create today?"
      : "Hey there! 👋 I'm your coding buddy! What awesome thing do you want to build today? 🚀"
    
    setMessages([{
      role: 'assistant',
      content: welcomeMessage
    }])
  }, [tier])

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend(message) {
    if (!message.trim()) return
    
    const userMessage = { role: 'user', content: message }
    setMessages(prev => [...prev, userMessage])
    
    try {
      const response = await sendMessage(message)
      if (response) {
        const aiMessage = { 
          role: 'assistant', 
          content: response.message || response 
        }
        setMessages(prev => [...prev, aiMessage])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage = tier === 'elder' 
        ? "Let's try that again in a moment. Your work is saved."
        : "Oops! Let's give it another shot! 😅"
      setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }])
    }
  }

  return (
    <div className="flex flex-col h-full bg-cream rounded-xl border-2 border-warmGray overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} tier={tier} />
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl px-6 py-4 border-2 border-warmGray">
              <LoadingSpinner tier={tier} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSend={handleSend} tier={tier} onVoiceInput={onVoiceInput} />
    </div>
  )
}

