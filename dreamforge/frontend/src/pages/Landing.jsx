import { useNavigate } from 'react-router-dom'
import { Sparkles, Rocket, Zap, Star, Heart } from 'lucide-react'
import Layout from '../components/shared/Layout'

export default function Landing() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/tier-selection')
  }

  return (
    <Layout>
      {/* Hero Section with Gradient Background */}
      <div className="gradient-hero min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center max-w-4xl">
          <div className="flex justify-center mb-6 animate-bounce">
            <Sparkles size={80} className="text-star-orange" aria-hidden="true" />
          </div>

          <h1 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            DreamForge
          </h1>

          <p className="text-3xl md:text-4xl text-star-orange font-semibold mb-8 drop-shadow">
            Empowering creation across generations
          </p>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            An AI-powered platform that adapts to your experience level and age—from kids building their first game to professionals mastering advanced skills, and lifelong learners creating meaningful digital projects.
          </p>

          <button
            onClick={handleGetStarted}
            className="
              bg-star-orange hover:bg-light-orange
              text-white font-bold
              px-12 py-6 rounded-2xl text-xl
              shadow-glow-orange hover:shadow-strong
              transition-all duration-300
              transform hover:scale-105 active:scale-95
            "
          >
            Start Your Journey ✨
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-off-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
            Why DreamForge?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1: Adaptive Learning */}
            <div className="text-center">
              <div className="gradient-beginner rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Sparkles className="text-white" size={40} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-dark-purple">
                Adapts to You
              </h3>
              <p className="text-lg text-dark-gray leading-relaxed">
                Choose your expertise level (Beginner, Intermediate, Advanced) and age range. Our AI mentor personalizes every interaction to your needs.
              </p>
            </div>

            {/* Feature 2: Real Projects */}
            <div className="text-center">
              <div className="gradient-intermediate rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Rocket className="text-white" size={40} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-dark-purple">
                Build Real Things
              </h3>
              <p className="text-lg text-dark-gray leading-relaxed">
                From interactive stories and games to full-stack apps and data visualizations. Create projects you're proud to share.
              </p>
            </div>

            {/* Feature 3: For Everyone */}
            <div className="text-center">
              <div className="gradient-advanced rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Heart className="text-light-orange" size={40} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-dark-purple">
                For All Ages
              </h3>
              <p className="text-lg text-dark-gray leading-relaxed">
                From ages 6 to 60+, our platform respects and celebrates learners at every life stage. Everyone can code.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-beginner-primary text-white font-bold text-2xl flex items-center justify-center shadow-glow-orange">
                1
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">Choose Your Experience Level</h3>
                <p className="text-lg text-dark-gray">
                  Are you a beginner, intermediate, or advanced coder? We'll match the guidance to your skills.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-intermediate-primary text-white font-bold text-2xl flex items-center justify-center shadow-medium">
                2
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">Select Your Age Range</h3>
                <p className="text-lg text-dark-gray">
                  From kids to seniors, we personalize the interface, tone, and pacing to suit you perfectly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-advanced-primary text-white font-bold text-2xl flex items-center justify-center shadow-glow-purple">
                3
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">Start Creating!</h3>
                <p className="text-lg text-dark-gray">
                  Pick a project template or start from scratch. Your AI mentor will guide you every step of the way.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={handleGetStarted}
              className="
                bg-dark-purple hover:bg-light-orange
                text-white font-bold
                px-10 py-5 rounded-xl text-lg
                shadow-medium hover:shadow-strong
                transition-all duration-300
                transform hover:scale-105 active:scale-95
              "
            >
              Get Started Now →
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial-Style Section */}
      <div className="gradient-hero py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="text-star-orange mx-auto mb-6" size={60} />
          <blockquote className="text-2xl md:text-3xl text-white font-semibold mb-6 leading-relaxed">
            "My grandmother has incredible stories. My little cousin has wild game ideas. But between 'I wish I could build that' and actually building it? There's a canyon. DreamForge is the bridge."
          </blockquote>
          <p className="text-xl text-light-purple">
            — The DreamForge Team
          </p>
        </div>
      </div>

    </Layout>
  )
}
