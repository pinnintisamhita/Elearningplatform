import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className='header' >
     <p id='logo'>Eplatform</p>
    <div className='menuitem-div'>
    <Link to="/" className='menu-items'>Home</Link>
    <Link to="/about" className='menu-items'>About</Link>
    <Link to="/contact" className='menu-items'>Contact</Link>
    </div>
   </div>
  )
}

export default Header