import { Routes, Route } from 'react-router-dom'

import HomePage from './home/HomePage'
import CartPage from './cart/CartPage'
import LoginPage from './User/Login/LoginPage'
import OrdersPage from './orders/ordersPage'
import WishlistPage from './wishlist/wishlistPage'
import CategoryPage from './Category/CategoryPage'
import RegistrationPage from './User/RegistrationPage/RegistrationPage'

const Pages = () => {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/wishlist' element={<WishlistPage />} />
      <Route path='/category/:categoryId' element={<CategoryPage />} />
      <Route path='/auth/login' element={<LoginPage/>} />
      <Route path='/auth/registration' element={<RegistrationPage />} />
    </Routes>
  )
}

export default Pages