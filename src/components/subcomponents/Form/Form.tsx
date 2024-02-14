import React from "react"

import Input from "../Input/Input"
import Button from "../button/Button"

import { IProps } from "./IForm"
import './Form.scss'

const Form: React.FC<IProps> = (props) => {
  const {
    scheme,
    onSubmit
  } = props

  const [formData, setFormData] = React.useState({})

  const handleChange = (event) => {
    const {value, name} = event
    setFormData(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {
        scheme.map(item => (
          <Input
            key={item.name}
            type={item.type}
            label={item.label}
            name={item.name}
            required={item.required}
            handleChange={handleChange}
          />
        ))
      }
      <Button ariaLabel="submit" style="primary">Submit</Button>
    </form>
  )
}

export default Form