export default function Navbar() {
  return (
    <nav className="bg-[#A9A9A9] p-4">
      <div className="container mx-auto flex items-center">
        <h1 className="text-3xl font-bold text-black mr-10">Pigeon Post</h1>
        <div className="space-x-6 flex-1">
          <a href="/" className="text-black hover:text-gray-200">Home</a>
          <a href="/track" className="text-black hover:text-gray-200">Track Package</a>
          <a href="/ship" className="text-black hover:text-gray-200">Ship</a>
          <a href="/about" className="text-black hover:text-gray-200">About</a>
        </div>
        <div className="flex items-center space-x-8">
          <a href="/login" className="text-black hover:text-gray-200">Log In</a>
          <a href="/signup" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Sign Up Now</a>
        </div>
      </div>
    </nav>
  )
}