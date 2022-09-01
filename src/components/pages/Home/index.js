import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../../context/AuthContext'
import { ContainerHome, ContainerButtonHome } from './style';
import { Modal } from '../../atoms/Modal';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';


const Home = () => {
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate("/catalogo")
  }

  return (
    <AuthProvider>
      <ContainerButtonHome >
        <ButtonLogin onClick={handleSubmit}>Catalogo</ButtonLogin>
      </ContainerButtonHome > 
    </AuthProvider>
  )
}

export default Home