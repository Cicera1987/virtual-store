import React from 'react'
import {ContaineItem} from './style'
import Upload from '../../molecules/Modal/ModalCard/Upload'
import { ContainerProduto } from '../../molecules/Modal/ModalCreate/style'


const Showcase = (produtos) => {


  return (

  <ContaineItem>
      <ContainerProduto>
          <Upload key={produtos} produtos={produtos} />
      </ContainerProduto>    
      </ContaineItem>


 
  )
}

export default Showcase