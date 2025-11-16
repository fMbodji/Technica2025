import { useState, useEffect } from 'react'
import { STORAGE_KEYS, TIERS } from '../utils/constants'

export function useTier() {
  const [tier, setTier] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load tier from localStorage
    const savedTier = localStorage.getItem(STORAGE_KEYS.TIER)
    if (savedTier && Object.values(TIERS).includes(savedTier)) {
      setTier(savedTier)
    }
    setLoading(false)
  }, [])

  const selectTier = (selectedTier) => {
    if (Object.values(TIERS).includes(selectedTier)) {
      localStorage.setItem(STORAGE_KEYS.TIER, selectedTier)
      setTier(selectedTier)
    }
  }

  const clearTier = () => {
    localStorage.removeItem(STORAGE_KEYS.TIER)
    setTier(null)
  }

  return { tier, selectTier, clearTier, loading }
}

