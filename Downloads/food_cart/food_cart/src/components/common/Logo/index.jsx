import React from 'react'
import './style.css';
import LogoImage from './Logo.png';

function Logo() {
  return (
    <div className='logo'>
      <div>
        <img src={LogoImage} alt="Img" />
        {/* <span><b>Taste</b></span> */}
      </div>
      <p>
        {/* <b>Restaurant and BBQ</b> */}
      </p>
    </div>
  )
}

export default Logo