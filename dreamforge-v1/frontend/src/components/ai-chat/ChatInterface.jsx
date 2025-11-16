import { useState, useRef, useEffect } from 'react'
import { useAI } from '../../hooks/useAI'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'
import LoadingSpinner from '../shared/LoadingSpinner'

export default function ChatInterface({ expertise, ageRange, userId, onVoiceInput }) {
  const [messages, setMessages] = useState([])
  const { sendMessage, loading } = useAI(expertise, ageRange)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    // Welcome message based on expertise and age
    let welcomeMessage = "Hello! I'm here to help you bring your ideas to life. What would you like to create today?"
    
    if (ageRange === '6-13') {
      welcomeMessage = "Hey there! 👋 I'm your coding buddy! What awesome thing do you want to build today? 🚀"
    } else if (ageRange === '55+') {
      welcomeMessage = "Hello! I'm here to help you bring your ideas to life. What would you like to create today?"
    } else if (expertise === 'beginner') {
      welcomeMessage = "Hi! I'm here to help you learn and create. What would you like to build?"
    } else if (expertise === 'advanced') {
      welcomeMessage = "Ready to build something great? Let's get started!"
    }
    
    setMessages([{
      role: 'assistant',
      content: welcomeMessage
    }])
  }, [expertise, ageRange])

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
      const errorMessage = ageRange === '55+' || ageRange === '6-13'
        ? "Let's try that again in a moment. Your work is saved."
        : "Oops! Let's give it another shot! 😅"
      setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }])
    }
  }

  return (
    <div className="flex flex-col h-full bg-cream rounded-xl border-2 border-warmGray overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} ageRange={ageRange} />
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl px-6 py-4 border-2 border-warmGray">
              <LoadingSpinner ageRange={ageRange} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput 
        onSend={handleSend} 
        ageRange={ageRange} 
        expertise={expertise}
        onVoiceInput={onVoiceInput} 
      />
    </div>
  )
}
