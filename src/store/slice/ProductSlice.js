import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        "id": "1",
        "name": "Кроссовки Ozelle",
        "image": "../../../assets/image/product-1.jpg",
        "price": 12000,
        "categoryName": "men-sneakers"
      },
    ]
  },
  reducers: {}
})

export const {} = productsSlice.actions

export default productsSlice.reducer