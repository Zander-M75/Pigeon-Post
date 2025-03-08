import BlackButton from "../components/common/BlackButton";
import officeClipart from "../assets/Home/office-clipart.png";

export default function Home() {
  return (
    <div className="bg-[#161616] h-screen w-screen p-8">
      <div className="flex w-full h-screen items-center">
        {/* Left div - Text content */}
        <div className="w-1/2 p-8 flex flex-col gap-6">
          <h4 className="text-white text-2xl font-bold">Pigeon Post</h4>
          <h2 className="text-white text-5xl font-bold">Efficient Pigeon Logistics</h2>
          <p className="text-white text-sm">Discover the fastest way to send and receive messages with our innovative pigeon delivery service.</p>
          <div className="flex flex-row items-center justify-evenly">
            <BlackButton href="/signup">Sign Up Now</BlackButton>
            <BlackButton href="/login">Log In</BlackButton>
          </div>
        </div>

        {/* Right div - Image */}
        <div className="w-1/2 p-28 flex items-center justify-center">
          <img src={officeClipart} alt="Pigeon" className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

