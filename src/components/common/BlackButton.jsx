export default function BlackButton({ children, href, onClick }) {
  // If href is provided, render as link, otherwise as button
  if (href) {
    return (
      <a 
        href={href} 
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      onClick={onClick}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
    >
      {children}
    </button>
  )
}
