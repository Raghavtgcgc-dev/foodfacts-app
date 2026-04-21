import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/savedSlice'

function DetailPage() {
  const { state } = useLocation()
  const product = state?.product

  const dispatch = useDispatch()
  const saved = useSelector(s => s.saved.items)

  if (!product) return <p>No product</p>

  const savedAlready = saved.find(i => i.id === product.id)

  return (
    <div>
      <h2>{product.product_name}</h2>

      <button onClick={() =>
        savedAlready
          ? dispatch(removeItem(product.id))
          : dispatch(addItem(product))
      }>
        {savedAlready ? "Remove" : "Save"}
      </button>
    </div>
  )
}

export default DetailPage