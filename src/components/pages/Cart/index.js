import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { CartList, CartStyle, CartTitle } from './style';
import { BsTrash } from "react-icons/bs";
import { ContainerIcon } from '../../molecules/Modal/ModalCreate/style';

const Cart = () => {
  const { productCart, clearCart } = useContext(AuthContext);

  return (
    <><CartStyle>
      <CartList>
        <h1>Carrinho de compras</h1>
        {productCart.map(product => <p>Qtd: {product.qtd} - {product.name} - R$ {product.price} - Valor total: R$ {product.qtd * product.price},00</p>)} 
        
        <CartTitle>
          <h2>Total:</h2>
        </CartTitle>
        <ContainerIcon onClick={clearCart}><BsTrash /></ContainerIcon>
      </CartList>

      
    </CartStyle>

      </>
  )
}

export default Cart