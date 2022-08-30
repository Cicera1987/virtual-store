import React, { useState } from 'react'
import Product from './Product'
import { ContaineItem, ContainerButton } from './style'
import InputSearch from '../../../atoms/Inputs/InputSearch/InputSearch'
import { ButtonLogin } from '../../../atoms/Buttons/ButtonLogin/style'
import { useNavigate } from 'react-router-dom'

const Catalogo = (props) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const [product, setProduct] = useState('')

    let produtos = []

    for (let x = 0; x < props.produtos.length; x++) {
      produtos.push(<Product produto={props.produtos[x]} />)

   }
    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate("/")
    }
    return (
        <>
            <ContainerButton>
                <InputSearch search={search} setSearch={setSearch} />
                <ButtonLogin onClick={handleSubmit}>Sair</ButtonLogin>
            </ContainerButton>
            <ContaineItem>
                {produtos}
            </ContaineItem>
        </>
    )
}

export default Catalogo