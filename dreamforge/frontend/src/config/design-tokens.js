/**
 * Design Tokens for DreamForge
 * DEPRECATED: Use colors.js instead
 * This file is kept for backward compatibility only
 */

// Import new color system
import { colors as newColors, typography as newTypography } from './colors'

// Re-export for backward compatibility
export const colors = {
  // New vibrant colors from logo
  darkPurple: newColors.brand.darkPurple,
  lightPurple: newColors.brand.lightPurple,
  lightOrange: newColors.brand.lightOrange,
  starOrange: newColors.brand.starOrange,

  // Kept for legacy support
  primary: newColors.brand.darkPurple,
  secondary: newColors.brand.lightOrange,
  accent: newColors.brand.starOrange,
  cream: newColors.neutral.offWhite,
  warmGray: newColors.neutral.lightGray,
  navy: newColors.brand.darkPurple
}

export const typography = {
  heading: newTypography.heading,
  body: newTypography.body,
  code: newTypography.code
}

// Updated spacing for new tier system
export const spacing = {
  beginner: {
    base: '16px',
    padding: '1.5rem',
    gap: '1rem'
  },
  intermediate: {
    base: '14px',
    padding: '1.25rem',
    gap: '0.875rem'
  },
  advanced: {
    base: '14px',
    padding: '1.25rem',
    gap: '0.875rem'
  },
  // Age-based overrides
  age_6_13: {
    base: '16px',
    padding: '1.5rem',
    gap: '1rem'
  },
  age_55_plus: {
    base: '20px',
    padding: '2rem',
    gap: '1.5rem'
  }
}

export const borderRadius = {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem'
}

