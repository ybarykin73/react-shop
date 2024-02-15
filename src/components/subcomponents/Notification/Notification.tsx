import React from "react"

import { IProps } from "./INotification"
import './Notification.scss'

const Notification: React.FC<IProps> = (props) => {
  const {
    style,
    message
  } = props

  return (
    <div className={`notification notification--${style}`}>
      {message}
    </div>
  )
}

export default Notification