import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../../context/AuthContext'
import { ContainerHome } from './style';
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import { ContaineItem } from '../Showcase/style';
import { StyleForm } from '../../molecules/Modal/ModalCard/style';


const Home = () => {
  const [search, setSearch] = useState("")
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