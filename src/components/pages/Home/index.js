import React from 'react'
import AuthProvider from '../../context/AuthContext'
import { ContainerProdutos } from '../Showcase/style';


const Home = () => {

  return (
    <AuthProvider>
      <ContainerProdutos>
        <h1>Home</h1>
      </ContainerProdutos>
    </AuthProvider>
  )
}

export default Home