import Anthropic from '@anthropic-ai/sdk'
import { generateSystemPrompt, validateTierParameters } from '../prompts/prompt-generator.js'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

/**
 * Get AI response based on expertise level and age range
 * @param {string} message - User's message
 * @param {string} expertise - 'beginner', 'intermediate', or 'advanced'
 * @param {string} ageRange - '6-13', '14-17', '18-24', '25-54', or '55+'
 * @param {Array} conversationHistory - Previous messages in conversation
 * @returns {Object} AI response with message and success status
 */
export async function getAIResponse(message, expertise, ageRange, conversationHistory = []) {
  try {
    // Validate parameters
    validateTierParameters(expertise, ageRange)

    // Generate personalized system prompt
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
      success: true,
      expertise,
      ageRange
    }
  } catch (error) {
    console.error('AI Error:', error)

    // Return age-appropriate fallback
    const fallback = getFallbackMessage(ageRange)

    return {
      message: fallback,
      success: false,
      fallback: true,
      error: error.message
    }
  }
}

/**
 * Get age-appropriate fallback message when AI service fails
 */
function getFallbackMessage(ageRange) {
  const fallbackMap = {
    '6-13': "Oops! Something got a little mixed up. Don't worry, let's try again! 😊",
    '14-17': "Hey, hit a small snag there. No worries though, let's give it another shot!",
    '18-24': "Technical hiccup on our end. Your work is saved. Let's retry that.",
    '25-54': "We're experiencing a temporary service issue. Your progress is saved. Please try again.",
    '55+': "I'm having a small technical issue right now. Your work is safely saved. Let's try again in a moment."
  }

  return fallbackMap[ageRange] || "Technical issue encountered. Please try again."
}

/**
 * BACKWARD COMPATIBILITY: Support old tier-based system
 * @deprecated Use getAIResponse with expertise and ageRange instead
 */
export async function getAIResponseLegacy(message, tier, conversationHistory = []) {
  // Map old tiers to new system
  const tierMapping = {
    'middleSchool': { expertise: 'beginner', ageRange: '6-13' },
    'elder': { expertise: 'beginner', ageRange: '55+' }
  }

  const mapped = tierMapping[tier] || { expertise: 'beginner', ageRange: '18-24' }
  return getAIResponse(message, mapped.expertise, mapped.ageRange, conversationHistory)
}

