
import { createContext, useState } from 'react'

export const CartContex = createContext();

const CartProvider = ({ children }) => {
  const [productCart, setProductCart] = useState([{id:1, qtd:1}])

  function addProductCart(id) {
    const copyProdutCart = [...productCart];

    const item = copyProdutCart.find((product) =>product.id ===id)

   }

  function removeProductCart(id) { }


  return (
    <CartContex.Provider
      value={{ productCart, addProductCart, removeProductCart }}>

      {children}
    </CartContex.Provider>
  )
}

export default CartProvider