import React from "react"

import { IProps } from "./IIcon"
import './Icon.scss'

const UserLoginIcon: React.FC<IProps> = (props) => {
  const {
    width = 26,
    height = 26,
    className = '', 
  } = props

  return (
    <svg
      viewBox="0 0 256 256" 
      xmlns="http://www.w3.org/2000/svg"
      width={ width }
      height={ height }
      className={`icon ${className}`}
    >
      <circle 
        cx="128" 
        cy="128" 
        fill="none" 
        r="96" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="12"
      />
      <circle 
        cx="128" 
        cy="120" 
        fill="none" 
        r="40"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="12"
      />
      <path 
        d="M63.8,199.4a72,72,0,0,1,128.4,0" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="12"
      />
    </svg>
  )
}

export default UserLoginIcon