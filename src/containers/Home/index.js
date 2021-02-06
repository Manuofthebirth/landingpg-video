// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import React from "react";
import './index.scss'
import Horses from '../../assets/horses.mp4'

// import Button from '../../components/Button'
// import {  } from 'react-feather';

const Home = () => {
  return (
    <div className='home'>
      <video className="home__background" muted loop autoPlay >
        <source src={Horses} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Home

