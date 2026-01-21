export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="relative inline-block">
          {/* Outer Ring */}
          <div className="w-24 h-24 border-8 border-blue-200 rounded-full animate-pulse"></div>
          
          {/* Spinning Ring */}
          <div className="absolute top-0 left-0 w-24 h-24 border-8 border-transparent border-t-blue-600 border-r-purple-600 rounded-full animate-spin"></div>
          
          {/* Inner Dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bounce"></div>
        </div>

        {/* Loading Text */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Loading...
          </h2>
          <p className="text-gray-600">
            Preparing your experience
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex gap-2 justify-center mt-6">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}
