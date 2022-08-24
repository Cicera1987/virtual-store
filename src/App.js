import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'

import NavBar from './components/molecules/NavBar'
import Footer from './components/organisms/Footer';
import Login from './components/pages/Login';
import Header from './components/organisms/Header';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
