import React from "react"
import Form from "../../../subcomponents/Form/Form"
import Notification from "../../../subcomponents/Notification/Notification"

import { useAppDispatch } from "../../../../hooks/hooks"
import { authSetUser } from "../../../../store/slice/UserSlice"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from '../../../../firebase'

import './RegistrationPage.scss'

const Scheme = [
  {
    type: 'email',
    label: 'Email:',
    name: 'email',
    required: true
  },
  {
    type: 'password',
    label: 'Password:',
    name: 'password',
    required: true
  },
]

const RegistrationPage = () => {

  const [error, setError] = React.useState('')
  const [success, isSuccess] = React.useState(false)

  const dispatch = useAppDispatch()

    const postUser = async (email, uid) => {
    const data = await fetch('https://65b784b346324d531d54cffb.mockapi.io/users',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {email: email, uid: uid})
    })
  }

  const submit = (e) => {
    createUserWithEmailAndPassword(auth, e.email, e.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(authSetUser({
          id: user.uid,
          email: user.email
        }))
        isSuccess(true)
        setError('')
        postUser(user.email, user.uid)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <div className="registration-page">
      <div className="registration-page__wrapper">
        <h1 className="title title--main registration-page__title">
          RegistrationPage
        </h1>
        <Form 
          error={error}
          scheme={Scheme}
          onSubmit={submit}
        />
        {
          success &&
          <Notification style="success" message="Учетная запесь создана!"/>
        }
      </div>
    </div>
  )
}

export default RegistrationPage