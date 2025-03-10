import BlackButton from "../components/common/BlackButton";
import officeClipart from "../assets/Home/office-clipart.png";

export default function Home() {
  return (
    <div className="bg-[#161616] min-h-screen w-full p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left div - Text content */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col gap-6">
          <h4 className="text-white text-xl">~ Pigeon Post</h4>
          <h2 className="text-white text-4xl md:text-6xl font-bold">
            Efficient<br/> Pigeon<br/> Logistics
          </h2>
          <p className="text-white text-m max-w-lg">
            Discover the fastest way to send and receive messages with our innovative pigeon delivery service.
          </p>
          <div className="flex flex-row items-center gap-4">
            <BlackButton href="/signup">Sign Up Now</BlackButton>
            <BlackButton href="/login">Log In</BlackButton>
          </div>
        </div>

        {/* Right div - Image */}
        <div className="w-full md:w-1/2 p-4 md:p-20 flex items-center justify-center">
          <img src={officeClipart} alt="Pigeon" className="w-full max-w-xl h-auto" />
        </div>
      </div>
    </div>
  )
}

