import { useState } from 'react'
import { sendChatMessage } from '../utils/api'

export function useAI(tier) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendMessage = async (message) => {
    if (!message.trim() || !tier) {
      return null
    }

    setLoading(true)
    setError(null)

    try {
      const response = await sendChatMessage(message, tier)
      return response
    } catch (err) {
      setError(err.message)
      
      // Return tier-appropriate fallback message
      const fallback = tier === 'elder'
        ? "I'm having a small issue right now. Your work is saved. Let's try again in a moment."
        : "Oops! Something got tangled up. No worries, let's give it another shot! 😅"
      
      return { message: fallback, success: false, fallback: true }
    } finally {
      setLoading(false)
    }
  }

  return { sendMessage, loading, error }
}

