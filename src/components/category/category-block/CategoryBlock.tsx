import React from "react"

import ProductGrid from "../../product/ProductGrid/ProductGrid"

import { IProps } from "./ICategoryBlock"
import './CategoryBlock.css'

const CategoryBlock: React.FC<IProps> = (props) => {

  const {
    title,
    products
  } = props
  
  return (
    <ProductGrid title={title} products={products} />
  )
}

export default CategoryBlock