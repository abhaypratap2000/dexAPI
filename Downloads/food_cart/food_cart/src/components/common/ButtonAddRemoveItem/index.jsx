import React from 'react'
import './style.css'
const ButtonAddRemoveItem = ({quantity , handleAdditem , handleRemoveItem}) => {
  return (
    <div className = "btnAddRemove">
        {quantity !== 0 ?(
        <div className = "btnAddRemove-positive">
            <i className="fa fa-minus" onClick={handleRemoveItem}></i>
            <span>{quantity}</span>
            <i className="fa fa-plus" onClick={handleAdditem}></i>
        </div>
        ) :(
            <div className = "btnAddRemove-negative"  onClick={handleAdditem}>
            <span>ADD</span>
            <i className="fa fa-plus"></i>
            </div>  
        )}
    </div>
  )
}

export default ButtonAddRemoveItem