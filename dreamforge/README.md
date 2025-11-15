# 🔨 DreamForge

**Where curiosity meets capability**

DreamForge is an AI-powered creation platform that adapts to learners at every life stage—from middle school students building their first game to elders creating meaningful digital legacies. By personalizing the interface, language, and project suggestions to each learner's age, interests, and goals, we are empowering them to bring ideas to life.


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

## 🎯 Features

### Apprentice Tier
- 🎮 Block-based visual programming
- 🎨 Colorful, playful interface
- 🏆 Achievement system
- 💬 Enthusiastic AI mentor
- 👀 Live code preview

### Journeyer Tier
- ⌨️ Text-based coding with syntax highlighting
- 🔄 Toggle between blocks and code view
- 📚 Project-based learning challenges
- 💬 Encouraging AI mentor with debugging tips
- 🧪 Experiment sandbox mode

### Craftsperson Tier
- 💻 Full IDE integration
- 🔧 Advanced debugging tools
- 📦 Version control and collaboration features
- 💬 Technical AI mentor with best practices
- 🚀 Real-world project templates
- 📈 Performance optimization insights
- 🔗 API and framework documentation

### Master Tier
- 📝 Step-by-step project wizard
- 🔍 Large, high-contrast UI
- ❓ Help button with clear explanations
- 💬 Patient, respectful AI mentor

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

**"Because the next great idea could come from a dorm room, a classroom, or a retirement home."**

