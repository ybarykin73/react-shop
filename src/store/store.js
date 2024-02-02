import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slice/ProductSlice'

export default configureStore({
  reducer: productsReducer
})