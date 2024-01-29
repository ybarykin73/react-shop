import { Routes, Route } from 'react-router-dom'

import HomePage from './home/HomePage'
import CartPage from './cart/CartPage'
import UserPage from './user/userPage'
import OrdersPage from './orders/ordersPage'
import WishlistPage from './wishlist/wishlistPage'

const Pages = () => {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/user' element={<UserPage />} />
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/wishlist' element={<WishlistPage />} />
    </Routes>
  )
}

export default Pages