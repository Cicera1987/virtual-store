/* eslint-disable no-use-before-define */
import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const token = localStorage.getItem("users") || null
    const [productCart, setProductCart] = useState([])

    function addProductCart(id) {
        const copyProductCart = [...productCart]
        localStorage.setItem("Carrinho", JSON.stringify(productCart))
        const item = copyProductCart.find((product) => product.id === id)
        JSON.parse(localStorage.getItem('Carrinho', productCart))
        if (!productCart) return;
        setProductCart({ productCart })
        
        if (!item) {  
            copyProductCart.push({ id: id, qtd: 1 });
        } else {
            item.qtd = item.qtd + 1;
        }
        setProductCart(copyProductCart);
    }

    function removeProductCart(id) {
        const copyProductCart = [...productCart];
        localStorage.removeItem('Carrinho', JSON.stringify(productCart));    
        const item = copyProductCart.find((product) => product.id === id);

        if (item && item.qtd > 1) {
            item.qtd = item.qtd - 1;
            setProductCart(copyProductCart);
        } else {
            const arrayFiltered = copyProductCart.filter(
                (product) => product.id !== id
            );
           
            setProductCart(arrayFiltered);
        }
    }

    function clearCart() {
        setProductCart([]);
    }


    useEffect(() => {
        if (token !== null && token === "Adm") {
            setAuth(true)
        }
        else {
            setAuth(false)
        }
    }, [])

    return (
        <AuthContext.Provider 
            value={{ auth, setAuth, productCart, addProductCart, removeProductCart, clearCart }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;