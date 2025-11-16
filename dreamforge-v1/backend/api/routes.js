import express from 'express'
import { getAIResponse } from './ai-service.js'

const router = express.Router()

// AI Chat endpoint - Updated for expertise + age range system
router.post('/ai/chat', async (req, res) => {
  try {
    const { message, expertise, ageRange, conversationHistory = [] } = req.body

    // Validate required fields
    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      })
    }

    if (!expertise || !ageRange) {
      return res.status(400).json({
        success: false,
        message: 'Expertise and ageRange are required'
      })
    }

    // Validate expertise and ageRange values
    const validExpertise = ['beginner', 'intermediate', 'advanced']
    const validAgeRanges = ['6-13', '14-17', '18-24', '25-54', '55+']

    if (!validExpertise.includes(expertise)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid expertise level. Must be: beginner, intermediate, or advanced'
      })
    }

    if (!validAgeRanges.includes(ageRange)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid age range. Must be: 6-13, 14-17, 18-24, 25-54, or 55+'
      })
    }

    const response = await getAIResponse(message, expertise, ageRange, conversationHistory)
    
    res.json(response)
  } catch (error) {
    console.error('Chat route error:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred processing your request'
    })
  }
})

export default router
