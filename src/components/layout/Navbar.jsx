import BlackButton from '../common/BlackButton'

export default function Navbar() {
  return (
    <nav className="bg-[#A9A9A9] p-4">
      <div className="container mx-auto flex items-center">
        <h1 className="text-3xl font-bold text-black mr-8">Pigeon Post</h1>
        <div className="space-x-4 flex-1">
          <a href="/" className="text-black hover:text-gray-200">Home</a>
          <a href="/track" className="text-black hover:text-gray-200">Track Package</a>
          <a href="/ship" className="text-black hover:text-gray-200">Ship</a>
          <a href="/about" className="text-black hover:text-gray-200">About</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-black hover:text-gray-200">Log In</a>
          <BlackButton href="/signup">Sign Up Now</BlackButton>
        </div>
      </div>
    </nav>
  )
}