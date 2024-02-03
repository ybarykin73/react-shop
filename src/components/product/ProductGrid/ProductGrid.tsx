import React from 'react'

import ProductCard from "../productCard/ProductCard"
import ProductGridPlaceholder from './Placeholder/ProductGridPlaceholder'
import Error from '../../subcomponents/Error/Error'

import { IProps } from "./IProductGrid"
import './ProductGrid.scss'

const ProductGrid:React.FC<IProps> = (props) => {

  const {
    title,
    error,
    products,
    isLoading
  } = props

  if (isLoading) {
    return <ProductGridPlaceholder />
  }

  if(error) {
    console.error(error)
    return <Error />
  }

  return (
    <section className="product-grid">
      <div className="product-grid__headline">
        <h2 className="title title--main product-grid__title">
          { title }
        </h2>
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