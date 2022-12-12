import React from 'react'
import './TabButton.css'
const TabButton = ({tab,setTab}) => {
 
 return (
    <div id='tab-button'>
    <button className={tab===0? 'Active btn':'btn'}
    onClick={()=>setTab(0)}>Gate</button>
    <button className={tab===1? 'Active btn':'btn'}
    onClick={()=>setTab(1)}>CAT</button>
    <button className={tab===2? 'Active btn':'btn'}
     onClick={()=>setTab(2)}>Ies</button>
    </div>
  )
}

export default TabButton