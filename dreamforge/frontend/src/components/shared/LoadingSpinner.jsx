export default function LoadingSpinner({ tier, message }) {
  const defaultMessages = {
    middleSchool: "Building something awesome... ✨",
    elder: "One moment, please...",
    default: "Loading..."
  }

  const displayMessage = message || 
    (tier === 'elder' ? defaultMessages.elder : 
     tier === 'middleSchool' ? defaultMessages.middleSchool : 
     defaultMessages.default)

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div 
        className="animate-spin rounded-full border-4 border-warmGray border-t-primary"
        style={{
          width: tier === 'elder' ? '60px' : '40px',
          height: tier === 'elder' ? '60px' : '40px'
        }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <p className={`text-center text-warmGray ${tier === 'elder' ? 'text-xl' : 'text-base'}`}>
        {displayMessage}
      </p>
    </div>
  )
}

