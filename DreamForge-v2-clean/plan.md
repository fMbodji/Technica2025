# DreamForge – Updated Hackathon Project Plan (Elder‑Focused)

## Core Identity & Theme

**Tagline:** "Empowering elders to bring new ideas to life."

**Core Identity:** DreamForge is a fully elder-focused AI learning and creation platform. The mission is to help adults ages 55+ comfortably navigate, understand, and create with technology—without intimidation, confusion, or jargon.

**Tone & Brand Personality**
* Warm & Respectful – assumes wisdom and life experience
* Patient & Clear – no jargon without explanation
* Encouraging – celebrates every step, not just the final result
* Empowering – elders should feel capable, confident, and creative

## Design Philosophy

"Technology made welcoming. Clarity made beautiful."

**Color Palette**
* Primary:  #53355a (Dark Purple)
* Secondary:  #c57022 (Background Logo Orange)
* Accent: #f2ae18 (Star Orange)
* Neutral: #c5afcf (Background Light Purple)

**Typography**
* Headings: Outfit or Space Grotesk
* Body: Inter or DM Sans
* Code Blocks (if shown): JetBrains Mono

**UI Style**
* High contrast
* Large text sizes by default (18px base)
* Rounded components + soft shadows
* Extremely clear navigation, minimal choices per screen

## Actual Project Structure
DreamForge-v2/
├── .gitignore                    # Root gitignore (covers frontend & backend)
├── README.md                     # Main project documentation
├── PLAN.md 
├── docs/                 
│   └── DEMO_SCRIPT.md            # Demo presentation script
│
├── frontend/                     # Elder-First UI (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── core-app/         # The core Builder logic (Step-by-Step creation)
│   │   │   │   ├── StepByStepEditor.jsx  # Core guided wizard UI
│   │   │   │   └── ProjectTemplates.jsx  # Template selector cards
│   │   │   └── user-experience/  # UI, Navigation, and Text-only Interaction
│   │   │       ├── AICoachWindow.jsx     # Text-only chat interface (Input/Output)
│   │   │       ├── OnboardingQuiz.jsx    # Simple text form/selects
│   │   │       └── SharedLayout.jsx      # Header, Footer, Navigation
│   │   ├── pages/                # Main Routes
│   │   │   ├── Landing.jsx
│   │   │   ├── ProjectBuilder.jsx
│   │   │   └── Gallery.jsx
│   │   ├── utils/                # Helper functions (Persistence, etc.)
│   │   │   └── persistence.js    # LocalStorage helper
│   │   ├── App.jsx               # Main app component with routing
│   │   ├── main.jsx              # React entry point
│   │   └── index.css             # Global styles + Tailwind directives
│   ├── public/                   # Static assets
│   ├── tailwind.config.js        # Tailwind configuration with elder-friendly colors
│   ├── postcss.config.js         # PostCSS configuration
│   ├── vite.config.js            # Vite build configuration
│   ├── index.html                # HTML entry point
│   └── package.json              # Frontend dependencies
│
└── backend/                      # Node.js API
    ├── api/
    │   └── gemini-controller.js  # Main endpoint for AI requests
    ├── prompts/
    │   └── elder-system-prompt.js # The coaching tone/rules
    ├── server.js                 # Express server setup
    ├── .env                      # Environment variables (GITIGNORED)
    ├── .env.example              # Environment template
    └── package.json              # Backend dependencies
```

## MVP Features (Elder-Only)

### Phase 1: Foundation (Minutes 0-40)

#### Landing Page
- Friendly hero section: "Create, share, and explore—at any age."
- Large, clear CTA buttons
- Overview of what the platform does in simple language

#### Elder Onboarding Flow (Refined & Inclusive)
**Screen 1 (Goal):** Free-form text input for: "What would you like to achieve or create today?"
- Examples: "I want to share my family recipes." or "I'd like to understand how to code a simple website."

**Screen 2 (Focus/Interests):** Clickable category cards for: "Which of these focuses is most exciting to you right now?"
- 💡 **Skill & Mastery:** Learning new programming languages, understanding AI, advanced digital photography
- 📖 **Preservation & Storytelling:** Family history, memoir, photo archives, recipe collections
- 🎨 **Expression & Creation:** Writing fiction, starting a hobby blog, digital art
- 🏡 **Practical & Community:** Organizing data, creating guides, home project planning

**Storage:** Save user's goal and selected focus category locally (localStorage)

#### Basic AI Integration (Gemini API)
- Simple text-only chat interface
- System prompt optimized for clarity + respect

### Phase 2: Elder Project Builder (Minutes 40-100)

This is the heart of the demo.

#### Elder-Centered Editor
- Large interactive cards instead of complex UI
- Step-by-step creation flow (like a guided wizard)
- Clear instructions that don't feel condescending

#### Starter Project Template (Focus on ONE for MVP)

**"Family Narrative Archive"** (Preservation & Storytelling 📖)
- Prompts the user for details (date, story summary) about a photo/memory
- Organizes the input into a structured, digital story card
- Suitable for an online album or sharing with family

*Alternative templates for future development:*
- "My First Tech Explainer" (Skill & Mastery 💡)
- "Digital Hobby Blog" (Expression & Creation 🎨)
- "Community Resource Guide" (Practical & Community 🏡)

#### AI Behavior (Gemini)
- Avoids jargon unless explaining it
- Uses analogies grounded in familiar life experiences
- Checks for understanding often
- Generates a "draft" project in real time
- Gives next-step recommendations like a gentle coach

### Phase 3: Polish, Accessibility & Demo Prep (Minutes 100-120)

#### Gallery Page
- Sample projects (2-3 examples)
- Before/after: Idea → final result
- Clean, easy-to-navigate cards

#### Accessibility Polish
- Adjustable text size controls
- Dark mode option
- Error messages rewritten to be clear, human, and soft

## Tech Stack (Optimized for Speed)

**Frontend:** React + Vite, Tailwind CSS, React Router  
**Backend:** Node.js + Express, Gemini API  
**Data Persistence:** LocalStorage for MVP  
**Deployment:** Vercel (frontend), Local (backend for demo)

## AI Prompt Strategy (Elder-Only)

**System Prompt Core:**
> You are a patient, respectful technology instructor for an adult learner who may be new to digital creation. Use clear, plain language. Avoid jargon. When introducing a new concept, explain it with a gentle analogy. Never rush. Always check for understanding. Celebrate progress.

**Dynamic Prompt Elements:**
- Project context
- User's Goal and Focus Category (from onboarding)
- Step-by-step goals
- Encouragement after each completed task

## User Flow (Elder Journey)

1. **Landing Page** → User clicks to begin
2. **Onboarding Screen 1:** User inputs their creation/learning Goal
3. **Onboarding Screen 2:** User selects their Focus Category (Skill, Storytelling, Expression, or Practical)
4. **AI Conversation** → AI starts with a customized greeting based on the Goal/Focus
5. **Step-by-step Project Builder**
   - AI guides through project creation
   - AI generates the draft project
   - User reviews and edits using simple guided prompts
6. **Final project** → Option to save locally or view in gallery

## Judging Strategy

**Categories Targeted:**
- Best Beginner Hack
- No Morals Left Behind (Accessibility)
- Best Use of Gemini API
- Leveraging Gen AI

**Emotional Hook:**
> "Technology often leaves elders behind. But they have stories, wisdom, and creativity worth sharing. We built DreamForge to give them the tools, the confidence, and the platform to bring their ideas to life."

## Development Timeline (2 Hours)

- **0-10 min:** Project setup & configuration ✅
- **10-30 min:** Backend (Gemini API integration) ✅
- **30-50 min:** Frontend routing, layout, landing page
- **50-70 min:** Onboarding flow with localStorage
- **70-95 min:** Project builder with ONE template
- **95-110 min:** Gallery page with mock examples
- **110-120 min:** Final polish, testing, demo prep

## Success Metrics

**MVP Success = Demo-Ready Flow:**
1. User lands on welcoming page
2. Completes 2-screen onboarding
3. Interacts with AI coach
4. Creates ONE complete project (Family Narrative)
5. Sees result in gallery

**Stretch Goals (if time permits):**
- Dark mode fully implemented
- Text size controls
- Multiple project templates
- Export/share functionality