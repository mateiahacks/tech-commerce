import React from 'react'
import { StyledNavbar } from './styles/Navbar.styled'

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className='navbar-left'>
        left
      </div>
      <div className='navbar-mid'>
        <img src='logo.png' alt='logo-icon'/>
      </div>
      <div className='navbar-right'>
        <img 
          src='user.png' 
          alt='user-icon' 
          className='user-icon'
          width={20}/>
        <img 
          src='cart.png' 
          alt='cart-icon' 
          className='cart-icon'
          width={20}/>
      </div>
    </StyledNavbar>
  )
}
