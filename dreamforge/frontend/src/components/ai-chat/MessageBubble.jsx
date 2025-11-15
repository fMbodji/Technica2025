export default function MessageBubble({ message, tier }) {
  const isUser = message.role === 'user'
  
  const baseStyles = 'rounded-2xl px-6 py-4 max-w-[80%] break-words'
  const userStyles = 'bg-primary text-white ml-auto'
  const aiStyles = tier === 'elder' 
    ? 'bg-white text-navy border-2 border-warmGray' 
    : 'bg-secondary/20 text-navy'
  
  const textSize = tier === 'elder' ? 'text-xl' : 'text-base'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`${baseStyles} ${isUser ? userStyles : aiStyles} ${textSize}`}
        role={isUser ? 'status' : 'article'}
        aria-label={isUser ? 'Your message' : 'AI assistant message'}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  )
}

