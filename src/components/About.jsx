import { motion } from "framer-motion"
import about from "../assets/about.jpeg"
import { ABOUT } from "../constants"

const About = () => {
  return (
    <section id="about" className="container mt-12 mx-auto mb-8">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        About Us
      </h2>
      <div className="flex flex-wrap lg:mt-12">
        <div className="w-full p-4 lg:w-1/2">
          <img src={about} alt="About" className="rounded-3xl lg:-rotate-3" />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl tracking-tighter lg:text-6xl max-sm:mt-8 max-sm:text-center"
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3 max-sm:mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default About
