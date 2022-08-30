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
import Upload from '../molecules/Modal/ModalCard/Upload'



class Produto{
  constructor(id, name, price, img) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

let p1 = new Produto(1001, "Bolsa Dual", 100, "https://img.freepik.com/fotos-gratis/cor-mulher-luxuosa-elegancia-roxa_1203-6518.jpg?size=338&ext=jpg&ga=GA1.2.843074877.1661354717");
let p2 = new Produto(1002, "Bolsa LR", 289, "https://img.freepik.com/psd-gratuitas/logo-mockup-luxury-bag_145275-414.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p3 = new Produto(1003, "Bolsa Moderna", 329, "https://img.freepik.com/fotos-premium/bolsa-de-couro-moda-mulher_1339-103665.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p4 = new Produto(1004, "Bolsa dia-a-dia ", 235, "https://img.freepik.com/fotos-gratis/linda-elegancia-e-bolsa-de-moda-feminina-de-luxo_74190-4899.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p5 = new Produto(1005, "Bone CAP", 99, "https://img.freepik.com/psd-gratuitas/maquete-de-vista-frontal-de-bone-preto_125540-1038.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p6 = new Produto(1007, "Bone CAP Dourado", 99, "https://img.freepik.com/psd-gratuitas/maquete-de-tampa-branca-isolada_125540-1040.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p7 = new Produto(1008, "Carteira Premium ", 189, "https://img.freepik.com/fotos-premium/carteira-de-couro-vermelha-nas-maos-femininas_186673-4551.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p8 = new Produto(1009, "Bolsa Lateral", 100, "https://img.freepik.com/fotos-premium/menina-segurando-uma-bolsa-feminina-nas-maos_441923-1329.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p9 = new Produto(1001, "Necessire", 100, "https://img.freepik.com/psd-gratuitas/maquete-de-bolsa-masculina-de-couro_1332-15345.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p10 = new Produto(1010, "Necessire Make", 59, "https://img.freepik.com/psd-gratuitas/mulher-segurando-bolsa-de-maquiagem_23-2148457357.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p11 = new Produto(1011, "Lenço Mockup ", 49, "https://img.freepik.com/psd-gratuitas/maquete-de-lenco-triangular-vista-em-perspectiva_1332-16657.jpg?size=338&ext=jpg&ga=GA1.2.843074877.1661354717");
let p12 = new Produto(1006, "Kit 3 Lenços Mochup", 129, "https://img.freepik.com/psd-gratuitas/maquete-de-lencos-pequenos-02_1332-20138.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
let p13 = new Produto(1012, "Lenço Mockup Blue ", 49, "https://img.freepik.com/psd-gratuitas/modelo-de-lenco-de-la-close-up_1332-14592.jpg?size=338&ext=jpg&ga=GA1.2.843074877.1661354717");

let produtos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13]


const PrivateRoutes = () => {
  console.log("private")
  return (
    <BrowserRouter>
      <NavBar />
      <Header />    
      <Routes>
        <Route path="/catalogo" element= {<Catalogo produtos={produtos} />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Showcase />} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   

  )
}

export default PrivateRoutes