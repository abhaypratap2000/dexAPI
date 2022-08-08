import React from 'react'
import './style.css'
const CartCountButton = ({cartCount}) => {
  return (
    <div className = "btnCartCount">
      <div className="count">{cartCount>=100?'99+':cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  )
}

export default CartCountButton