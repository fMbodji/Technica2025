export default function LoadingSpinner({ ageRange, expertise, message }) {
  const defaultMessages = {
    '6-13': "Building something awesome... ✨",
    '55+': "One moment, please...",
    default: "Loading..."
  }

  const displayMessage = message || 
    (ageRange === '55+' ? defaultMessages['55+'] : 
     ageRange === '6-13' ? defaultMessages['6-13'] : 
     defaultMessages.default)

  const spinnerSize = ageRange === '55+' ? '60px' : '40px'
  const textSize = ageRange === '55+' ? 'text-xl' : 'text-base'

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div 
        className="animate-spin rounded-full border-4 border-warmGray border-t-primary"
        style={{
          width: spinnerSize,
          height: spinnerSize
        }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <p className={`text-center text-warmGray ${textSize}`}>
        {displayMessage}
      </p>
    </div>
  )
}
