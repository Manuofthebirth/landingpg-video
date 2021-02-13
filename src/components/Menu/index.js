import React from 'react';
// import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { X, Home, User, FileText, Award  } from 'react-feather';

import Button from '../Button'
import './index.scss'

const Menu = () => {
  const app = useSelector(state => state.app)
  const dispatch = useDispatch()
  const { menuOpen } = app
  const currentPage = window.location.pathname
  const history = useHistory()

  function closeMenu() {
    dispatch({ type: 'CHANGE_USERMENU_STATUS', payload: false })
  }

  function redirectToHome(){
    history.push("/");
    closeMenu();
  }
  
  // function redirectToPag2(){
  //   history.push("/pag2");
  //   closeMenu();
  // }

  // function redirectToPag3(){
  //   history.push("/pag3");
  //   closeMenu();
  // }

  return (
    <div className={menuOpen ? "menu menu--visible" : "menu"}>
      <div className={menuOpen ? "menu__container menu__container--visible" : "menu__container"}>
        <X className="menu__back" onClick={() => closeMenu(false)} size='30' />
        <div className={currentPage === "/" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectToHome()}>
          <Home size='24'/>
          Home
        </div> 
        <div className={currentPage === "/a" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectToHome()}>
          <User size='24'/>
          About
        </div> 
        <div className={currentPage === "/a" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectToHome()}>
          <FileText size='24'/>
          Experiência
        </div> 
        <div className={currentPage === "/a" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectToHome()}>
          <Award size='24'/>
          Skills
        </div> 
        {/* <div className={currentPage === "/resumos" ? "menu__list__page menu__list__page--selected" : "menu__list__page" } onClick={() => redirectToPag2()}>
          <Activity size='24'/>
          Pag2
        </div>
        <div className={currentPage === "/predicoes" ? "menu__list__page menu__list__page--selected" : "menu__list__page" } onClick={() => redirectToPag3()}>
          <TrendingUp size='24'/>
          Pag3
        </div> */}
      </div>
    </div>  
  )
}

export default Menu
