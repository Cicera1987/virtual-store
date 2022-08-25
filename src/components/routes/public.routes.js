import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Showcase from '../pages/Showcase'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import NavBar from '../molecules/NavBar'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Header />
            <Routes>
                <Route path="/showcase" element={<Showcase/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/about' element={<About />} />    
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default PublicRoutes