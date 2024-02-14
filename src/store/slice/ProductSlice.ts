import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import IProduct from '../../entities/Products/IProduct'

export interface ProductsState {
  products: Array<IProduct>,
  isLoading: boolean
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  isLoading: true,
  error: null
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts' , 
  async () => {
  const response = await fetch('https://65b784b346324d531d54cffb.mockapi.io/shop/products')
    const data = await response.json()
    return data.items
  }
)

const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = [...action.payload]
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const {} = productsSlice.actions

export default productsSlice.reducer