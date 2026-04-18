import FoodCard from './FoodCard'

function FoodList({ products }) {
  return (
    <div className="food-list">
      {products.map((product, index) => (
        <FoodCard
          key={product.code || index}
          product={product}
        />
      ))}
    </div>
  )
}

export default FoodList