import express from 'express'
import dotenv from 'dotenv'
import corsMiddleware from './middleware/cors.js'
import { errorHandler } from './middleware/errorHandler.js'
import aiRoutes from './api/routes.js'
import projectRoutes from './api/projects.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(corsMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'DreamForge API is running' })
})

// API Routes
app.use('/api/ai', aiRoutes)
app.use('/api/projects', projectRoutes)

// Error handling
app.use(errorHandler)

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

app.listen(PORT, () => {
  console.log(`🚀 DreamForge backend server running on port ${PORT}`)
  console.log(`📍 Health check: http://localhost:${PORT}/health`)
})

