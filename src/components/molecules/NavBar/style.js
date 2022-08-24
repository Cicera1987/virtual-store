import styled from "styled-components"
import { Link } from 'react-router-dom'

export const PageNavbar = styled.div`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 2em;
`
export const LinkList = styled.ul`
    display: flex;
    list-style: none;

`
export const LinkListLi = styled.li`
    margin-right: 1em;

`
export const StyleLink = styled(Link)`
    text-decoration: none;
    border: none;
    color: black;
    transition: 0.4s;
    font-size: 1em;
    font-family: "Montserrat", sans-seri;

&:hover{
    color: #B0C4DE;
}
`