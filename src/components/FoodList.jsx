import FoodCard from './FoodCard'

function FoodList({ products }) {
  return (
    <div className="food-list">
      {products.map((product, i) => (
        <FoodCard key={product.code || i} product={product} />
      ))}
    </div>
  )
}

export default FoodList