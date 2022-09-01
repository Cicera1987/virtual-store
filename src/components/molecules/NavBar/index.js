import React from 'react'
import { VscGear } from "react-icons/vsc";
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'
import { BsFillHandbagFill } from "react-icons/bs";

const NavBar = () => {

  return <PageNavbar>
    <StyleLink to="/"></StyleLink>
    <LinkList>
    <LinkListLi>
        <CardIcon>
        <StyleLink to="/"><BsFillHandbagFill /></StyleLink>
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