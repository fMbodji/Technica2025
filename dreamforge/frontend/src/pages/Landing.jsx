import { useNavigate } from 'react-router-dom'
import { Sparkles, Users, Code } from 'lucide-react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import Layout from '../components/shared/Layout'
import { TIERS } from '../utils/constants'

export default function Landing() {
  const navigate = useNavigate()

  const handleTierSelect = (tier) => {
    navigate(`/tier-selection?tier=${tier}`)
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-3xl">
          <div className="flex justify-center mb-6">
            <Sparkles size={64} className="text-primary" aria-hidden="true" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-navy mb-4">
            DreamForge
          </h1>
          <p className="text-2xl md:text-3xl text-primary mb-6">
            A bridge between aspiration and achievement
          </p>
          <p className="text-lg md:text-xl text-navy/80 max-w-2xl mx-auto mb-6">
            The grandmother who wants to share her garden wisdom. The middle schooler with a wild game idea. The career changer who thought they "weren't technical enough."
          </p>
          <p className="text-xl md:text-2xl font-semibold text-navy max-w-2xl mx-auto">
            DreamForge empowers them all—meeting people where they are, not where we think they should be.
          </p>
        </div>

        {/* Tier Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
          {/* Middle School Card */}
          <Card
            tier={TIERS.MIDDLE_SCHOOL}
            interactive
            onClick={() => handleTierSelect(TIERS.MIDDLE_SCHOOL)}
            className="text-center hover:border-secondary border-4 border-transparent transition-all"
            aria-label="Select Middle School tier"
          >
            <div className="mb-6">
              <Code size={64} className="text-secondary mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-heading text-3xl font-bold text-navy mb-3">
                I'm in Middle School 🎮
              </h2>
              <p className="text-lg text-navy/70 mb-6">
                You have BIG ideas. We give you the tools to bring them to life—with colorful blocks, instant previews, and an AI mentor who believes in you.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              tier={TIERS.MIDDLE_SCHOOL}
              className="w-full"
            >
              Start Creating! 🚀
            </Button>
          </Card>

          {/* Elder Card */}
          <Card
            tier={TIERS.ELDER}
            interactive
            onClick={() => handleTierSelect(TIERS.ELDER)}
            className="text-center hover:border-primary border-4 border-transparent transition-all"
            aria-label="Select Elder tier"
          >
            <div className="mb-6">
              <Users size={64} className="text-primary mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-heading text-3xl font-bold text-navy mb-3">
                I'm Exploring Technology Later in Life 👴👵
              </h2>
              <p className="text-lg text-navy/70 mb-6">
                Your wisdom deserves to be shared. We make it easy—with voice input, clear guidance, and patient support that honors your experience.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              tier={TIERS.ELDER}
              className="w-full"
            >
              Begin Your Journey
            </Button>
          </Card>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-primary" size={32} aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Truly Adaptive</h3>
            <p className="text-navy/70">Age-adaptive AI tutoring that meets you where you are—interface, language, and pace all personalized</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Code className="text-secondary" size={32} aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Your Projects</h3>
            <p className="text-navy/70">From "I wish I could" to "Look what I made"—build things that matter to you</p>
          </div>
          <div className="text-center">
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-accent" size={32} aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Empowering All Ages</h3>
            <p className="text-navy/70">Because the next great idea could come from anywhere—a classroom or a retirement home</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

