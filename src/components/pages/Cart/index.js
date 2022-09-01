import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import {CartList, CartStyle} from './style';
import {BsCart4} from "react-icons/bs";

const Cart = () => {
  const { productCart } = useContext(AuthContext);
  return (
    <CartStyle >
      <CartList>
        <h3>Itens no <BsCart4 /> de compras</h3>  
        <p>{JSON.stringify(productCart)}</p>
      </CartList>
    </CartStyle>


  )
}

export default Cart