import React from 'react'

import MenuItem from './Menuitems'
import './style.css'

const Menu = ({list}) => {
  
  return (
   <main>
    {list.map((item , key )=>(
     
      <MenuItem key = {key}  item = {item}/>
))}
   </main>
  )
}

export default Menu