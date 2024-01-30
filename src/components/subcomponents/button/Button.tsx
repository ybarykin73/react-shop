import React from "react"

import {IProps} from './IButton'
import './Button.scss'

const Button:React.FC<IProps> = (props) => {
  const {
    style,
    onClick,
    children,
    className = '',
    
  } = props

  return (
    <button 
      className={`button button--${style} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button