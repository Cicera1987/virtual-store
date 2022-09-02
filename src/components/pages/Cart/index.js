import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import {CartList, CartStyle} from './style';
import {BsTrash } from "react-icons/bs";
import { ContainerIcon } from '../../molecules/Modal/ModalCreate/style';

const Cart = () => {
  const { productCart } = useContext(AuthContext);
  const { clearCart} = useContext(AuthContext);

  console.log(productCart)
  return (
    <CartStyle > 
      <CartList> 
        <h1>Carrinho de compras</h1>
        {productCart.map(product => <p> Qtd: {product.qtd} - {product.name} - R$ {product.price}</p>)}
        <ContainerIcon onClick={clearCart}> <BsTrash /></ContainerIcon> 
      </CartList>  
    </CartStyle>


  )
}

export default Cart