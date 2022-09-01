import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Showcase from '../pages/Showcase'
import Login from '../pages/Login'
import NavBar from '../molecules/NavBar'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Cart from '../pages/Cart'

const PublicRoutes = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Header />
            <Routes>
                <Route path="/" element={<Showcase />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login/>} />   
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default PublicRoutes