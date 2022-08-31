import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../../context/AuthContext'
import { ContainerHome } from './style';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';


const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate("/catalogo")
  }

  return (
    <AuthProvider>
      <ContainerHome >
          <ButtonLogin onClick={handleSubmit}>Catalogo</ButtonLogin>
      </ContainerHome>
  
    </AuthProvider>
  )
}

export default Home