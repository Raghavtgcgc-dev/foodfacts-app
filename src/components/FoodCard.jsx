import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  const { product_name, brands, nutriments, image_small_url, code } = product

  return (
    <div className="food-card" onClick={() => code && navigate(`/product/${code}`)}>
      <img src={image_small_url || "https://via.placeholder.com/100"} />

      <h3>{product_name || "Unknown"}</h3>
      <p>{brands || "No Brand"}</p>

      <p>Calories: {nutriments?.['energy-kcal_100g'] || "N/A"} kcal</p>
      <p>Protein: {nutriments?.proteins_100g || "N/A"} g</p>
      <p>Carbs: {nutriments?.carbohydrates_100g || "N/A"} g</p>
      <p>Fat: {nutriments?.fat_100g || "N/A"} g</p>
    </div>
  )
}

export default FoodCard