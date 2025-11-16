import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import elderSystemPrompt from '../prompts/elder-system-prompt.js';

const router = express.Router();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Chat endpoint
router.post('/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [], userContext = {} } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Build context-aware prompt
    let contextPrompt = elderSystemPrompt;
    
    if (userContext.goal) {
      contextPrompt += `\n\n**User's Goal:** ${userContext.goal}`;
    }
    
    if (userContext.focusCategory) {
      contextPrompt += `\n**User's Focus Area:** ${userContext.focusCategory}`;
    }

    // Build conversation context
    const conversationContext = conversationHistory
      .map(msg => `${msg.role === 'user' ? 'User' : 'Coach'}: ${msg.content}`)
      .join('\n');

    // Create the full prompt
    const fullPrompt = `${contextPrompt}

${conversationContext ? `**Previous Conversation:**\n${conversationContext}\n` : ''}
**User's Current Message:** ${message}

**Your Response (remember: warm, clear, encouraging):**`;

    // Generate response
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const aiMessage = response.text();

    res.json({
      message: aiMessage,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      message: 'I apologize, but I encountered a technical difficulty. Please try again in a moment.'
    });
  }
});

export default router;


