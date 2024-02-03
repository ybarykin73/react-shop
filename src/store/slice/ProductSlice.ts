import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
export interface ProductsState {
  products: Array<Product>,
  isloading: boolean
  error: string
}

export type Product = {
  id: number,
  name: string,
  image: string,
  price: number,
  oldPrice?: number,
  categoryName: string
}

const initialState : ProductsState = {
  products: [],
  isloading: true,
  error: ''
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts' , 
  async () => {
  const response = await fetch('https://65b784b346324d531d54cffb.mockapi.io/products')
    const data = await response.json()
    return data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isloading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isloading = false
        state.products = [...action.payload]
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isloading = false
        state.error = action.error.message
      })
  }
})

export const {} = productsSlice.actions

export default productsSlice.reducer