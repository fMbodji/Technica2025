import { useState, useEffect } from 'react'
import { useTier } from '../hooks/useTier'
import Layout from '../components/shared/Layout'
import ChatInterface from '../components/ai-chat/ChatInterface'
import { TIERS, STORAGE_KEYS } from '../utils/constants'

// Middle School Components
import BlockPalette from '../components/tiers/MiddleSchool/BlockPalette'
import BlockCanvas, { BLOCK_DEFINITIONS } from '../components/tiers/MiddleSchool/BlockCanvas'
import ProjectPreview from '../components/tiers/MiddleSchool/ProjectPreview'
import AchievementBadge from '../components/tiers/MiddleSchool/AchievementBadge'

// Elder Components
import ProjectWizard from '../components/tiers/Elder/ProjectWizard'
import VoiceInput from '../components/tiers/Elder/VoiceInput'
import HelpButton from '../components/tiers/Elder/HelpButton'

export default function ProjectBuilder() {
  const { tier, loading: tierLoading } = useTier()
  const [blocks, setBlocks] = useState([])
  const [code, setCode] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [achievement, setAchievement] = useState(null)
  const [voiceTranscript, setVoiceTranscript] = useState('')

  useEffect(() => {
    // Load saved project from localStorage
    const savedProject = localStorage.getItem(STORAGE_KEYS.CURRENT_PROJECT)
    if (savedProject) {
      try {
        const project = JSON.parse(savedProject)
        if (tier === TIERS.MIDDLE_SCHOOL && project.blocks) {
          setBlocks(project.blocks)
        }
      } catch (error) {
        console.error('Error loading project:', error)
      }
    }
  }, [tier])

  useEffect(() => {
    // Save project to localStorage
    if (tier === TIERS.MIDDLE_SCHOOL) {
      const project = { blocks, code, tier }
      localStorage.setItem(STORAGE_KEYS.CURRENT_PROJECT, JSON.stringify(project))
    }
  }, [blocks, code, tier])

  // Middle School handlers
  const handleBlockAdd = (blockId) => {
    const blockData = BLOCK_DEFINITIONS[blockId]
    if (blockData) {
      const newBlock = {
        id: `${blockId}-${Date.now()}`,
        label: blockData.label,
        code: blockData.code
      }
      setBlocks(prev => {
        const updated = [...prev, newBlock]
        // Check for achievements
        if (prev.length === 0) {
          setAchievement('firstBlock')
        } else if (prev.length === 4) {
          setAchievement('fiveBlocks')
        }
        return updated
      })
    }
  }

  const handleGenerateCode = () => {
    const generatedCode = blocks.map(block => block.code).join('\n')
    setCode(generatedCode)
    setIsRunning(true)
    setAchievement('preview')

    // Stop running after 3 seconds
    setTimeout(() => {
      setIsRunning(false)
    }, 3000)
  }

  const handleVoiceTranscript = (transcript, isError) => {
    if (isError) {
      setVoiceTranscript('')
      return
    }
    setVoiceTranscript(transcript)
  }

  const handleWizardComplete = (formData) => {
    console.log('Project completed:', formData)
    // Save project
    const project = { ...formData, tier, createdAt: new Date().toISOString() }
    const projects = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS) || '[]')
    projects.push(project)
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects))
    alert('Project published successfully! 🎉')
  }

  const handleWizardSave = (formData) => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_PROJECT, JSON.stringify(formData))
  }

  if (tierLoading) {
    return (
      <Layout tier={tier}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-xl">Loading...</p>
        </div>
      </Layout>
    )
  }

  if (!tier) {
    return (
      <Layout tier={tier}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-xl">Please select a tier first</p>
        </div>
      </Layout>
    )
  }

  // Middle School Interface
  if (tier === TIERS.MIDDLE_SCHOOL) {
    return (
      <Layout tier={tier}>
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h1 className="font-heading text-4xl font-bold text-navy mb-2">
              Build Your Project! 🎮
            </h1>
            <p className="text-xl text-navy/70">
              Click blocks from the palette to create something awesome!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <BlockPalette onBlockClick={handleBlockAdd} />
            </div>
            <div className="lg:col-span-1">
              <BlockCanvas
                blocks={blocks}
                onBlocksChange={setBlocks}
                onGenerateCode={handleGenerateCode}
              />
            </div>
            <div className="lg:col-span-1">
              <ProjectPreview
                code={code}
                isRunning={isRunning}
                onRun={handleGenerateCode}
                onStop={() => setIsRunning(false)}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <div className="lg:col-span-1">
              <ChatInterface tier={tier} />
            </div>
          </div>

          <AchievementBadge
            achievementId={achievement}
            onClose={() => setAchievement(null)}
          />
        </div>
      </Layout>
    )
  }

  // Elder Interface
  return (
    <Layout tier={tier}>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl font-bold text-navy mb-4">
            Create Your Project
          </h1>
          <p className="text-2xl text-navy/80">
            We'll guide you through every step
          </p>
        </div>

        <ProjectWizard
          onComplete={handleWizardComplete}
          onSave={handleWizardSave}
        />

        <div className="mt-8">
          <h2 className="text-2xl font-heading font-bold text-navy mb-4">
            Or use voice input
          </h2>
          <VoiceInput
            onTranscript={handleVoiceTranscript}
            tier={tier}
          />
          {voiceTranscript && (
            <div className="mt-4 p-6 bg-white rounded-xl border-2 border-warmGray">
              <p className="text-xl text-navy">{voiceTranscript}</p>
            </div>
          )}
        </div>

        <div className="mt-8">
          <ChatInterface tier={tier} />
        </div>

        <HelpButton tier={tier} />
      </div>
    </Layout>
  )
}

