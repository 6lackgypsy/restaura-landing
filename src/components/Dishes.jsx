import { DISHES } from "../constants"
import DishCard from "./DishCard"

const Dishes = () => {
  return (
    <section id="dishes" className="container mx-auto px-16">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {DISHES.map((dish, index) => (
          <DishCard key={index} dish={dish} />
        ))}
      </div>
    </section>
  )
}

export default Dishes
