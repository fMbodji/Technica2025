import express from 'express'
import { getAIResponse } from './ai-service.js'

const router = express.Router()

// AI Chat endpoint
router.post('/ai/chat', async (req, res) => {
  try {
    const { message, tier } = req.body

    if (!message || !tier) {
      return res.status(400).json({
        success: false,
        message: 'Message and tier are required'
      })
    }

    const response = await getAIResponse(message, tier)
    
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

