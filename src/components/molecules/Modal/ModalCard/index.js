
import { createContext, useState } from 'react'
import Catalogo from '../ModalCreate/Catalogo';

export const CartContex = createContext();

const CartProvider = ({ children }) => {
  const [productCart, setProductCart] = useState([])

  function addProductCart(id) {
    const copyProdutCart = [...productCart];

    const item = copyProdutCart.find((product) =>product.id ===id)

   }

  function removeProductCart(id) { }


  return (
    <CartContex.Provider
      value={{ productCart, setProductCart,addProductCart, removeProductCart }}>
      <Catalogo/>
    </CartContex.Provider>
  )
}

export default CartProvider