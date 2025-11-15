import Anthropic from '@anthropic-ai/sdk'
import { getSystemPrompt } from '../prompts/tier-specific-prompts.js'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function getAIResponse(message, tier) {
  try {
    const systemPrompt = getSystemPrompt(tier)
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: message
        }
      ]
    })
    
    return {
      message: response.content[0].text,
      success: true
    }
  } catch (error) {
    console.error('AI Error:', error)
    
    // Return tier-appropriate fallback
    const fallback = tier === 'elder'
      ? "I'm having a small issue right now. Your work is saved. Let's try again in a moment."
      : "Oops! Something got tangled up. No worries, let's give it another shot! 😅"
    
    return {
      message: fallback,
      success: false,
      fallback: true
    }
  }
}

