import { NavLink } from 'react-router-dom'

function NavBar({ savedCount }) {
  return (
    <nav className="navbar">
      <h2>🥗 FoodFacts</h2>

      <div>
        <NavLink to="/" className="nav-link">Search</NavLink>
        <NavLink to="/saved" className="nav-link">
          Saved {savedCount > 0 && <span>({savedCount})</span>}
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar