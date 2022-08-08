import React from 'react'
import EmptyCart from "./EmptyCart.jpg"
import {useNavigate} from 'react-router-dom'
import './style.css'
const Empty = () => {
  const history = useNavigate();
  return (
    <div className="emptyCart">
        <img src={EmptyCart} alt="Empty" />
        <button onClick={()=> history("/", {replace : true})}><i className='fas fa-long-arrow-alt-left'></i> Shop Now</button>
    </div>
  )
}

export default Empty