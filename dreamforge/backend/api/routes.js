import express from 'express'
import { getAIResponse, getAIResponseLegacy } from './ai-service.js'
import { getPersonaDescription } from '../prompts/prompt-generator.js'

const router = express.Router()

/**
 * AI Chat endpoint (NEW - expertise + age based)
 * POST /api/ai/chat
 * Body: { message, expertise, ageRange, conversationHistory? }
 */
router.post('/ai/chat', async (req, res) => {
  try {
    const { message, expertise, ageRange, conversationHistory, tier } = req.body

    // NEW SYSTEM: expertise + ageRange
    if (expertise && ageRange) {
      if (!message) {
        return res.status(400).json({
          success: false,
          message: 'Message is required'
        })
      }

      const response = await getAIResponse(
        message,
        expertise,
        ageRange,
        conversationHistory || []
      )

      res.json(response)
      return
    }

    // BACKWARD COMPATIBILITY: Support old tier-based system
    if (tier) {
      if (!message) {
        return res.status(400).json({
          success: false,
          message: 'Message is required'
        })
      }

      const response = await getAIResponseLegacy(
        message,
        tier,
        conversationHistory || []
      )

      res.json(response)
      return
    }

    // Neither new nor old system provided
    return res.status(400).json({
      success: false,
      message: 'Either (expertise + ageRange) or tier is required'
    })

  } catch (error) {
    console.error('Chat route error:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred processing your request',
      error: error.message
    })
  }
})

/**
 * Get AI persona description
 * GET /api/ai/persona?expertise=beginner&ageRange=6-13
 */
router.get('/ai/persona', async (req, res) => {
  try {
    const { expertise, ageRange } = req.query

    if (!expertise || !ageRange) {
      return res.status(400).json({
        success: false,
        message: 'Expertise and ageRange are required'
      })
    }

    const description = getPersonaDescription(expertise, ageRange)

    res.json({
      success: true,
      expertise,
      ageRange,
      description
    })
  } catch (error) {
    console.error('Persona route error:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred',
      error: error.message
    })
  }
})

export default router

