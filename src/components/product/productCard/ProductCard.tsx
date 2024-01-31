import React from "react"

import { getPercent } from "../../../utils/getPercent"

import Button from "../../subcomponents/button/Button"
import Wishlist from "../../subcomponents/icons/Wishlist"

import {IProps} from "./IProductCard"
import './ProductCard.scss'

const ProductCard:React.FC<IProps> = (props) => {

  const {
    name,
    price,
    image,
    oldPrice
  } = props

  return (
    <div className="product-cart">
      <h3 className="product-cart__name">
        { name }
      </h3>
      <div className="product-cart__image">
        {
          oldPrice 
            && 
          <div className="product-cart__percent">
            -{getPercent(price, oldPrice)}%
          </div>
        }
        <img
          width='240'
          height='240'
          className="product-cart__img" 
          src={ image } 
          alt={ name } 
        />
      </div>
      <div className="product-cart__main">
        <div className="product-cart__price">
          <div className="product-cart__price--old">{ oldPrice } ₽</div>
          <div className="product-cart__price--discount">{ price } ₽</div>
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