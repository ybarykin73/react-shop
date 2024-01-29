import { BrowserRouter } from 'react-router-dom'
import Pages from '../pages/pages'
import Header from '../header/header'
import './style.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Pages />
    </BrowserRouter>
  )
}

export default App