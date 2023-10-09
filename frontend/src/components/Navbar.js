import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledNavbar } from './styles/Navbar.styled'
import { logout } from '../features/auth/authSlice';
import { categories } from '../utils/constants';
import user from '../assets/user.png';
import cart from '../assets/cart.png';
import logo from '../assets/logo.png';
import logout_icon from '../assets/logout.png';
import Dropdown from './Dropdown';
import { getProducts, reset } from '../features/products/productSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const onSelectCategory = (value) => {
    setSelectedCategory((prev) => {
      dispatch(reset());
      if (value === "All") {
        dispatch(getProducts());
        return value;
      }
      dispatch(getProducts({category: value }));
      return value;
    });
  }

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <StyledNavbar>
      <div className='navbar-left'>
        <Dropdown 
          options={["All", ...categories]}
          placeholder={'Filter by category'}
          handleChange={onSelectCategory}
          value={selectedCategory}
        />
      </div>
      <div className='navbar-mid'>
        <Link to='/'>
          <img 
          src={logo}
          alt='logo-icon'/>
        </Link>
      </div>
      <div className='navbar-right'>
        <Link to={'/create_product'}>Create product</Link>
        <Link to={'/profile'}>
          <img 
            src={user}
            alt='user-icon' 
            className='user-icon'
            width={20}/>
        </Link>  
        <div>
          <img 
            src={cart}
            alt='cart-icon' 
            className='cart-icon'
            width={20}/>
        </div>
        <img 
          src={logout_icon}
          alt='logout-icon' 
          className='logout-icon'
          onClick={onLogout}
          width={20}/>
      </div>
    </StyledNavbar>
  )
}
