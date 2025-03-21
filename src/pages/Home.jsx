import BlackButton from "../components/common/BlackButton";
import officeClipart from "../assets/Home/office-clipart.png";
import Partners from "../components/extra/Partners";
import ContentBox from "../components/common/ContentBox";
import mapImage from "../assets/Home/map-1.png";


export default function Home() {
  return (
    <div className="bg-[#161616] min-h-screen w-full pl-4 pr-4 pb-4 pt-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 md:py-32">
        {/* Left div - Text content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h4 className="text-white text-xl font-light tracking-wide">~ Pigeon Post</h4>
          <h2 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            Efficient<br/> 
            Pigeon<br/> 
            Logistics
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-md">
            Discover the fastest way to send and receive messages with our innovative pigeon delivery service.
          </p>
          <div className="flex flex-row items-center gap-6 mt-4">
            <BlackButton href="/signup">Sign Up Now</BlackButton>
            <BlackButton href="/login">Log In</BlackButton>
          </div>
        </div>

        {/* Right div - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
          <img 
            src={officeClipart} 
            alt="Pigeon" 
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-20">
        <Partners />
      </div>
      
      <div className="max-w-7xl mx-auto pb-20">
        <div className="relative">
          <ContentBox className="!pb-[6rem] !max-w-[70rem]">
            <div className="flex justify-between items-center -mt-12">
              {/* Left side text */}
              <div className="w-1/2 pr-8 flex flex-col gap-6">
                <h2 className="text-black text-5xl font-bold drop-shadow-sm">
                  Revolutionizing <span className="text-gray-700">Supply Chain</span>
                </h2>
                <p className="text-gray-800 text-xl leading-relaxed max-w-md">
                  Speed? Questionable. Reliability? Also questionable.
                </p>
                <div className="mt-2">
                  <BlackButton href="/signup" className="hover:scale-105 transition-transform duration-200">
                    Try For Free
                  </BlackButton>
                </div>
              </div>

              {/* Right side spacer */}
              <div className="w-1/2" />
            </div>
          </ContentBox>

          {/* Image positioned absolutely relative to outer container */}
          <div className="absolute right-0 top-0 w-1/2 -mt-24">
            <img 
              src={mapImage} 
              alt="Map" 
              className="w-full max-w-[32rem] h-auto object-contain relative top-[2rem]"
            />
          </div>
        </div>
      </div>

  </div>
  )
}

