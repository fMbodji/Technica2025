DreamForge - Hackathon Project Architecture

Main Identity & Tone

Core Identity
"Empowering creation across generations" — A bridge between aspiration and achievement, accessible to all ages and skill levels.

Tone
Warm & Encouraging: Like a patient mentor who believes in you
Accessible & Clear: No jargon unless teaching it intentionally
Celebratory: Every small win matters
Adaptive: Professional for college students, playful for kids, respectful for elders

Design Philosophy
"Clarity through simplicity, warmth through color"

Color Palette:

Primary: Soft purple/lavender (#8B7AB8) - creativity & wisdom across ages
Secondary: Warm coral (#FF8E72) - energy & enthusiasm
Accent: Gold (#F4C430) - achievement & celebration
Neutrals: Cream (#F5F1E8), Warm Gray (#E5E1DA), Deep Navy (#2C3E50)


Typography:

Headings: Outfit or Space Grotesk (friendly, modern, geometric)
Body: Inter or DM Sans (highly readable, professional)
Code blocks: JetBrains Mono (when showing code examples)


Visual Style:

Rounded corners (warmth, approachability)
Generous white space (reduces cognitive load)
Soft shadows (depth without harshness)
Age-appropriate iconography for each tier




Project Structure
dreamforge/
├── PLAN.md (this file)
├── README.md
├── DEMO_SCRIPT.md
├── SETUP.md
├── .cursorrules
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── shared/          # Universal components
│   │   │   ├── tiers/           # Age-specific components
│   │   │   │   ├── MiddleSchool/
│   │   │   │   ├── HighSchool/
│   │   │   │   ├── College/
│   │   │   │   └── Elder/
│   │   │   └── ai-chat/         # AI interaction interface
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── TierSelection.jsx
│   │   │   ├── ProjectBuilder.jsx
│   │   │   └── Gallery.jsx
│   │   ├── utils/
│   │   ├── styles/
│   │   └── config/
│   │       └── design-tokens.js  # Color palette, typography
│   └── public/
├── backend/
│   ├── api/
│   │   ├── ai-service.js        # Claude API integration
│   │   ├── projects.js
│   │   └── users.js
│   └── prompts/
│       └── tier-specific-prompts.js
└── demo/
    └── sample-projects/         # Pre-built examples for each tier

MVP Feature Breakdown (Hackathon Scope)
Phase 1: Core Foundation (Hours 1-6)
Goal: Get the basic architecture running
✅ Landing Page

Hero section with tagline and value prop
Age selection cards (4 tiers)
Quick demo video/GIF placeholder

✅ Tier Selection System

User picks their age group
Brief onboarding (2-3 questions about interests)
Stores preference in session/local storage

✅ Basic AI Integration

Connect to Claude API (or GPT-4 as backup)
Simple chat interface
Tier-specific system prompts loaded

Phase 2: Two Working Tiers (Hours 7-16)
Goal: Fully implement 2 tiers for maximum contrast
✅ Middle School Tier

Visual block-based interface (React DnD or similar)
3 starter project templates:

"My Pet Game"
"Dream Bedroom Designer"
"Superhero Story Creator"


AI that suggests next blocks
Live preview pane
Achievement badges (collect 3-5 during hackathon)

✅ Elder Tier

Large, high-contrast UI
Voice input option (Web Speech API)
3 starter project templates:

"Family Recipe Collection"
"Memory Photo Album"
"Hobby Blog"


AI explains in plain language (no jargon mode)
Step-by-step progress tracker
"Help me understand" button

Phase 3: Polish & Demo Prep (Hours 17-24)
Goal: Make it presentable and story-worthy
✅ Gallery/Showcase

Display sample projects from each tier
Before/after: idea → built project

✅ Demo Script

2-minute walkthrough
Show both tiers in action
Have pre-recorded backup in case of wifi issues

✅ Branding & UI Polish

Consistent color scheme across all pages
Smooth transitions
Loading states with encouraging messages
Error handling with helpful guidance


Tech Stack (Hackathon-Optimized)
Frontend

Framework: React + Vite (fast setup)
Styling: Tailwind CSS (rapid UI development)
UI Components: shadcn/ui (pre-built, customizable)
Drag & Drop: @dnd-kit/core (for middle school tier)
Icons: Lucide React

Backend

Runtime: Node.js + Express (simple, fast)
AI Integration: Anthropic Claude API
Database: Firebase/Supabase (quick setup, real-time) or skip DB entirely and use localStorage for MVP
Hosting: Vercel (frontend) + Railway/Render (backend)

Additional Tools

Voice Input: Web Speech API (browser native)
Code Preview: CodeMirror or Monaco Editor
Collaboration: GitHub for version control


AI Prompt Engineering Strategy
System Prompts by Tier
Middle School:
You are an enthusiastic, patient coding buddy for a middle school student. 
Use simple language, lots of encouragement, and relate everything to things 
kids care about (games, friends, fun). When they get stuck, ask questions 
that help them discover the answer. Celebrate every small win! Use emojis 
occasionally. Never overwhelm them with technical jargon.
Elder:
You are a respectful, patient technology teacher for an adult learner who 
may be new to coding. Use clear, plain language without technical jargon 
unless you explain it first. Go slowly, check for understanding often, and 
celebrate progress. Relate concepts to familiar real-world experiences. 
Be encouraging but never condescending. Assume they have valuable life 
experience and wisdom to bring to their projects.
Dynamic Prompt Components

Interest integration: "Since you love [their interest], let's make your [project] about that!"
Error handling: "I notice [error]. This happens because [simple explanation]. Let's fix it together by [step]."
Next steps: "Great! You just [achievement]. Ready to add [next feature]?"


User Flows
Middle School Student Journey

Land on site → sees colorful, fun design
Click "I'm in Middle School"
Quick quiz: "What do you love?" (gaming/art/animals/sports)
Presented with 3 project ideas matching their interest
Pick one → AI chat opens with encouraging message
Build project with block-based interface + AI suggestions
Preview updates in real-time
Complete → unlock badge, option to share or start new project

Elder Journey

Land on site → sees clean, clear design with larger text
Click "I'm exploring technology later in life"
Warm welcome: "What would you like to create?"
Voice or text input their idea
AI asks clarifying questions gently
Step-by-step guided building process
Can pause anytime and return later
Complete → option to share with family via email/link


Judging Strategy & Demo Flow
Opening Hook (30 seconds)
"My grandmother has incredible stories. My little cousin has wild game ideas. But between 'I wish I could build that' and actually building it? There's a canyon. DreamForge is the bridge."
Live Demo (2 minutes)

Show Middle School tier:

"Meet Alex, 13, wants to build a game about their cat"
Show AI suggesting blocks, live preview, achievement unlock


Show Elder tier:

"Meet Margaret, 68, wants to share her garden wisdom"
Show voice input, plain-language explanation, gentle pacing


Side-by-side comparison:

Same core technology, completely different experience
Highlight adaptive UI, tone, complexity



Impact Statement (30 seconds)
"We're not just teaching code—we're unlocking human potential at every age. Because the next great idea could come from a dorm room, a classroom, or a retirement home."

Risk Mitigation
Technical Risks

AI API fails during demo: Pre-record video backup, use mock responses
Drag-and-drop bugs: Have fallback text-based input
Hosting issues: Local demo ready, screenshots prepared

Scope Risks

Too ambitious: Focus on 2 tiers done well > 4 tiers done poorly
Feature creep: Keep "nice to have" list separate from MVP
Time management: Allocate last 4 hours purely for polish and demo prep


Success Metrics (For Pitch)
Quantitative

"Built 6 working project templates across 2 age groups"
"AI adapts conversation style based on 4 distinct user personas"
"Functional prototype in 24 hours"

Qualitative

"Tested with actual middle schooler and elder during development"
"Every interaction is encouraging, never condescending"
"From idea to working project in under 15 minutes"


Post-Hackathon Vision (Mention in Pitch)

Expand to all 4 tiers
Community gallery where learners share projects
Mentorship matching (college students help elders, earn service hours)
School/library partnerships
Multilingual support
Offline mode for low-connectivity areas


Team Roles (Adapt to Your Team)

Frontend Lead: UI/UX for both tiers, responsive design
Backend/AI Lead: Claude API integration, prompt engineering
Design Lead: Branding, visual consistency, demo materials
Full-Stack: Bridges frontend/backend, deployment
Demo Lead: Script writing, presentation practice, backup plans


Timeline (24-Hour Hackathon)
TimeFocusDeliverable0-2hSetup & ArchitectureRepo structure, design system, API keys2-6hLanding + Tier SelectionWorking navigation, basic AI chat6-12hMiddle School TierBlock interface, 2 templates, AI integration12-18hElder TierVoice input, 2 templates, large UI18-21hGallery + IntegrationSample projects, polish both tiers21-23hDemo PrepScript, practice, video backup23-24hBufferBug fixes, final polish

Key Differentiators (Why We'll Win)
✨ Empathy-driven design: Not just "accessible" but genuinely adaptive
✨ Tackles real exclusion: Addresses ageism in tech from both directions
✨ Working prototype: Not just slides, actual functional demo
✨ Scalable vision: Clear path from MVP to impactful product
✨ Emotional resonance: Every judge knows someone this would help

Development Notes
Priority Order

Get basic landing + tier selection working FIRST
Then focus on ONE tier completely (suggest Middle School - easier to demo)
Then add Elder tier
Polish comes LAST (resist the urge to perfect early)

Common Pitfalls to Avoid

Don't build all 4 tiers - you won't finish
Don't over-engineer the backend - localStorage is fine for MVP
Don't spend too long on animations - functionality > flash
Don't skip the demo practice - rehearse 10+ times

Quick Wins

Use shadcn/ui components (pre-styled, accessible)
Copy tier-specific prompts directly from this doc
Have fallback mock AI responses ready
Take screenshots every 2 hours (backup for demo)