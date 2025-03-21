import BlackButton from '../common/BlackButton'
import pigeonPostLogo from '../../assets/Navbar/pp-nav-logo-1.png'  

export default function Navbar() {
  return (
    <div className="px-4 py-3 fixed w-full top-0 z-50">
      <nav className="bg-[#A9A9A9]/90 backdrop-blur-sm transition-all duration-300 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] mx-4">
        <div className="container mx-auto flex items-center px-12">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1 mr-24">
            <img src={pigeonPostLogo} alt="Pigeon Post Logo" className="w-32 h-32 hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Navigation Links */}
          <div className="flex-1">
            <div className="flex gap-16 items-center">
              <a 
                href="/" 
                className="text-black/80 text-lg font-medium hover:text-black py-2 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 relative group"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
              <a 
                href="/track" 
                className="text-black/80 text-lg font-medium hover:text-black py-2 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 relative group"
              >
                <span>Track Package</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
              <a 
                href="/ship" 
                className="text-black/80 text-lg font-medium hover:text-black py-2 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 relative group"
              >
                <span>Ship</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
              <a 
                href="/about" 
                className="text-black/80 text-lg font-medium hover:text-black py-2 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 relative group"
              >
                <span>About</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-6">
            <a 
              href="/login" 
              className="text-black/80 text-lg font-medium hover:text-black py-2 px-4 rounded-lg hover:bg-black/5 transition-all duration-200"
            >
              Log In
            </a>
            <BlackButton 
              href="/signup" 
              className="hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              Sign Up Now
            </BlackButton>
          </div>
        </div>
      </nav>
    </div>
  )
}