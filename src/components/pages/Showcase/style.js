import styled from "styled-components"

export const ContainerVitrine = styled.div`
    height: 300px;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px;
`

export const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    row-gap: 30px;
    column-gap: 30px;
    padding: 0 20px;
`
export const ItemProdutos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
`

export const ContaineItem = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;
    margin: 40px;
    margin-top: 5px;


`
