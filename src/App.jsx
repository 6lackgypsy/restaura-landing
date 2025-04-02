import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
    </div>
  )
}

export default App
