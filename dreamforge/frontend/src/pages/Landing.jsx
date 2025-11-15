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
            Where curiosity meets capability
          </p>
          <p className="text-lg md:text-xl text-navy/80 max-w-2xl mx-auto">
            An AI-powered creation platform that adapts to learners at every life stage—from middle school students building their first game to elders creating meaningful digital legacies.
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
                Build games, stories, and fun projects with colorful blocks and an enthusiastic AI buddy!
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
                Create meaningful projects with clear guidance, large text, and patient support.
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
            <h3 className="font-heading text-xl font-semibold mb-2">Age-Adaptive</h3>
            <p className="text-navy/70">Same powerful AI, completely different experience</p>
          </div>
          <div className="text-center">
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Code className="text-secondary" size={32} aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Real Projects</h3>
            <p className="text-navy/70">Build things you actually care about</p>
          </div>
          <div className="text-center">
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-accent" size={32} aria-hidden="true" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">For Everyone</h3>
            <p className="text-navy/70">Accessible to learners of all ages</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

