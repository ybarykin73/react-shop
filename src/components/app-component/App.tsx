import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { getAuth, onAuthStateChanged  } from "firebase/auth";

import Pages from '../pages/pages'
import Header from '../header/header'

import { fetchProducts } from '../../store/slice/ProductSlice'
import { authLoginUser } from '../../store/slice/UserSlice';

import './style.scss'

const App = () => {
  const auth = getAuth()
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        dispatch(authLoginUser({
          id: user.uid,
          email: user.email
        }))
      }
    })

    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Header />
      <Pages />
    </>
  )
}

export default App