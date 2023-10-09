import React from 'react'
import { StyledProductCard } from './styles/Product.styled'

export default function ProductCard({ product }) {
  const { image_url, name, price } = product;
  return (
    <StyledProductCard>
        <img 
          src={image_url ? image_url : 'image-placeholder.png'}
          alt='tech'
        />
        <p>{name}</p>
        <p><b>${parseFloat(price).toFixed(2)}</b></p>
    </StyledProductCard>
  )
}
