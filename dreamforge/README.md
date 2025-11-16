# 🔨 DreamForge

**A bridge between aspiration and achievement for people at every age**

## 🌟 The Mission

DreamForge isn't just a platform—it's empowerment. We believe the next great idea could come from anywhere: a grandmother who wants to share her garden wisdom, a middle schooler with a wild game idea, or a career changer who thought they "weren't technical enough."

We're building age-adaptive AI tutoring that meets people where they are—not where we think they should be. Through intelligent adaptation of interface, language, and guidance, we transform "I wish I could build that" into "Look what I made."

### Who This Is For

**🌸 The Elder with Stories to Share**
Margaret, 68, has decades of gardening knowledge. DreamForge gives her large, clear interfaces, patient guidance, and voice input—so her wisdom becomes a digital legacy, not a lost opportunity.

**🎮 The Middle Schooler with Big Ideas**
Alex, 13, dreams of creating games but doesn't know where to start. DreamForge provides colorful blocks, enthusiastic encouragement, and instant previews—turning curiosity into capability.

**💼 The Career Changer Who Doubted Themselves**
Jordan, 35, always felt "not technical enough." DreamForge adapts to their learning style, celebrates every win, and proves that it's never too late to build something amazing.

## 💡 What We're Building

An AI-powered creation platform that adapts to learners at every life stage. By personalizing the interface, language, and project suggestions to each learner's age, interests, and goals, we're not just teaching code—we're unlocking human potential.


## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Anthropic API key (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   cd dreamforge
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**

   Create `backend/.env`:
   ```env
   ANTHROPIC_API_KEY=your_api_key_here
   PORT=3001
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:5173
   ```

   Create `frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

### Running the Application

1. **Start the backend server** (Terminal 1)
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## 📁 Project Structure

```
dreamforge/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── shared/          # Universal components
│   │   │   ├── tiers/
│   │   │   │   ├── MiddleSchool/
│   │   │   │   └── Elder/
│   │   │   └── ai-chat/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── config/
│   └── package.json
│
└── backend/
    ├── api/
    ├── prompts/
    ├── middleware/
    └── server.js
```

## 🎯 Age-Adaptive Features

Every tier is designed with deep empathy for its learners—meeting them where they are, celebrating their progress, and empowering them to achieve more than they thought possible.

### Middle School Tier
**For the curious minds with big imaginations**
- 🎮 Block-based visual programming (drag, drop, create!)
- 🎨 Colorful, playful interface that makes learning fun
- 🏆 Achievement system that celebrates every milestone
- 💬 Enthusiastic AI mentor who believes in you
- 👀 Live preview—see your ideas come to life instantly

### Elder Tier
**For the wisdom-keepers ready to share their legacy**
- 📝 Step-by-step project wizard with clear guidance
- 🔍 Large, high-contrast UI designed for comfort
- 🎤 Voice input—speak your ideas into existence
- ❓ Always-available help with patient explanations
- 💬 Respectful AI mentor who honors your experience

### Coming Soon: High School & College Tiers
We're expanding to serve learners at every stage—because aspiration knows no age limit.

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- React Router DOM
- @dnd-kit/core (drag and drop)
- Lucide React (icons)

### Backend
- Node.js + Express
- Anthropic Claude API
- CORS middleware

## 🎨 Design System

### Colors
- Primary: `#8B7AB8` (soft purple)
- Secondary: `#FF8E72` (warm coral)
- Accent: `#F4C430` (gold)
- Cream: `#F5F1E8` (background)
- Navy: `#2C3E50` (text)

### Typography
- Headings: Outfit
- Body: Inter
- Code: JetBrains Mono

## 📝 Development

### Building for Production

```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm start
```

### Code Style

- Use functional components with hooks
- Follow ESLint rules
- Maintain accessibility (WCAG AA)
- Write clear, descriptive component names

## 🧪 Testing

Before considering a component complete, verify:
- ✅ Renders correctly in both tiers
- ✅ Works on mobile (375px width)
- ✅ Keyboard accessible
- ✅ Proper error handling
- ✅ Loading states display correctly
- ✅ ARIA labels present
- ✅ Focus states visible

## 📄 License

MIT License

## Team
Fatima Mbodji - Developer

Sri Mummidi - Developer 

## Contact Questions? 
Reach out to us at smummidi@terpmail.umd.edu

## 🙏 Acknowledgments

- Anthropic for Claude API
- Built with ❤️ for Technica 2025

---

## 💪 Why This Matters

**Innovation**: Age-adaptive AI tutoring hasn't been done well. We're changing that.

**Impact**: We're addressing multiple underserved groups—from elders intimidated by technology to young creators who need the right scaffolding.

**Execution**: Built with focus, empathy, and the belief that everyone deserves tools that meet them where they are.

**Story**: Behind every project is a person who thought "I can't" becoming someone who says "I did."

---

**When you're tired at 3am, remember: you're building something that empowers people. That's worth the effort.**

**"Because the next great idea could come from a dorm room, a classroom, or a retirement home."**

