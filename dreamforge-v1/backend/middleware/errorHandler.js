export function errorHandler(err, req, res, next) {
  console.error('Error:', err)
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'An unexpected error occurred',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}

