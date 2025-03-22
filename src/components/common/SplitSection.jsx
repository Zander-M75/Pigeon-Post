export default function SplitSection({ 
  children,
  imageUrl,
  imageAlt,
  imageOnRight = true,
  className
}) {
  return (
    <div className={`max-w-7xl mx-auto px-8 md:px-16 py-20 ${className || ''}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Content Side */}
        <div className={`w-full md:w-1/2 ${!imageOnRight ? 'md:order-2' : 'md:order-1'}`}>
          {children}
        </div>

        {/* Image Side */}
        <div className={`w-full md:w-1/2 flex items-center justify-center ${imageOnRight ? 'md:order-2' : 'md:order-1'}`}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={imageAlt || 'Section image'}
              className="w-full max-w-lg h-auto object-contain"
            />
          )}
        </div>
      </div>
    </div>
  )
}
