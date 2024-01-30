import React from "react"

import Button from "../../subcomponents/button/Button"
import Wishlist from "../../subcomponents/icons/Wishlist"

import {IProps} from "./IProductCard"
import './ProductCard.scss'

const ProductCard:React.FC<IProps> = (props) => {

  const {
    name,
    price,
    image
  } = props

  return (
    <div className="product-cart">
      <h3 className="product-cart__name">
        Кроссовки Columbia <br /> Columbia
      </h3>
      <div className="product-cart__image">
        <div className="product-cart__percent">-20%</div>
        <img
          width='240'
          height='240'
          className="product-cart__img" 
          src="../../../assets/image/product-1.jpg" 
          alt="name" 
        />
      </div>
      <div className="product-cart__main">
        <div className="product-cart__price">
          <div className="product-cart__price--old">12 000 ₽</div>
          <div className="product-cart__price--discount">10 000 ₽</div>
        </div>
      </div>
      <div className="product-cart__tollbar">
        <Button 
          className='product-cart__add-to-cart' 
          style="primary" 
          ariaLabel="Добавить в корзину"
        >
          Купить
        </Button>
        <Button 
          style="icon" 
          ariaLabel="Добавить в избранное"
          className="product-cart__wishlist-button"
        >
          <Wishlist />
        </Button>
      </div>
    </div>
  )
}

export default ProductCard