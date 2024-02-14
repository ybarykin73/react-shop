import React from "react"

import { IProps } from "./IInput"
import './Input.scss'

const Input: React.FC<IProps> = (props) => {

  const {
    type,
    name,
    label,
    required = false, 
    helpText,
    handleChange
  } = props

  const [value, setValue] = React.useState('')
  const inputId = React.useId()

  const changeInput = (e) => {
    handleChange(e)
    setValue(e.value)
  }
  
  return (
    <div className="input">
      {
        label 
        &&
        <label htmlFor={inputId} className="input__label">
          {label}
        </label>
      }
      <input
        id={inputId}
        type={type} 
        value={value}
        className="input__field"
        name={name}
        required={required}
        onChange={(e) => changeInput(e.target)}
      />
      {
        helpText
        &&
        <p className="input__help-text">
          {helpText}
        </p>
      }
    </div>
  )
}

export default Input