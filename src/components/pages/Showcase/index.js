import React from 'react'
import { ContainerVitrine, ContainerProdutos, ItemProdutos } from './style'


const Showcase = (props) => {

  return (
    <ContainerVitrine>
  <p>Dados {props.nomeApp}</p>
    </ContainerVitrine>
  )
}

export default Showcase