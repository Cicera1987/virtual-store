import React from 'react'
import Product from './Product'
import { ContaineItem } from './style'

const Catalogo = (props) => {
    let produtos = [];
    
    for (let x = 0; x < props.produtos.length; x++) {
        produtos.push(<Product produto={props.produtos[x]} />)
    }
    return (
        <ContaineItem>
            {produtos}
        </ContaineItem>
    )
}

export default Catalogo