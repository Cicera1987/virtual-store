
import { createContext, useState } from 'react'
import Catalogo from '../molecules/Modal/ModalCreate/Catalogo';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productCart, setProductCart] = useState([])

  function addProductCart(id) {
    const copyProdutCart = [...productCart];

    const item = copyProdutCart.find((product) =>product.id ===id)

   }

  function removeProductCart(id) { }


  return (
    <CartContext.Provider
      value={{ productCart, setProductCart,addProductCart, removeProductCart }}>
      <Catalogo/>
    </CartContext.Provider>
  )
}

export default CartProvider