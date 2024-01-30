import React from "react"

import {IProps} from "./IIcon"
import './Icon.scss'

const Wishlist:React.FC<IProps> = (props) => {
  const {
    width = 26,
    height = 26,
    className = '', 
  } = props

  return (
    <svg 
      fill="none"
      width={ width }
      height={ height }
      className={`icon ${className}`}
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

export default Wishlist