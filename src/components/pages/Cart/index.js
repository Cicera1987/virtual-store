import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const { productsCart } = useContext(CartContext);
  return (
    
     <>
     <h1>Produtos no carrinho de compras</h1>
     <p>{JSON.stringify(productsCart)}</p>
     </>

  )
}

export default Cart