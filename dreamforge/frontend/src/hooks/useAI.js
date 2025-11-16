import { useState } from 'react'
import { sendChatMessage } from '../utils/api'

export function useAI(expertise, ageRange) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [conversationHistory, setConversationHistory] = useState([])

  const sendMessage = async (message) => {
    if (!message.trim() || !expertise || !ageRange) {
      return null
    }

    setLoading(true)
    setError(null)

    try {
      const response = await sendChatMessage(
        message, 
        expertise, 
        ageRange, 
        conversationHistory
      )
      
      // Update conversation history
      if (response && response.message) {
        setConversationHistory(prev => [
          ...prev,
          { role: 'user', content: message },
          { role: 'assistant', content: response.message }
        ])
      }
      
      return response
    } catch (err) {
      setError(err.message)
      
      // Return age-appropriate fallback message
      const fallback = ageRange === '55+' || ageRange === '6-13'
        ? "I'm having a small issue right now. Your work is saved. Let's try again in a moment."
        : "Oops! Something got tangled up. No worries, let's give it another shot! 😅"
      
      return { message: fallback, success: false, fallback: true }
    } finally {
      setLoading(false)
    }
  }

  const clearHistory = () => {
    setConversationHistory([])
  }

  return { sendMessage, loading, error, conversationHistory, clearHistory }
}
