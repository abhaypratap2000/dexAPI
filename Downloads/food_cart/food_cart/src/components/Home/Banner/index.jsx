import React from 'react'
import './style.css'
import BannerImg from './BannerImg.png'
import Logo from '../../common/Logo'
const Banner = () => {
  return (
    <header>
      <div className="header-content">
       <Logo/>
       <div className="content-main">
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy food with Home made recipes</p>
        <button>
          view menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
       </div>
      </div>
      <img src={BannerImg} alt='Banner' className="header-img" />
    </header>
  )
}

export default Banner