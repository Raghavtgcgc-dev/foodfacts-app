import { useState } from 'react'
import FoodCard from '../components/FoodCard'

function HomePage() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const search = async () => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        `https://corsproxy.io/?https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=1&page_size=10`
      )

      const json = await res.json()

      const filtered = (json.products || []).filter(
        (p) => p.product_name
      )

      setData(filtered)
    } catch (err) {
      console.error(err)
      setError("Network error, try again")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Food</h2>

      {/* 🔍 Search Input */}
      <div style={{ display: 'flex', gap: 10 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search food..."
          style={{ padding: 8, width: 250 }}
        />
        <button onClick={search}>Search</button>
      </div>

      {/* ⚡ States */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && data.length === 0 && query && (
        <p>No results found</p>
      )}

      {/* 🍱 Results */}
      <div style={{ marginTop: 20 }}>
        {data.map((p) => (
          <FoodCard key={p.code} product={p} />
        ))}
      </div>
    </div>
  )
}

export default HomePage