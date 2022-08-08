import React from 'react'
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './style.css'
const MenuItem = ({item}) => {
  
     const {name, info, price, img} = item;
     console.log(item);
    
  return (
    <div className = "item">
        <img src={img} alt="img" />
        <div className="item-head_desc">
            <p className="head-desc_name">{name}</p>
           <p className="info">
                <small>{info}</small>
           </p>
        </div>
        <div className="item-foot_desc">
            <span className="foot-desc_price">ETh{price}</span>
            <ButtonAddRemoveItem  quantity={90}/>
        </div>
    </div>
  )
}

export default MenuItem