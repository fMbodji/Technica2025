// API utility functions
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export async function sendChatMessage(message, expertise, ageRange, conversationHistory = []) {
  try {
    const response = await fetch(`${API_URL}/api/ai/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        message, 
        expertise, 
        ageRange,
        conversationHistory 
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function saveProject(project) {
  try {
    const response = await fetch(`${API_URL}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Save Project Error:', error)
    throw error
  }
}

export async function getProjects() {
  try {
    const response = await fetch(`${API_URL}/api/projects`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Get Projects Error:', error)
    throw error
  }
}
