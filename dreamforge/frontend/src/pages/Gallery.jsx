import { useState, useEffect } from 'react'
import { Eye } from 'lucide-react'
import Layout from '../components/shared/Layout'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import { STORAGE_KEYS, TIER_LABELS } from '../utils/constants'

export default function Gallery() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    // Load projects from localStorage
    const savedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS)
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects))
      } catch (error) {
        console.error('Error loading projects:', error)
      }
    }
  }, [])

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tier === filter)

  const sampleProjects = [
    {
      id: 'sample-1',
      title: 'My Pet Game',
      description: 'A fun game where you take care of virtual pets',
      tier: 'middleSchool',
      createdAt: new Date().toISOString()
    },
    {
      id: 'sample-2',
      title: 'Family Recipe Collection',
      description: 'A beautiful collection of family recipes with photos',
      tier: 'elder',
      createdAt: new Date().toISOString()
    },
    {
      id: 'sample-3',
      title: 'Dream Bedroom Designer',
      description: 'Design your perfect bedroom with interactive tools',
      tier: 'middleSchool',
      createdAt: new Date().toISOString()
    }
  ]

  const displayProjects = filteredProjects.length > 0 ? filteredProjects : sampleProjects

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl font-bold text-navy mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-navy/70">
            Explore projects created by DreamForge users
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={filter === 'all' ? 'primary' : 'outline'}
            size="md"
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'middleSchool' ? 'primary' : 'outline'}
            size="md"
            onClick={() => setFilter('middleSchool')}
          >
            Middle School
          </Button>
          <Button
            variant={filter === 'elder' ? 'primary' : 'outline'}
            size="md"
            onClick={() => setFilter('elder')}
          >
            Elder
          </Button>
        </div>

        {displayProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-navy/50">
              No projects yet. Create your first project to see it here!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project) => (
              <Card
                key={project.id}
                tier={project.tier}
                className="flex flex-col"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {TIER_LABELS[project.tier] || 'Project'}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">
                    {project.title || project.idea || 'Untitled Project'}
                  </h3>
                  <p className="text-navy/70 mb-4 line-clamp-3">
                    {project.description || project.content || 'No description available'}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  tier={project.tier}
                  className="w-full"
                >
                  <Eye size={18} className="mr-2" aria-hidden="true" />
                  View Project
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

