import Logo from "../logo/logo"
import Menu from "../Menu/Menu"

import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header