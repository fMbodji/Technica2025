import { getUIPreferences } from '../../../config/colors'

/**
 * AdaptiveButton Component
 * Automatically adjusts size, color, and style based on expertise level and age range
 *
 * Props:
 * - expertise: 'beginner', 'intermediate', 'advanced'
 * - ageRange: '6-13', '14-17', '18-24', '25-54', '55+'
 * - variant: 'primary', 'secondary', 'accent', 'outline'
 * - size: 'auto' (default, uses age-based sizing) or 'sm', 'md', 'lg', 'xl'
 * - children: Button content
 * - className: Additional CSS classes
 * - ...props: Any other button props (onClick, disabled, etc.)
 */
export default function AdaptiveButton({
  expertise = 'beginner',
  ageRange = '18-24',
  variant = 'primary',
  size = 'auto',
  children,
  className = '',
  ...props
}) {
  const uiPrefs = getUIPreferences(expertise, ageRange)

  // Size mapping based on age range (when size='auto')
  const getSizeClasses = () => {
    if (size !== 'auto') {
      const manualSizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-6 text-xl'
      }
      return manualSizes[size]
    }

    // Auto-sizing based on age range
    const ageSizeMap = {
      '6-13': 'px-8 py-4 text-lg',      // Large, easy to tap
      '14-17': 'px-6 py-3 text-base',   // Standard
      '18-24': 'px-6 py-3 text-base',   // Standard
      '25-54': 'px-6 py-3 text-base',   // Standard
      '55+': 'px-10 py-6 text-xl'       // Extra large, very easy to tap
    }

    return ageSizeMap[ageRange] || 'px-6 py-3 text-base'
  }

  // Color classes based on expertise and variant
  const getColorClasses = () => {
    const colorSchemes = {
      beginner: {
        primary: 'bg-beginner-primary hover:bg-beginner-accent text-white',
        secondary: 'bg-beginner-secondary hover:bg-beginner-primary text-dark-gray',
        accent: 'bg-beginner-accent hover:bg-beginner-primary text-white',
        outline: 'bg-transparent border-2 border-beginner-primary text-beginner-primary hover:bg-beginner-primary hover:text-white'
      },
      intermediate: {
        primary: 'bg-intermediate-secondary hover:bg-intermediate-primary text-white',
        secondary: 'bg-intermediate-primary hover:bg-intermediate-secondary text-white',
        accent: 'bg-intermediate-accent hover:bg-intermediate-primary text-white',
        outline: 'bg-transparent border-2 border-intermediate-secondary text-intermediate-secondary hover:bg-intermediate-secondary hover:text-white'
      },
      advanced: {
        primary: 'bg-advanced-primary hover:bg-advanced-accent text-white',
        secondary: 'bg-advanced-secondary hover:bg-advanced-primary text-white',
        accent: 'bg-advanced-accent hover:bg-advanced-secondary text-dark-gray',
        outline: 'bg-transparent border-2 border-advanced-primary text-advanced-primary hover:bg-advanced-primary hover:text-white'
      }
    }

    return colorSchemes[expertise]?.[variant] || colorSchemes.beginner.primary
  }

  // Border radius based on age (younger = more rounded, playful)
  const getBorderRadius = () => {
    const radiusMap = {
      '6-13': 'rounded-2xl',
      '14-17': 'rounded-xl',
      '18-24': 'rounded-xl',
      '25-54': 'rounded-lg',
      '55+': 'rounded-xl' // High radius for clear button boundaries
    }
    return radiusMap[ageRange] || 'rounded-xl'
  }

  const sizeClasses = getSizeClasses()
  const colorClasses = getColorClasses()
  const radiusClasses = getBorderRadius()

  return (
    <button
      className={`
        ${sizeClasses}
        ${colorClasses}
        ${radiusClasses}
        font-semibold
        transition-all duration-300
        shadow-soft hover:shadow-medium
        transform hover:scale-105
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
