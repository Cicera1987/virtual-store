import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Showcase from '../pages/Showcase'
import Login from '../pages/Login'
import About from '../pages/About'
import NavBar from '../molecules/NavBar'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const PublicRoutes = () => {
    console.log("public")
    return (
        <BrowserRouter>
            <NavBar/>
            <Header />
            <Routes>
                <Route path="/" element={<Showcase />} />
                <Route path="/login" element={<Login/>} />
                <Route path='/about' element={<About />} />    
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default PublicRoutes