import React from 'react'
import AuthProvider from '../../context/AuthContext'
import { ContainerHome} from './style'

const Home = () => {
  return (
    <AuthProvider>
    <ContainerHome>
        <h1>Home</h1>
    </ContainerHome>
    </AuthProvider>
  )
}

export default Home