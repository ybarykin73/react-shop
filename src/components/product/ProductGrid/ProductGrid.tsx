import React from "react"
import ProductCard from "../productCard/ProductCard"

import { IProps } from "./IProductGrid"
import './ProductGrid.scss'

const ProductGrid:React.FC<IProps> = (props) => {

  const {
    title,
    products
  } = props

  return (
    <section className="product-grid">
      <div className="product-grid__headline">
        <h2 className="title product-grid__title">
          { title }
        </h2>
        <a href="#">Смотреть все</a>
      </div>
      <div className="product-grid__body">
        {
          products.map(item => {
            return <ProductCard key={item.id} name={item.name} price={item.price} oldPrice={item.oldPrice} image={item.image} />}
          )
        }
      </div>
    </section>
  )
}

export default ProductGrid