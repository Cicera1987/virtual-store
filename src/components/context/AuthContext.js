import React, { createContext, useEffect, useState } from "react";
import App from "../../App";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [produtos, setProdutos] = useState([])
    const token = localStorage.getItem("users") || null

    useEffect(() => {
        if (token !== null && token === "Adm") {
            setAuth(true)
        }
        else {
            setAuth(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;