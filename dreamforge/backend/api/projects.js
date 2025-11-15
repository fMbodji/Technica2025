import express from 'express'

const router = express.Router()

// In-memory storage for MVP (replace with database in production)
let projects = []

// Get all projects
router.get('/', (req, res) => {
  res.json({
    success: true,
    projects
  })
})

// Create a new project
router.post('/', (req, res) => {
  try {
    const project = {
      id: `project-${Date.now()}`,
      ...req.body,
      createdAt: new Date().toISOString()
    }
    
    projects.push(project)
    
    res.json({
      success: true,
      project
    })
  } catch (error) {
    console.error('Create project error:', error)
    res.status(500).json({
      success: false,
      message: 'Error creating project'
    })
  }
})

// Get a specific project
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id)
  
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    })
  }
  
  res.json({
    success: true,
    project
  })
})

export default router

