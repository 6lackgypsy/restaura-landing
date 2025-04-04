import { motion } from "framer-motion"
import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-16">
      <h2
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Contact Us
      </h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="my-20 border-b-2 border-dotted border-neutral-700 pb-12  text-center text-xl tracking-tighter lg:text-2xl"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Contact
