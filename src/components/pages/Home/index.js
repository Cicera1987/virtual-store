import React from 'react'
import AuthProvider from '../../context/AuthContext'
import { ContainerProdutos } from '../Showcase/style';

const Home = (props) => {

  return (
    <AuthProvider>
      <ContainerProdutos>
        <h3>Tentando renderizar minha lista de produtos</h3>
      </ContainerProdutos>
    </AuthProvider>
  )
}

export default Home