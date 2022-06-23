import meat from 'app/assets/header/meat.png'
import logo from 'app/assets/header/logo.png'
import loupe from 'app/assets/header/loupe.svg'
import user from 'app/assets/header/user.svg'
import cart from 'app/assets/header/cart.svg'

import './index.scss'

const Header: React.FC = () => {
  return (
    <div className="header">
      <a href='#meat'><img src={meat} alt="meat" /></a>
      <img src={logo} alt="logo" />
      <div className="menu">
        <a href='#men'>Men's</a>
        <a href='#women'>Women's</a>
        <a href='#accessories'>Accessories</a>
        <a href='#sale'>Sale!</a>
      </div>
      <div className='tool'>
        <a href='#loupe'><img src={loupe} alt="loupe" /></a>
        <a href='#user'><img src={user} alt="user" /></a>
        <a href='#cart'><img src={cart} alt="cart" /></a>
      </div>
    </div>
  )
}

export default Header