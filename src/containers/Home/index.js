// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import React from "react";
import './index.scss'

import Header from '../../components/Header'
// import Button from '../../components/Button'

import Horses from '../../assets/horses.mp4'
import { Facebook, Instagram, Linkedin } from 'react-feather';


const Home = () => {
  return (
    <div className='home'>
      <div class="overlay"></div>

      <figure className="home__background">
        <video muted loop autoPlay >
          <source src={Horses} type="video/mp4"/>
        </video>

        <figcaption>
          <div className="container">
            <div className="home__text">
              <h2>Lorem ipsum</h2>
              <h3>dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi culpa corrupti, aperiam incidunt sequi reiciendis dicta iusto iure natus eligendi!
              </p>
            </div>
            
            <ul className="home__social">
              <li><Facebook /></li>
              <li><Linkedin /></li>
              <li><Instagram /></li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default Home

