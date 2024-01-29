import { BrowserRouter, Link } from 'react-router-dom'
import Pages from '../pages/pages'
import './style.css'

const App = () => {
  return (
    <BrowserRouter>
       <Link to={'/cart'} > cart</Link>
       <Link to={'/'} > home</Link>
       <Pages />
    </BrowserRouter>
  )
}

export default App