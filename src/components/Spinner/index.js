import React from 'react'
import './index.scss'

const Spinner = ({type = 'green'}) => {
  return (
    <div className={`spinner spinner--${type}`}>
      <span className="spinner-inner-1"></span>
      <span className="spinner-inner-2"></span>
      <span className="spinner-inner-3"></span>
    </div>
  )
}

export default Spinner