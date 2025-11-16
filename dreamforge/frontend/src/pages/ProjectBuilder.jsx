import { useState, useEffect } from 'react'
import { useProfile } from '../hooks/useProfile'
import Layout from '../components/shared/Layout'
import ChatInterface from '../components/ai-chat/ChatInterface'
import { EXPERTISE_LEVELS, STORAGE_KEYS } from '../utils/constants'

// Beginner Components (visual/block-based)
import BlockPalette from '../components/tiers/MiddleSchool/BlockPalette'
import BlockCanvas, { BLOCK_DEFINITIONS } from '../components/tiers/MiddleSchool/BlockCanvas'
import ProjectPreview from '../components/tiers/MiddleSchool/ProjectPreview'
import AchievementBadge from '../components/tiers/MiddleSchool/AchievementBadge'

// Elder/Guided Components (for beginners who need more guidance)
import ProjectWizard from '../components/tiers/Elder/ProjectWizard'
import VoiceInput from '../components/tiers/Elder/VoiceInput'
import HelpButton from '../components/tiers/Elder/HelpButton'

export default function ProjectBuilder() {
  const { expertise, ageRange, loading: profileLoading, uiPreferences } = useProfile()
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
        if (expertise === EXPERTISE_LEVELS.BEGINNER && project.blocks) {
          setBlocks(project.blocks)
        }
      } catch (error) {
        console.error('Error loading project:', error)
      }
    }
  }, [expertise])

  useEffect(() => {
    // Save project to localStorage
    if (expertise === EXPERTISE_LEVELS.BEGINNER) {
      const project = { blocks, code, expertise, ageRange }
      localStorage.setItem(STORAGE_KEYS.CURRENT_PROJECT, JSON.stringify(project))
    }
  }, [blocks, code, expertise, ageRange])

  // Beginner handlers (block-based)
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
    const project = { ...formData, expertise, ageRange, createdAt: new Date().toISOString() }
    const projects = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS) || '[]')
    projects.push(project)
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects))
    alert('Project published successfully! 🎉')
  }

  const handleWizardSave = (formData) => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_PROJECT, JSON.stringify(formData))
  }

  if (profileLoading) {
    return (
      <Layout ageRange={ageRange}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-xl">Loading...</p>
        </div>
      </Layout>
    )
  }

  if (!expertise || !ageRange) {
    return (
      <Layout ageRange={ageRange}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-xl">Please complete your profile first</p>
        </div>
      </Layout>
    )
  }

  // BEGINNER: Block-based interface (visual, drag-drop) - regardless of age
  if (expertise === EXPERTISE_LEVELS.BEGINNER) {
    return (
      <Layout ageRange={ageRange}>
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h1 className="font-heading text-4xl font-bold text-navy mb-2">
              {ageRange === '6-13' ? 'Build Your Project! 🎮' : 'Build Your Project!'}
            </h1>
            <p className={`text-navy/70 ${ageRange === '55+' ? 'text-2xl' : 'text-xl'}`}>
              {ageRange === '6-13' 
                ? 'Click blocks from the palette to create something awesome!'
                : 'Click blocks from the palette to build your project step by step.'
              }
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
                ageRange={ageRange}
              />
            </div>
            <div className="lg:col-span-1">
              <ProjectPreview
                code={code}
                isRunning={isRunning}
                onRun={handleGenerateCode}
                onStop={() => setIsRunning(false)}
                ageRange={ageRange}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <div className="lg:col-span-1">
              <ChatInterface expertise={expertise} ageRange={ageRange} />
            </div>
          </div>

          {/* Voice input for 55+ beginners */}
          {ageRange === '55+' && (
            <div className="mt-8">
              <h2 className={`font-heading font-bold text-navy mb-4 ${ageRange === '55+' ? 'text-2xl' : 'text-xl'}`}>
                Or use voice input
              </h2>
              <VoiceInput
                onTranscript={handleVoiceTranscript}
                ageRange={ageRange}
              />
              {voiceTranscript && (
                <div className={`mt-4 p-6 bg-white rounded-xl border-2 border-warmGray ${ageRange === '55+' ? 'text-xl' : ''}`}>
                  <p className="text-navy">{voiceTranscript}</p>
                </div>
              )}
            </div>
          )}

          {/* Help button for 55+ */}
          {ageRange === '55+' && <HelpButton ageRange={ageRange} />}

          <AchievementBadge
            achievementId={achievement}
            onClose={() => setAchievement(null)}
            ageRange={ageRange}
          />
        </div>
      </Layout>
    )
  }

  // INTERMEDIATE & ADVANCED: For now, use guided wizard interface
  // TODO: Add code editor for intermediate/advanced in Phase 2
  return (
    <Layout ageRange={ageRange}>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className={`font-heading font-bold text-navy mb-4 ${ageRange === '55+' ? 'text-4xl' : 'text-3xl'}`}>
            Create Your Project
          </h1>
          <p className={`text-navy/80 ${ageRange === '55+' ? 'text-2xl' : 'text-xl'}`}>
            We'll guide you through every step
          </p>
        </div>

        <ProjectWizard
          onComplete={handleWizardComplete}
          onSave={handleWizardSave}
        />

        {/* Voice input for 55+ and 6-13 */}
        {(ageRange === '55+' || ageRange === '6-13') && (
          <div className="mt-8">
            <h2 className={`font-heading font-bold text-navy mb-4 ${ageRange === '55+' ? 'text-2xl' : 'text-xl'}`}>
              Or use voice input
            </h2>
            <VoiceInput
              onTranscript={handleVoiceTranscript}
              ageRange={ageRange}
            />
            {voiceTranscript && (
              <div className={`mt-4 p-6 bg-white rounded-xl border-2 border-warmGray ${ageRange === '55+' ? 'text-xl' : ''}`}>
                <p className="text-navy">{voiceTranscript}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-8">
          <ChatInterface expertise={expertise} ageRange={ageRange} />
        </div>

        {/* Help button for 55+ */}
        {ageRange === '55+' && <HelpButton ageRange={ageRange} />}
      </div>
    </Layout>
  )
}
