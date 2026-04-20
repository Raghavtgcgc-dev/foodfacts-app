import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import FoodList from '../components/FoodList'
import ErrorMessage from '../components/ErrorMessage'

function HomePage() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (query) => {
    setLoading(true)
    setSearched(true)
    setError(null)

    try {
      // ✅ FIXED PROXY URL
      const url = `https://corsproxy.io/?https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=1&page_size=10`

      const res = await fetch(url)
      const data = await res.json()

      const filtered = (data.products || []).filter(
        (p) => p.product_name
      )

      setResults(filtered)

    } catch (err) {
      console.error(err)
      setError("Network issue - try again")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <h2>Search Food</h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}

      {!loading && !searched && <p>Search for food</p>}
      {!loading && searched && results.length === 0 && <p>No results found</p>}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}
    </div>
  )
}

export default HomePage