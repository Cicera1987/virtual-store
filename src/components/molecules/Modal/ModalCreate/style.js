import styled from "styled-components";

export const ContaineItem = styled.div`
    display: flex;
    grid-template-columns: auto auto auto auto ;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 90%;
    margin-top: 1em;

`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 95%;
`
export const ContaineItemLi = styled.li`
    display: grid;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 2px 5px black;
    overflow: hiden;
    height: 650px;
    width: 30%;

`
export const ContaineShowCase = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;

`
export const ContainerIcon = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:flex-end;
    color:#556B2F;
    cursor: pointer;
    font-size: 1.5em;
    padding: 0  0.5em  0 0;
`
export const Containerdescrition = styled.div`
    padding: 1em  1em  0 0;
    margin:6px;
`
