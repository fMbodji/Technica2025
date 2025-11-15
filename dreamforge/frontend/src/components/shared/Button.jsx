export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  tier,
  className = '',
  disabled = false,
  ...props 
}) {
  const baseStyles = 'rounded-lg transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    accent: 'bg-accent text-navy hover:bg-accent/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-6 text-xl'
  }
  
  // Auto-adjust size for elder tier
  const adjustedSize = tier === 'elder' && size === 'md' ? 'lg' : 
                       tier === 'elder' && size === 'sm' ? 'md' : size
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[adjustedSize]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

