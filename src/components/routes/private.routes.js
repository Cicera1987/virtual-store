import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import NavBar from '../molecules/NavBar'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Showcase from '../pages/Showcase'
import Catalogo from '../molecules/Modal/ModalCreate/Catalogo'
import Upload from '../molecules/Modal/ModalCard/Upload'



const PrivateRoutes = () => {

  console.log("Private")

  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default PrivateRoutes