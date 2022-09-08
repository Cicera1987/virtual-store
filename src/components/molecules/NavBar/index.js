import React from 'react'
import { VscGear } from "react-icons/vsc";
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'
import { BsFillHandbagFill, BsCart4 } from "react-icons/bs";
import { BiStore } from "react-icons/bi";


const NavBar = () => {

  return <PageNavbar>
    <CardIcon>
    <StyleLink to="/"><BiStore/></StyleLink>
    </CardIcon>

    <LinkList>
    
    <LinkListLi>
        <CardIcon>
        <StyleLink to="/"><BsFillHandbagFill /></StyleLink>
        </CardIcon>
    </LinkListLi>

      <LinkListLi>
        <CardIcon>
          <StyleLink to="/cart"><BsCart4 /></StyleLink>
        </CardIcon>
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