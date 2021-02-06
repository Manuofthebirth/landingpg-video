import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Menu} from 'react-feather';
import './index.scss'

import Logo from '../../assets/logo.png'

const Header = () => {
  const dispatch = useDispatch()

  function openMenu() {
    dispatch({ type: 'CHANGE_USERMENU_STATUS', payload: true })
  }

  return (
    <header className="header">
      <div className='header__logo'>
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Logo" />
        </Link>
      </div>

      <nav>
        <div className="header__link" onClick={() => openMenu(true)}>
          <p>Menu</p>
          <Menu size='25'/>
        </div>
      </nav>
    </header>
  )
}

export default Header