import { motion } from "framer-motion"
import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const customers = [customer1, customer2, customer3, customer4]

const Review = () => {
  return (
    <section id="reviews" className="container mx-auto mb-8 mt-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={itemVariants}
          className="mb-10 text-2xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-16 lg:text-[3rem] max-w-[90%] mx-auto"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaviour}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6 className="">{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={itemVariants}
        className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
      >
        {customers.map((customer, index) => (
          <motion.img
            variants={itemVariants}
            key={index}
            src={customer}
            alt="Customer"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </motion.div>
    </section>
  )
}

export default Review
