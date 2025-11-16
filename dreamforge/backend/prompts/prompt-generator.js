/**
 * Dynamic System Prompt Generator
 * Generates AI system prompts based on expertise level and age range
 */

const EXPERTISE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
}

const AGE_RANGES = {
  YOUNG: '6-13',
  TEEN: '14-17',
  YOUNG_ADULT: '18-24',
  ADULT: '25-54',
  SENIOR: '55+'
}

/**
 * Generate system prompt based on expertise and age range
 * @param {string} expertise - 'beginner' | 'intermediate' | 'advanced'
 * @param {string} ageRange - '6-13' | '14-17' | '18-24' | '25-54' | '55+'
 * @returns {string} Customized system prompt
 */
export function generateSystemPrompt(expertise, ageRange) {
  // Validate inputs
  if (!Object.values(EXPERTISE_LEVELS).includes(expertise)) {
    expertise = EXPERTISE_LEVELS.BEGINNER
  }
  if (!Object.values(AGE_RANGES).includes(ageRange)) {
    ageRange = AGE_RANGES.YOUNG_ADULT
  }

  // Base templates for each expertise level
  const expertiseBases = {
    [EXPERTISE_LEVELS.BEGINNER]: {
      role: 'patient teacher',
      approach: 'step-by-step guidance',
      language: 'simple, clear language',
      pace: 'go slowly'
    },
    [EXPERTISE_LEVELS.INTERMEDIATE]: {
      role: 'helpful mentor',
      approach: 'balanced guidance with challenges',
      language: 'clear explanations with some technical terms',
      pace: 'moderate pace'
    },
    [EXPERTISE_LEVELS.ADVANCED]: {
      role: 'knowledgeable peer',
      approach: 'technical discussions and best practices',
      language: 'technical terminology appropriately',
      pace: 'efficient, direct'
    }
  }

  // Age-specific tone and style adjustments
  const ageAdjustments = {
    [AGE_RANGES.YOUNG]: {
      tone: 'enthusiastic, fun, and playful',
      style: 'Use emojis occasionally. Celebrate every win! Make learning feel like playing.',
      language: 'simple words, relate to games and fun activities',
      respect: 'treat them as capable learners'
    },
    [AGE_RANGES.TEEN]: {
      tone: 'casual, relatable, and engaging',
      style: 'Use modern references. Be cool but not trying too hard.',
      language: 'relatable language, reference pop culture when appropriate',
      respect: 'treat them as smart, capable individuals'
    },
    [AGE_RANGES.YOUNG_ADULT]: {
      tone: 'professional but friendly',
      style: 'Academic tone, reference industry standards and modern frameworks.',
      language: 'professional language with clear explanations',
      respect: 'treat them as peers learning together'
    },
    [AGE_RANGES.ADULT]: {
      tone: 'professional and efficient',
      style: 'Respect their time. Reference professional applications and career-relevant skills.',
      language: 'efficient, clear, career-focused',
      respect: 'acknowledge their professional experience'
    },
    [AGE_RANGES.SENIOR]: {
      tone: 'patient, respectful, and clear',
      style: 'Never condescending. Relate concepts to familiar real-world experiences.',
      language: 'plain language without jargon unless explained first',
      respect: 'assume they have valuable life experience and wisdom'
    }
  }

  const base = expertiseBases[expertise]
  const adjustment = ageAdjustments[ageRange]

  // Build the prompt
  let prompt = `You are a ${base.role} for a ${expertise}-level learner in the ${ageRange} age range. `

  // Add expertise-specific guidance
  if (expertise === EXPERTISE_LEVELS.BEGINNER) {
    prompt += `Use ${base.language} without technical jargon unless you explain it first. ${base.approach}. ${base.pace} and check for understanding often. `
  } else if (expertise === EXPERTISE_LEVELS.INTERMEDIATE) {
    prompt += `Use ${base.language}. ${base.approach}. Balance technical accuracy with clear explanations. `
  } else {
    prompt += `Use ${base.language}. ${base.approach}. Reference industry standards and modern frameworks. Challenge them with complex concepts when appropriate. `
  }

  // Add age-specific tone
  prompt += `Your tone should be ${adjustment.tone}. ${adjustment.style} `

  // Add language guidance
  prompt += `Use ${adjustment.language}. `

  // Add respect and encouragement
  prompt += `${adjustment.respect}. Be encouraging and celebrate progress. `

  // Special considerations
  if (ageRange === AGE_RANGES.YOUNG) {
    prompt += `When they get stuck, ask questions that help them discover the answer. Use lots of encouragement! `
  } else if (ageRange === AGE_RANGES.SENIOR) {
    prompt += `Go slowly, check for understanding frequently, and never assume prior technical knowledge. `
  } else if (ageRange === AGE_RANGES.ADULT) {
    prompt += `Be efficient and respect their time. Focus on practical, applicable knowledge. `
  }

  // Final instruction
  prompt += `Always adapt your responses to help them learn and succeed.`

  return prompt
}

/**
 * Get UI preferences based on expertise and age
 * @param {string} expertise 
 * @param {string} ageRange 
 * @returns {object} UI preferences
 */
export function getUIPreferences(expertise, ageRange) {
  const fontSizeMap = {
    [AGE_RANGES.YOUNG]: 16,
    [AGE_RANGES.TEEN]: 14,
    [AGE_RANGES.YOUNG_ADULT]: 14,
    [AGE_RANGES.ADULT]: 16,
    [AGE_RANGES.SENIOR]: 24
  }

  const spacingMap = {
    [AGE_RANGES.YOUNG]: 'normal',
    [AGE_RANGES.TEEN]: 'compact',
    [AGE_RANGES.YOUNG_ADULT]: 'compact',
    [AGE_RANGES.ADULT]: 'normal',
    [AGE_RANGES.SENIOR]: 'generous'
  }

  const enableVoice = ageRange === AGE_RANGES.YOUNG || ageRange === AGE_RANGES.SENIOR

  const colorSchemeMap = {
    [EXPERTISE_LEVELS.BEGINNER]: 'playful',
    [EXPERTISE_LEVELS.INTERMEDIATE]: 'balanced',
    [EXPERTISE_LEVELS.ADVANCED]: 'minimal'
  }

  return {
    fontSize: fontSizeMap[ageRange] || 16,
    spacing: spacingMap[ageRange] || 'normal',
    enableVoice,
    colorScheme: colorSchemeMap[expertise] || 'balanced'
  }
}

export { EXPERTISE_LEVELS, AGE_RANGES }

