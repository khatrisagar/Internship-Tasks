import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='head-wrappper'>
      
      <div className='right-container'>
        <nav className=''>
          <ul className='list-none'>
            <li className='list-none'><Link className='no-underline' to='/'>Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header