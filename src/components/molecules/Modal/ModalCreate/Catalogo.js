/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react'
import { ContaineItem, ContainerButton, ContaineItemLi, ContaineShowCase, ContainerIcon } from './style'
import InputSearch from '../../../atoms/Inputs/InputSearch/InputSearch'
import { ButtonLogin } from '../../../atoms/Buttons/ButtonLogin/style'
import { useNavigate } from 'react-router-dom'
import Pagination from '../ModalPagination/Pagination'
import listproducts from './Products'
import { AuthContext } from '../../../context/AuthContext'
import { BsBasket2, BsCart4, BsTrash } from "react-icons/bs";
import { StyleLink } from '../../NavBar/style'
import { CartList } from '../../../pages/Cart/style'



const Catalogo = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const [itemsPage] = useState(4)
    const [currentPage, setCurrentPages] = useState(0)
    const [products, setProducts] = useState(listproducts)

    const pages = Math.ceil(products.length / itemsPage)
    const startIndex = currentPage * itemsPage;
    const endIndex = startIndex + itemsPage;
    const currentItens = products.slice(startIndex, endIndex)

    const {
        productCart = [listproducts],
        addProductCart,
        removeProductCart,
        clearCart
    } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            window.localStorage.setItem("Produtos", JSON.stringify(products))
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
                <ContainerIcon>
                    <StyleLink to="/cart"><BsCart4 /></StyleLink>
                </ContainerIcon>

            </ContainerButton>
            <Pagination pages={pages} setCurrentPages={setCurrentPages} currentPage={currentPage} />
            <ContaineShowCase>
                <CartList>
                    <a onClick={clearCart}>Limpar o carrinho</a>
                    {JSON.stringify(productCart)}
                </CartList>
                <ContaineItem>
                    {!search.length > 0
                        ? currentItens && currentItens.map(product => {
                            return <ContaineItemLi key={product.name}>
                                <img width="100%" height="380px" src={product.img} alt="produto" />
                                <h3>{product.name}</h3>
                                <h3>Codigo: {product.codigo}</h3>
                                <h3>Itens no Carrinho: {productCart.find((item) => item.id === product.id)?.qtd
                                    ? productCart.find((item) => item.id === product.id)?.qtd
                                    : 0}
                                </h3>
                                <h2>{product.price},00</h2>
                                <ContainerIcon>
                                    <a onClick={() => addProductCart(product.id)}><BsBasket2 /></a>
                                    <a onClick={() => removeProductCart(product.id)}><BsTrash /> </a>
                                </ContainerIcon>
                            </ContaineItemLi>
                        }) : filteredProduct.map(product => {
                            return <ContaineItemLi key={product.name}>
                                <img width="100%" height="380px" src={product.img} alt="produto" />
                                <h3>{product.name}</h3>
                                <h3>Codigo: {product.codigo}</h3>
                                <h3>id: {productCart.find((item) => item.id === product.id)?.qtd
                                    ? productCart.find((item) => item.id === product.id)?.qtd
                                    : 0}
                                </h3>
                                <p>{product.price}</p>
                                <ContainerIcon>
                                    <a onClick={() => addProductCart(product.id)}><BsBasket2 /></a>
                                    <a onClick={() => removeProductCart(product.id)}> <BsTrash /> </a>
                                </ContainerIcon>
                            </ContaineItemLi>
                        })}

                </ContaineItem>
            </ContaineShowCase>
        </>
    )

}

export default Catalogo