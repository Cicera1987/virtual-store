import React from 'react'
import { ContainerProduto,  ContainerVitrine } from './style'




const Product = (props) => {

  
  return (
    <ContainerVitrine>
      <ContainerProduto>
        <img 
        width="100%" 
        height="390px" 
        src={props.produto.img} alt="produto" />
        <p>{props.produto.name}</p>
        <p>Codigo:{props.produto.id} </p>
        <p> R$ {props.produto.price}</p>
      </ContainerProduto>
    </ContainerVitrine>
  );
};

export default Product