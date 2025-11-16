export default function Input({ 
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  ageRange,
  className = '',
  error,
  ...props 
}) {
  const baseStyles = 'w-full rounded-lg border-2 border-warmGray px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
  
  // Adjust size based on age range
  const sizeStyles = ageRange === '55+' 
    ? 'text-xl py-4 px-6' 
    : ageRange === '6-13'
    ? 'text-base py-3 px-4'
    : 'text-base py-3 px-4'
  
  const inputId = `input-${label?.toLowerCase().replace(/\s+/g, '-') || 'input'}`
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className={`block mb-2 font-semibold ${ageRange === '55+' ? 'text-xl' : 'text-base'}`}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseStyles} ${sizeStyles} ${error ? 'border-red-500' : ''}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p 
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}
