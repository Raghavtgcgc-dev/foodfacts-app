import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../store/savedSlice'

function SavedPage() {
  const saved = useSelector(s => s.saved.items)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Saved Items</h2>

      {saved.map(p => (
        <div key={p.id}>
          {p.product_name}
          <button onClick={() => dispatch(removeItem(p.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default SavedPage