import video from "../assets/hero.mp4"
import hero from "../assets/hero.jpeg"
import logo from "../assets/logo.png"

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          poster={hero}
          className="h-full w-full object-cover"
        ></video>
      </div>
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-5 h-screen flex flex-col justify-end pb-20">
        <img src={logo} alt="Restaura" className="w-full p-4" />
        <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
      </div>
    </section>
  )
}

export default Hero
