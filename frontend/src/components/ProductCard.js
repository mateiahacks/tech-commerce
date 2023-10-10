import React from 'react'
import { StyledProductCard } from './styles/Product.styled'
import add_cart_icon from '../assets/add-cart-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const { image_url, name, price } = product;

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const isMine = user._id === product.owner;

  const onAddCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(add(product));
  }

  return (
    <StyledProductCard>
        <img 
          src={image_url ? image_url : 'image-placeholder.png'}
          alt='tech'
        />
        {!isMine && 
        <img 
          src={add_cart_icon}
          alt='add-cart'
          className='add-cart-icon'
          onClick={(event) => onAddCart(event)}
        /> }
        <p>{name}</p>
        <p><b>${parseFloat(price).toFixed(2)}</b></p>
    </StyledProductCard>
  )
}
