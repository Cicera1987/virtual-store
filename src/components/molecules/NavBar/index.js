import React from 'react'
import { VscGear } from "react-icons/vsc";
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'

const NavBar = () => {

  return <PageNavbar>
    <StyleLink to="/">Show Case</StyleLink>
    <LinkList>
      <LinkListLi>
        <StyleLink to="/cart">Cart</StyleLink>
      </LinkListLi>
      <LinkListLi>
        <StyleLink to="/home">Home</StyleLink>
      </LinkListLi>
      <LinkListLi>
        <CardIcon>
          <StyleLink to="/login"><VscGear /></StyleLink>
        </CardIcon>
      </LinkListLi>
    </LinkList>
  </PageNavbar>
}

export default NavBar