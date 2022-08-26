import styled from "styled-components"

export const ContainerVitrine = styled.div`
    height: 600px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
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
    background-color: #efefef;
    width: 250px;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    text-align: center;
`
