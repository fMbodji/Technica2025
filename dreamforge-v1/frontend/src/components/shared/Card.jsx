export default function Card({ 
  children, 
  className = '', 
  ageRange,
  onClick,
  interactive = false,
  ...props 
}) {
  const baseStyles = 'rounded-xl bg-white shadow-lg p-6 transition-all'
  const interactiveStyles = interactive 
    ? 'cursor-pointer hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2' 
    : ''
  
  // Adjust padding based on age range
  const padding = ageRange === '55+' 
    ? 'p-8' 
    : ageRange === '6-13'
    ? 'p-6'
    : 'p-6'
  
  const Component = onClick ? 'button' : 'div'
  
  return (
    <Component
      className={`${baseStyles} ${padding} ${interactiveStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  )
}
