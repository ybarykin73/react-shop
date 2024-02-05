import { Link } from "react-router-dom"

import CartButton from "../pages/cart/CartButton/CartButton"
import AccountButton from "../pages/User/Account/AccountButton/AccountButton"
import WishlistButton from "../pages/wishlist/WishlistButton/WishlistButton"

import './Menu.scss'

const Menu = () => {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link 
          className="menu__item-link" 
          to={'./wishlist'}
        >
          <WishlistButton />
        </Link>
      </li>
      <li className="menu__item">
        <Link
          className="menu__item-link" 
          to={'./cart'}
        >
          <CartButton />
        </Link>
      </li>
      <li className="menu__item">
        <AccountButton />
      </li>
    </ul>
  )
}

export default Menu