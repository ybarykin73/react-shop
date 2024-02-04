import React from "react"
import ProductCard from "../../product/productCard/ProductCard"

import { IProps } from "./ICategoryGrid"
import './CategoryGrid.scss'

const CategoryGrid: React.FC<IProps> = (props) => {

  const {
    products
  } = props

  if(!products.length) {
    return <div>В этой категории еще не товаров!</div>
  }

  return (
    <div className="category-grid">
      {
        products.map(item => {
          return <ProductCard key={item.id} name={item.name} price={item.price} oldPrice={item.oldPrice} image={item.image} />}
        )
      }
    </div>
  )
}

export default CategoryGrid