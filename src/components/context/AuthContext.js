/* eslint-disable no-use-before-define */
import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const token = localStorage.getItem("users") || null
    const [productCart, setProductCart] = useState([])
    console.log(productCart)

    function addProductCart(id,name, price, valor) {
        const copyProductCart = [...productCart]
        const item = copyProductCart.find((product) => product.id === id)
        JSON.parse(localStorage.getItem('Carrinho', productCart))
        if (!productCart) return;
        setProductCart({ productCart })
        
        if (!item) {  
            copyProductCart.push({ id: id, name: name, price: price.toFixed(2), qtd: 1 });
        } else {
            item.qtd = item.qtd + 1;
        }
        setProductCart(copyProductCart);
    }

    function removeProductCart(id) {
        const copyProductCart = [...productCart];  
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
        localStorage.setItem('carrinho', JSON.stringify(productCart))
        if (token !== null && token === "Adm") {
            setAuth(true)
        }
        else {
            setAuth(false)
        }

    }, [token, productCart])

    return (
        <AuthContext.Provider 
            value={{ auth, setAuth, productCart, addProductCart, removeProductCart, clearCart }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;