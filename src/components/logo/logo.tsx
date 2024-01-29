import { Link } from "react-router-dom"

import './logo.scss'

const Logo = () => {
  return (
    <Link className="logo" to={'/'}>
      <div className="logo__image">
        <svg 
          width="40" 
          height="40" 
          viewBox="-10.5 -9.45 21 18.9" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
        >
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
      </div>
      <div className="logo__main">
        <h2 className="logo__title">React-shop</h2>
        <p className="logo__subtitle">Лучший магазин</p>
      </div>
    </Link>
  )
}

export default Logo