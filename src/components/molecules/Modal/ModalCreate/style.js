import styled from "styled-components";

export const ContaineItem = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    width: 100%;
    padding: 0 5px;
    margin-top: 5px;


`
export const ContainerVitrine = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    padding : 2em;
    font-size: 18px;
    

`

export const ContainerProduto = styled.div`
    box-shadow: 2px 2px 4px black;
    overflow: hiden;
    height: 540px;
    width: 400px
    
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`
export const ContaineItemLi = styled.li`
    box-shadow: 2px 2px 4px black;
    overflow: hiden;
    height: 550px;
    width: 380px;
    display: grid;
    justify-content: space-between;
    padding: 0 5px;
    margin-top: 5px;
`