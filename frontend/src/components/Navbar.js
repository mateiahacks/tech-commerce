import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledNavbar } from './styles/Navbar.styled'
import { logout } from '../features/auth/authSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <StyledNavbar>
      <div className='navbar-left'>
        left
      </div>
      <div className='navbar-mid'>
        <Link to='/'>
          <img 
          src='logo.png' 
          alt='logo-icon'/>
        </Link>
      </div>
      <div className='navbar-right'>
        <Link to={'/create_product'}>Create product</Link>
        <Link to={'/profile'}>
          <img 
            src='user.png' 
            alt='user-icon' 
            className='user-icon'
            width={20}/>
        </Link>  
        <div>
          <img 
            src='cart.png' 
            alt='cart-icon' 
            className='cart-icon'
            width={20}/>
        </div>
        <img 
          src='logout.png' 
          alt='logout-icon' 
          className='logout-icon'
          onClick={onLogout}
          width={20}/>
      </div>
    </StyledNavbar>
  )
}
