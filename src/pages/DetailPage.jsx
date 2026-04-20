import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://corsproxy.io/?https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => setProduct(res.data.product))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [barcode])

  if (loading) return <p>Loading...</p>
  if (!product) return <p>No product found</p>

  const isSaved = saved.some(item => item.code === barcode)

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)}>← Back</button>

      <h2>{product.product_name}</h2>
      <p>{product.brands}</p>

      <img
        src={product.image_front_url}
        alt={product.product_name}
        style={{ width: "200px" }}
      />

      <h3>Nutrition</h3>
      <p>Calories: {product.nutriments?.['energy-kcal_100g'] || "N/A"} kcal</p>
      <p>Protein: {product.nutriments?.proteins_100g || "N/A"} g</p>
      <p>Carbs: {product.nutriments?.carbohydrates_100g || "N/A"} g</p>
      <p>Fat: {product.nutriments?.fat_100g || "N/A"} g</p>

      <button
        onClick={() =>
          isSaved
            ? dispatch({ type: 'REMOVE', code: barcode })
            : dispatch({ type: 'ADD', product })
        }
      >
        {isSaved ? "Remove from Saved" : "Save to My List"}
      </button>
    </div>
  )
}

export default DetailPage