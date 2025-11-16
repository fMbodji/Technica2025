// Application constants - Updated for expertise + age system

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
  [EXPERTISE_LEVELS.BEGINNER]: "I'm new to creating things with technology",
  [EXPERTISE_LEVELS.INTERMEDIATE]: "I've built a few projects before",
  [EXPERTISE_LEVELS.ADVANCED]: "I'm comfortable with coding and development"
}

export const AGE_RANGES = {
  YOUNG: '6-13',
  TEEN: '14-17',
  YOUNG_ADULT: '18-24',
  ADULT: '25-54',
  SENIOR: '55+'
}

export const AGE_RANGE_LABELS = {
  [AGE_RANGES.YOUNG]: 'Elementary/Middle School',
  [AGE_RANGES.TEEN]: 'High School',
  [AGE_RANGES.YOUNG_ADULT]: 'College/University',
  [AGE_RANGES.ADULT]: 'Professional/Adult',
  [AGE_RANGES.SENIOR]: 'Experienced Adult'
}

export const AGE_RANGE_DESCRIPTIONS = {
  [AGE_RANGES.YOUNG]: 'Ages 6-13',
  [AGE_RANGES.TEEN]: 'Ages 14-17',
  [AGE_RANGES.YOUNG_ADULT]: 'Ages 18-24',
  [AGE_RANGES.ADULT]: 'Ages 25-54',
  [AGE_RANGES.SENIOR]: 'Ages 55+'
}

// Legacy tier constants (for backward compatibility during migration)
export const TIERS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
}

export const INTERESTS = {
  GAMING: 'gaming',
  ART: 'art',
  ANIMALS: 'animals',
  SPORTS: 'sports',
  SCIENCE: 'science',
  MUSIC: 'music',
  WRITING: 'writing'
}

export const INTEREST_LABELS = {
  [INTERESTS.GAMING]: 'Gaming 🎮',
  [INTERESTS.ART]: 'Art 🎨',
  [INTERESTS.ANIMALS]: 'Animals 🐾',
  [INTERESTS.SPORTS]: 'Sports ⚽',
  [INTERESTS.SCIENCE]: 'Science 🔬',
  [INTERESTS.MUSIC]: 'Music 🎵',
  [INTERESTS.WRITING]: 'Writing ✍️'
}

export const STORAGE_KEYS = {
  EXPERTISE: 'dreamforge_expertise',
  AGE_RANGE: 'dreamforge_ageRange',
  INTERESTS: 'dreamforge_interests',
  PROJECTS: 'dreamforge_projects',
  CURRENT_PROJECT: 'dreamforge_current_project',
  USER_PROFILE: 'dreamforge_userProfile'
}

export const API_ENDPOINTS = {
  CHAT: '/api/ai/chat',
  PROJECTS: '/api/projects'
}
