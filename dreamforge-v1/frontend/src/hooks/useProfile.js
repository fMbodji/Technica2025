import { useState, useEffect } from 'react'
import { STORAGE_KEYS, EXPERTISE_LEVELS, AGE_RANGES } from '../utils/constants'

/**
 * Hook to manage user profile (expertise + age range)
 * Replaces the old useTier hook
 */
export function useProfile() {
  const [expertise, setExpertise] = useState(null)
  const [ageRange, setAgeRange] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load profile from localStorage
    const savedProfile = localStorage.getItem(STORAGE_KEYS.USER_PROFILE)
    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile)
        if (profile.expertise && profile.ageRange) {
          setExpertise(profile.expertise)
          setAgeRange(profile.ageRange)
        }
      } catch (error) {
        console.error('Error loading profile:', error)
      }
    } else {
      // Try legacy format for backward compatibility
      const legacyExpertise = localStorage.getItem(STORAGE_KEYS.EXPERTISE)
      const legacyAgeRange = localStorage.getItem(STORAGE_KEYS.AGE_RANGE)
      if (legacyExpertise && legacyAgeRange) {
        setExpertise(legacyExpertise)
        setAgeRange(legacyAgeRange)
        // Migrate to new format
        saveProfile(legacyExpertise, legacyAgeRange)
      }
    }
    setLoading(false)
  }, [])

  const saveProfile = (newExpertise, newAgeRange) => {
    if (Object.values(EXPERTISE_LEVELS).includes(newExpertise) && 
        Object.values(AGE_RANGES).includes(newAgeRange)) {
      const profile = {
        expertise: newExpertise,
        ageRange: newAgeRange,
        createdAt: new Date().toISOString()
      }
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile))
      localStorage.setItem(STORAGE_KEYS.EXPERTISE, newExpertise)
      localStorage.setItem(STORAGE_KEYS.AGE_RANGE, newAgeRange)
      setExpertise(newExpertise)
      setAgeRange(newAgeRange)
    }
  }

  const clearProfile = () => {
    localStorage.removeItem(STORAGE_KEYS.USER_PROFILE)
    localStorage.removeItem(STORAGE_KEYS.EXPERTISE)
    localStorage.removeItem(STORAGE_KEYS.AGE_RANGE)
    setExpertise(null)
    setAgeRange(null)
  }

  // Get UI preferences based on profile
  const getUIPreferences = () => {
    if (!expertise || !ageRange) return null

    const fontSizeMap = {
      '6-13': 16,
      '14-17': 14,
      '18-24': 14,
      '25-54': 16,
      '55+': 24
    }

    const spacingMap = {
      '6-13': 'normal',
      '14-17': 'compact',
      '18-24': 'compact',
      '25-54': 'normal',
      '55+': 'generous'
    }

    return {
      fontSize: fontSizeMap[ageRange] || 16,
      spacing: spacingMap[ageRange] || 'normal',
      enableVoice: ageRange === '6-13' || ageRange === '55+',
      colorScheme: expertise === 'beginner' ? 'playful' : 
                   expertise === 'intermediate' ? 'balanced' : 'minimal'
    }
  }

  return {
    expertise,
    ageRange,
    saveProfile,
    clearProfile,
    loading,
    isComplete: expertise && ageRange,
    uiPreferences: getUIPreferences()
  }
}

