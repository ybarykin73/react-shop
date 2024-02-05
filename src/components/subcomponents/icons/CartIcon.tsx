import React from "react"

import { IProps } from "./IIcon"
import './Icon.scss'

const CartIcon: React.FC<IProps> = (props) => {
  const {
    width = 26,
    height = 26,
    className = '', 
  } = props

  return (
    <svg
      width={ width }
      height={ height }
      className={`icon ${className}`} 
      viewBox="0 0 256 256" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" />
      <path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <circle cx="80" cy="204" fill="none" r="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <circle cx="184" cy="204" fill="none" r="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </svg>
  )
}

export default CartIcon
