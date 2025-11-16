// ═══════════════════════════════════════════════════════════════════════
// DreamForge Application Constants
// NEW TIER SYSTEM: Expertise Level + Age Range
// ═══════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════
// EXPERTISE LEVELS (Primary dimension)
// ═══════════════════════════════════════════════════════════════════════
export const EXPERTISE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
}

export const EXPERTISE_LABELS = {
  [EXPERTISE_LEVELS.BEGINNER]: 'Beginner',
  [EXPERTISE_LEVELS.INTERMEDIATE]: 'Intermediate',
  [EXPERTISE_LEVELS.ADVANCED]: 'Advanced'
}

export const EXPERTISE_DESCRIPTIONS = {
  [EXPERTISE_LEVELS.BEGINNER]: 'Just starting out with coding',
  [EXPERTISE_LEVELS.INTERMEDIATE]: 'Some coding experience',
  [EXPERTISE_LEVELS.ADVANCED]: 'Experienced developer'
}

export const EXPERTISE_ICONS = {
  [EXPERTISE_LEVELS.BEGINNER]: '🌱',
  [EXPERTISE_LEVELS.INTERMEDIATE]: '🚀',
  [EXPERTISE_LEVELS.ADVANCED]: '⚡'
}

// ═══════════════════════════════════════════════════════════════════════
// AGE RANGES (Secondary dimension)
// ═══════════════════════════════════════════════════════════════════════
export const AGE_RANGES = {
  CHILD: '6-13',
  TEEN: '14-17',
  YOUNG_ADULT: '18-24',
  ADULT: '25-54',
  SENIOR: '55+'
}

export const AGE_RANGE_LABELS = {
  [AGE_RANGES.CHILD]: '6-13 years',
  [AGE_RANGES.TEEN]: '14-17 years',
  [AGE_RANGES.YOUNG_ADULT]: '18-24 years',
  [AGE_RANGES.ADULT]: '25-54 years',
  [AGE_RANGES.SENIOR]: '55+ years'
}

export const AGE_RANGE_DESCRIPTIONS = {
  [AGE_RANGES.CHILD]: 'Elementary & Middle School',
  [AGE_RANGES.TEEN]: 'High School',
  [AGE_RANGES.YOUNG_ADULT]: 'College & Early Career',
  [AGE_RANGES.ADULT]: 'Professional',
  [AGE_RANGES.SENIOR]: 'Lifelong Learner'
}

export const AGE_RANGE_ICONS = {
  [AGE_RANGES.CHILD]: '🎈',
  [AGE_RANGES.TEEN]: '🎯',
  [AGE_RANGES.YOUNG_ADULT]: '🎓',
  [AGE_RANGES.ADULT]: '💼',
  [AGE_RANGES.SENIOR]: '🌟'
}

// ═══════════════════════════════════════════════════════════════════════
// INTERESTS (for personalization)
// ═══════════════════════════════════════════════════════════════════════
export const INTERESTS = {
  GAMING: 'gaming',
  ART: 'art',
  MUSIC: 'music',
  SCIENCE: 'science',
  WRITING: 'writing',
  SPORTS: 'sports',
  COOKING: 'cooking',
  GARDENING: 'gardening',
  PHOTOGRAPHY: 'photography',
  EDUCATION: 'education',
  BUSINESS: 'business',
  SOCIAL: 'social'
}

export const INTEREST_LABELS = {
  [INTERESTS.GAMING]: 'Gaming 🎮',
  [INTERESTS.ART]: 'Art & Design 🎨',
  [INTERESTS.MUSIC]: 'Music 🎵',
  [INTERESTS.SCIENCE]: 'Science 🔬',
  [INTERESTS.WRITING]: 'Writing 📝',
  [INTERESTS.SPORTS]: 'Sports ⚽',
  [INTERESTS.COOKING]: 'Cooking 🍳',
  [INTERESTS.GARDENING]: 'Gardening 🌱',
  [INTERESTS.PHOTOGRAPHY]: 'Photography 📸',
  [INTERESTS.EDUCATION]: 'Education 📚',
  [INTERESTS.BUSINESS]: 'Business 💼',
  [INTERESTS.SOCIAL]: 'Social Impact 🤝'
}

// ═══════════════════════════════════════════════════════════════════════
// PROJECT TEMPLATES (will vary by expertise + age)
// ═══════════════════════════════════════════════════════════════════════
export const PROJECT_TEMPLATES = {
  // Beginner templates
  BEGINNER: {
    'personal-page': {
      name: 'Personal Page',
      description: 'Create a page about yourself',
      difficulty: 'beginner',
      icon: '👤'
    },
    'interactive-story': {
      name: 'Interactive Story',
      description: 'Build a choose-your-own-adventure story',
      difficulty: 'beginner',
      icon: '📖'
    },
    'simple-game': {
      name: 'Simple Game',
      description: 'Create a fun browser game',
      difficulty: 'beginner',
      icon: '🎮'
    }
  },
  // Intermediate templates
  INTERMEDIATE: {
    'todo-app': {
      name: 'Todo App',
      description: 'Build a task management application',
      difficulty: 'intermediate',
      icon: '✅'
    },
    'weather-app': {
      name: 'Weather App',
      description: 'Create an app that shows weather data',
      difficulty: 'intermediate',
      icon: '🌤️'
    },
    'blog-platform': {
      name: 'Blog Platform',
      description: 'Build a blogging website',
      difficulty: 'intermediate',
      icon: '📝'
    }
  },
  // Advanced templates
  ADVANCED: {
    'fullstack-app': {
      name: 'Full-Stack App',
      description: 'Build a complete application with backend',
      difficulty: 'advanced',
      icon: '🚀'
    },
    'api-integration': {
      name: 'API Integration',
      description: 'Connect to external APIs and services',
      difficulty: 'advanced',
      icon: '🔌'
    },
    'data-visualization': {
      name: 'Data Visualization',
      description: 'Create interactive data dashboards',
      difficulty: 'advanced',
      icon: '📊'
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════
// LOCAL STORAGE KEYS
// ═══════════════════════════════════════════════════════════════════════
export const STORAGE_KEYS = {
  EXPERTISE: 'dreamforge_expertise',
  AGE_RANGE: 'dreamforge_age_range',
  INTERESTS: 'dreamforge_interests',
  PROJECTS: 'dreamforge_projects',
  CURRENT_PROJECT: 'dreamforge_current_project',
  USER_PROFILE: 'dreamforge_user_profile'
}

// ═══════════════════════════════════════════════════════════════════════
// API ENDPOINTS
// ═══════════════════════════════════════════════════════════════════════
export const API_ENDPOINTS = {
  CHAT: '/api/ai/chat',
  PROJECTS: '/api/projects',
  PERSONA: '/api/ai/persona'
}

// ═══════════════════════════════════════════════════════════════════════
// BACKWARD COMPATIBILITY (for gradual migration)
// ═══════════════════════════════════════════════════════════════════════
export const TIERS = {
  // Map old tier system to new system
  MIDDLE_SCHOOL: 'middleSchool', // Will be migrated to beginner + 6-13
  ELDER: 'elder' // Will be migrated to beginner + 55+
}

