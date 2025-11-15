export default function Card({ 
  children, 
  className = '', 
  tier,
  onClick,
  interactive = false,
  ...props 
}) {
  const baseStyles = 'rounded-xl bg-white shadow-lg p-6 transition-all'
  const interactiveStyles = interactive 
    ? 'cursor-pointer hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2' 
    : ''
  
  // Adjust padding for elder tier
  const padding = tier === 'elder' ? 'p-8' : 'p-6'
  
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

