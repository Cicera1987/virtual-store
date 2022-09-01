/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react'
import { ContaineItem, ContainerButton, ContaineItemLi, ContaineShowCase } from './style'
import InputSearch from '../../../atoms/Inputs/InputSearch/InputSearch'
import { ButtonLogin } from '../../../atoms/Buttons/ButtonLogin/style'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Pagination from '../ModalPagination/Pagination'
import { CartContext } from '../../../context/CartContext'
import listproducts from './Products'



const Catalogo = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    
    // const { productCart, setProductCart } = useContext()
    const [itemsPage] = useState(4)
    const [currentPage, setCurrentPages] = useState(0)
    const [products, setProducts] = useState(listproducts)

    const pages = Math.ceil(products.length / itemsPage)
    const startIndex = currentPage * itemsPage;
    const endIndex = startIndex + itemsPage;
    const currentItens = products.slice(startIndex, endIndex)


    useEffect(() => {
        const fetchData = async () => {
            window.localStorage.setItem("data", JSON.stringify(products))
        }
        fetchData()
    }, [setProducts])

    async function handleSubmit(e) {
        e.preventDefault()
        navigate("/")
    }

    const filteredProduct = search.length > 0 ?
        products.filter((obj) =>
            obj.name.toLowerCase().includes(search.toLowerCase())) : [];
    return (
        <>
            <ContainerButton>
                <InputSearch search={search} setSearch={setSearch} />
                <ButtonLogin onClick={handleSubmit}>Sair</ButtonLogin>
            </ContainerButton>
            <Pagination pages={pages} setCurrentPages={setCurrentPages} currentPage={currentPage} />
            <ContaineShowCase>
                <ContaineItem>
                    {!search.length > 0
                        ? currentItens && currentItens.map(product => {
                            return <ContaineItemLi key={product.name}>
                                <img width="100%" height="380px" src={product.img} alt="produto" />
                                <p>{product.name}</p>
                                <p>{product.id}</p>
                                <p>{product.price},00</p>
                                <p>
                                <span>
                                    <button onClick={() => (product.addCart)}> + </button>
                                </span>
                                <span>
                                    <button onClick={() => (product.removeCart)}> - </button>
                                </span>
                                </p>
                            </ContaineItemLi>
                        }) : filteredProduct.map(product => {
                            return <ContaineItemLi key={product.name}>
                                <img width="100%" height="380px" src={product.img} alt="produto" />
                                <p>{product.name}</p>
                                <p>{product.id}</p>
                                <p>{product.price}</p>
                                <p>
                                    <span>{product.addCart}</span>
                                    <span>{product.removeCart}</span>
                                </p>
                            </ContaineItemLi>
                        })}
                </ContaineItem>
            </ContaineShowCase>
        </>
    )

}
Catalogo.propType = {
    produtos: PropTypes.array.isRequired
}

export default Catalogo