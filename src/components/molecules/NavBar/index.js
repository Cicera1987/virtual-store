import React from 'react' 
import { NavLink } from 'react-router-dom'
import { PageNavbar, LinkList, LinkListLi, StyleLink } from './style'

const NavBar = () => {

  return <PageNavbar>
    <StyleLink to="/">
      Show <span>Case</span></StyleLink>
    <LinkList>

    <LinkListLi>
        <StyleLink to="/">Home</StyleLink>
    </LinkListLi>

      <LinkListLi>
        <StyleLink to="/about">Sobre</StyleLink>
      </LinkListLi>

      <LinkListLi>
        <StyleLink to="/login">Login</StyleLink>
      </LinkListLi>
    </LinkList>
  </PageNavbar>
}

export default NavBar