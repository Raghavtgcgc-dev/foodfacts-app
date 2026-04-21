import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const nav = useNavigate()

  return (
    <Card
      onClick={() =>
        nav(`/product/${product.code}`, { state: { product } })
      }
      style={{
        cursor: 'pointer',
        marginBottom: 15,
        display: 'flex',
        alignItems: 'center',
        padding: 10
      }}
    >
      <CardMedia
        component="img"
        image={product.image_small_url || "https://via.placeholder.com/100"}
        alt={product.product_name}
        style={{ width: 100, height: 100, objectFit: "cover" }}
      />

      <CardContent>
        <Typography variant="h6">
          {product.product_name || "Unknown"}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.brands || "No Brand"}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FoodCard