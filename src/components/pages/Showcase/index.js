import React from 'react'
import { ContaineItem, ItemProdutos } from './style'
import Catalogo from '../../molecules/Modal/ModalCreate/Catalogo'


const Showcase = (produtos) => {


  return (
    <ContaineItem>
      <ItemProdutos>
        <Catalogo key={produtos} produtos={produtos} />
      </ItemProdutos>
    </ContaineItem>
  )
}

export default Showcase