import { createSlice } from "@reduxjs/toolkit"

export interface ProductsState {
  products: Array<Product>
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
  products: [
    {
      "id": 1,
      "name": "Кроссовки Ozelle",
      "image": "../../../assets/image/product-1.jpg",
      "price": 12000,
      "categoryName": "men-sneakers"
    }
  ]

}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export const {} = productsSlice.actions

export default productsSlice.reducer