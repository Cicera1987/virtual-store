import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import About from '../pages/About'
import NavBar from '../molecules/NavBar'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Showcase from '../pages/Showcase'
import AuthProvider from '../context/AuthContext'

const PrivateRoutes = () => {
  console.log("private")
  return (

    <BrowserRouter>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Showcase />}/>
        <Route path="/home" element={<Home/>}/>  
        <Route path="/login" element={<Login />} />
        <Route path='/about' element={<About />} />   
      </Routes>     
      <Footer />
    </BrowserRouter>
   

  )
}

export default PrivateRoutes