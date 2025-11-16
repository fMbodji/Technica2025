import { getUIPreferences } from '../../../config/colors'

/**
 * AdaptiveCard Component
 * Container that adapts styling based on expertise level and age range
 *
 * Props:
 * - expertise: 'beginner', 'intermediate', 'advanced'
 * - ageRange: '6-13', '14-17', '18-24', '25-54', '55+'
 * - variant: 'default', 'elevated', 'bordered', 'flat'
 * - padding: 'auto' (age-based) or 'sm', 'md', 'lg', 'xl'
 * - children: Card content
 * - className: Additional CSS classes
 * - ...props: Any other div props
 */
export default function AdaptiveCard({
  expertise = 'beginner',
  ageRange = '18-24',
  variant = 'default',
  padding = 'auto',
  children,
  className = '',
  ...props
}) {
  const uiPrefs = getUIPreferences(expertise, ageRange)

  // Padding based on age range (when padding='auto')
  const getPaddingClasses = () => {
    if (padding !== 'auto') {
      const manualPadding = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10'
      }
      return manualPadding[padding]
    }

    // Auto-padding based on age range
    const agePaddingMap = {
      '6-13': 'p-6',     // Generous padding
      '14-17': 'p-5',    // Moderate
      '18-24': 'p-5',    // Moderate
      '25-54': 'p-5',    // Moderate
      '55+': 'p-8'       // Extra generous for readability
    }

    return agePaddingMap[ageRange] || 'p-6'
  }

  // Background and border colors based on expertise
  const getColorClasses = () => {
    const colorSchemes = {
      beginner: {
        bg: 'bg-white',
        border: 'border-beginner-secondary',
        text: 'text-dark-gray'
      },
      intermediate: {
        bg: 'bg-intermediate-bg',
        border: 'border-intermediate-primary',
        text: 'text-dark-gray'
      },
      advanced: {
        bg: 'bg-advanced-bg',
        border: 'border-advanced-primary',
        text: 'text-light-gray'
      }
    }

    return colorSchemes[expertise] || colorSchemes.beginner
  }

  // Variant-specific styling
  const getVariantClasses = (colors) => {
    const variants = {
      default: `${colors.bg} ${colors.text} shadow-soft`,
      elevated: `${colors.bg} ${colors.text} shadow-medium hover:shadow-strong transition-shadow duration-300`,
      bordered: `${colors.bg} ${colors.text} border-2 ${colors.border}`,
      flat: `${colors.bg} ${colors.text}`
    }

    return variants[variant] || variants.default
  }

  // Border radius based on age and expertise
  const getBorderRadius = () => {
    // Younger ages and beginner tier = more rounded (playful)
    if (ageRange === '6-13' || expertise === 'beginner') {
      return 'rounded-3xl'
    }
    if (ageRange === '55+') {
      return 'rounded-2xl' // Clear, defined boundaries
    }
    return 'rounded-2xl'
  }

  // Gap between elements (if using flex/grid inside)
  const getGapClasses = () => {
    const gapMap = {
      '6-13': 'gap-4',
      '14-17': 'gap-3',
      '18-24': 'gap-3',
      '25-54': 'gap-3',
      '55+': 'gap-6'
    }
    return gapMap[ageRange] || 'gap-3'
  }

  const paddingClasses = getPaddingClasses()
  const colors = getColorClasses()
  const variantClasses = getVariantClasses(colors)
  const radiusClasses = getBorderRadius()
  const gapClasses = getGapClasses()

  return (
    <div
      className={`
        ${paddingClasses}
        ${variantClasses}
        ${radiusClasses}
        ${gapClasses}
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
