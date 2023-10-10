import React from 'react'
import { Page } from '../components/styles/Global.styled'
import Navbar from '../components/Navbar'
import { CartContainer, CartItemsContainer } from '../components/styles/Cart.styled'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

export default function Cart() {
  const { products } = useSelector(state => state.cart);

  return (
    <Page>
        <Navbar />
        <CartContainer>
            <h1>Cart</h1>
            <CartItemsContainer>
                { products.map((item, i) => 
                    <CartItem key={i} item={item} />
                ) }
            </CartItemsContainer>
        </CartContainer>
    </Page>
  )
}
