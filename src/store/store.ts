import { configureStore } from '@reduxjs/toolkit'

import ProductsReducer from './slice/ProductSlice'
import AuthReducer from './slice/UserSlice'

const store = configureStore({
  reducer: {
    Products: ProductsReducer,
    Auth: AuthReducer
  } 
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store