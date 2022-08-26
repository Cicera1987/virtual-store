import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import About from '../pages/About'
import NavBar from '../molecules/NavBar'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Showcase from '../pages/Showcase'
import Catalogo from '../molecules/Modal/ModalCreate/Catalogo'




class Produto{
  constructor(id, name, price, img) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

let p1 = new Produto(1001, "Necessire", 100, "img/Produto01.jpg");
let p2 = new Produto(1002, "Bolsa", 150, "img/Produto02.jpg");
let p3 = new Produto(1003, "Bolsa Festa", 250, "img/Produto03jpg");
let p4 = new Produto(1004, "Bolsa ", 235, "img/Produto04.jpg");

let produtos = [p1, p2, p3, p4]


const PrivateRoutes = () => {
  console.log("private")
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
        <Catalogo produtos={produtos} />
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   

  )
}

export default PrivateRoutes