import React from "react"

import Form from "../../../../subcomponents/Form/Form"
import Notification from "../../../../subcomponents/Notification/Notification"

const Scheme = [
  {
    type: 'text',
    label: 'First name:',
    name: 'firstName'
  },
  {
    type: 'text',
    label: 'Last name:',
    name: 'lastName'
  },
  {
    type: 'text',
    label: 'Phone:',
    name: 'phone'
  },
  {
    type: 'text',
    label: 'Address:',
    name: 'address'
  },
]

const AccountEdit = () => {
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState(false)

  const submit = async (form) => {
    try {
      const data = await fetch(`${process.env.MOCK_API}/users/1`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...form})
      })
      
      if(!data.ok) {
        throw new Error()
      }

      setSuccess(true)

    } catch (error) {
      setError('Ошибка в запросе!')
    }
  }

  return (
    <div className="AccountEdit">
      <Form scheme={Scheme} onSubmit={submit} error={error} />
      {
        success &&
        <Notification style="success" message="Данные успешно обновлены!" />
      }
    </div>
  )
}

export default AccountEdit