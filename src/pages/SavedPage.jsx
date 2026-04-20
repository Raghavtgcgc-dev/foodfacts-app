import { useNavigate } from 'react-router-dom'

function SavedPage({ saved, dispatch }) {
  const navigate = useNavigate()

  if (saved.length === 0) {
    return <p>No saved items</p>
  }

  return (
    <div className="page">
      <h2>Saved Items ({saved.length})</h2>

      <div className="food-list">
        {saved.map(item => (
          <div key={item.code} className="food-card">
            <h3>{item.product_name}</h3>
            <p>{item.brands}</p>

            <button onClick={() => navigate(`/product/${item.code}`)}>
              View
            </button>

            <button onClick={() => dispatch({ type: 'REMOVE', code: item.code })}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedPage