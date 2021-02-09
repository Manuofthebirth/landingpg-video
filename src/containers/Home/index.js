// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import React from "react";
import './index.scss'

// import Header from '../../components/Header'
import Button from '../../components/Button'

import Horses from '../../assets/horses.mp4'
import { Mail, Linkedin } from 'react-feather';


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
              <h2>Valentina Rêgo Monteiro</h2>
              {/* <h3>dolor sit amet</h3> */}
              <p>
                Analista de Comunicação Jr
              </p>
            </div>
            <Button type={1} style={{width: '80px', height: '40px', minHeight: '40px', fontSize: '12px', borderRadius: '25px'}}>Sobre mim</Button>

            <ul className="home__social">
              <li><Mail /></li>
              <li><Linkedin /></li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default Home

