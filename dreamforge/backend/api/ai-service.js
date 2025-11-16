import Anthropic from '@anthropic-ai/sdk'
import { generateSystemPrompt } from '../prompts/prompt-generator.js'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

/**
 * Get AI response with dynamic prompt generation based on expertise and age range
 * @param {string} message - User's message
 * @param {string} expertise - 'beginner' | 'intermediate' | 'advanced'
 * @param {string} ageRange - '6-13' | '14-17' | '18-24' | '25-54' | '55+'
 * @param {array} conversationHistory - Previous messages in the conversation
 * @returns {object} AI response
 */
export async function getAIResponse(message, expertise, ageRange, conversationHistory = []) {
  try {
    // Generate dynamic system prompt based on expertise and age
    const systemPrompt = generateSystemPrompt(expertise, ageRange)
    
    // Build messages array
    const messages = [
      ...conversationHistory,
      {
        role: 'user',
        content: message
      }
    ]
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages: messages
    })
    
    return {
      message: response.content[0].text,
      success: true
    }
  } catch (error) {
    console.error('AI Error:', error)
    
    // Return age-appropriate fallback
    const fallback = ageRange === '55+' || ageRange === '6-13'
      ? "I'm having a small issue right now. Your work is saved. Let's try again in a moment."
      : "Oops! Something got tangled up. No worries, let's give it another shot! 😅"
    
    return {
      message: fallback,
      success: false,
      fallback: true
    }
  }
}
