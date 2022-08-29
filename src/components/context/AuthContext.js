import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const token = localStorage.getItem("users") || null
    const [productsCard, setProductsCard] = useState([{id:1, qtd:1}])

    function addProducToCard(id){
        const copyPoductsCard = [...productsCard]

        const  item = copyPoductsCard.find((product) => product.id ===id)

    }

    function removeProducToCard(id) {

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
        value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;