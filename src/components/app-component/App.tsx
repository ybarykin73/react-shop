import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/hooks'

import Pages from '../pages/pages'
import Header from '../header/header'

import { fetchProducts } from '../../store/slice/ProductSlice'

import './style.scss'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
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