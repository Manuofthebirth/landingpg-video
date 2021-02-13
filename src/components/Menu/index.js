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

  function redirectPage(page) {
    document.getElementsByClassName("menu menu--visible")[0].style.width = "100vw";
    closeMenu();
    setTimeout(() => { history.push(`${page}`) }, 900);
    setTimeout(() => { document.getElementsByClassName("menu")[0].style.width = null; }, 1000);
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
        <div className={currentPage === "/" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectPage('/')}>
          <Home size='24'/>
          Home
        </div> 
        <div className={currentPage === "/about" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectPage('/about')}>
          <User size='24'/>
          Sobre Mim
        </div> 
        <div className={currentPage === "/experience" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectPage('/experience')}>
          <FileText size='24'/>
          Experiência
        </div> 
        <div className={currentPage === "/skills" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectPage('/skills')}>
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
