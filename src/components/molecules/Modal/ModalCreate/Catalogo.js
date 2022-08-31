/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { ContaineItem, ContainerButton, ContaineItemLi, ContaineShowCase } from './style'
import InputSearch from '../../../atoms/Inputs/InputSearch/InputSearch'
import { ButtonLogin } from '../../../atoms/Buttons/ButtonLogin/style'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Pagination from '../ModalPagination/Pagination'




const Catalogo = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    class Produt {
        constructor(id, name, price, img, addCart, removeCart) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.img = img;
            this.addCart = addCart
            this.removeCart = removeCart
        }
    }

    let p1 = new Produt(1001, "Bolsa Dual", 100, "https://img.freepik.com/fotos-gratis/cor-mulher-luxuosa-elegancia-roxa_1203-6518.jpg?size=338&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p2 = new Produt(1002, "Bolsa LR", 289, "https://img.freepik.com/psd-gratuitas/logo-mockup-luxury-bag_145275-414.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p3 = new Produt(1003, "Bolsa Moderna", 329, "https://img.freepik.com/fotos-premium/bolsa-de-couro-moda-mulher_1339-103665.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p4 = new Produt(1004, "Bolsa dia-a-dia ", 235, "https://img.freepik.com/fotos-gratis/linda-elegancia-e-bolsa-de-moda-feminina-de-luxo_74190-4899.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p5 = new Produt(1005, "Bone CAP", 99, "https://img.freepik.com/psd-gratuitas/maquete-de-vista-frontal-de-bone-preto_125540-1038.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p6 = new Produt(1007, "Bone CAP Dourado", 99, "https://img.freepik.com/psd-gratuitas/maquete-de-tampa-branca-isolada_125540-1040.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p7 = new Produt(1008, "Carteira Premium ", 189, "https://img.freepik.com/fotos-premium/carteira-de-couro-vermelha-nas-maos-femininas_186673-4551.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p8 = new Produt(1009, "Bolsa Lateral", 100, "https://img.freepik.com/fotos-premium/menina-segurando-uma-bolsa-feminina-nas-maos_441923-1329.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p9 = new Produt(1001, "Necessire", 100, "https://img.freepik.com/psd-gratuitas/maquete-de-bolsa-masculina-de-couro_1332-15345.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p10 = new Produt(1010, "Necessire Make", 59, "https://img.freepik.com/psd-gratuitas/mulher-segurando-bolsa-de-maquiagem_23-2148457357.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717");
    let p11 = new Produt(1011, "Lenço Mockup ", 49, "https://img.freepik.com/psd-gratuitas/maquete-de-lenco-triangular-vista-em-perspectiva_1332-16657.jpg?size=338&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p12 = new Produt(1006, "Kit 3 Lenços Mochup", 129, "https://img.freepik.com/psd-gratuitas/maquete-de-lencos-pequenos-02_1332-20138.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p13 = new Produt(1012, "Lenço Mockup Blue ", 49, "https://img.freepik.com/psd-gratuitas/modelo-de-lenco-de-la-close-up_1332-14592.jpg?size=338&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p14 = new Produt(1014, "Boné Logo", 99, "https://img.freepik.com/psd-premium/modelo-de-logotipo-em-preto-e-branco-com-bone-esportivo_57262-105.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");
    let p15 = new Produt(1015, "carteira feminina", 129, "https://t3.ftcdn.net/jpg/02/48/72/46/240_F_248724638_CmVOwxQz3VBwlp24cgYEIcLuD4CVZ9tb.jpg", "+", "-");
    let p16 = new Produt(1016, "Necessaire", 49, "https://img.freepik.com/psd-gratuitas/maquete-de-bolsas-para-mulheres_1332-16345.jpg?size=626&ext=jpg&ga=GA1.2.843074877.1661354717", "+", "-");


    let products = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16]

    console.log(products)



    const [itemsPage] = useState(4)
    const [currentPage, setCurrentPages] = useState(0)
    const [setProducts] = useState([])

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