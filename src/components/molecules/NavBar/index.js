import React from 'react' 
import { VscGear } from "react-icons/vsc";
import { PageNavbar, LinkList, LinkListLi, StyleLink, CardIcon } from './style'

const NavBar = () => {

  return <PageNavbar>
    <StyleLink to="/showcase">
      Show <span>Case</span></StyleLink>
    <LinkList>

    {/* <LinkListLi>
        <StyleLink to="/">Home</StyleLink>
    </LinkListLi> */}

      <LinkListLi>
        <StyleLink to="/about">Sobre</StyleLink>
      </LinkListLi>

      <LinkListLi>
        <CardIcon>
          <StyleLink to="/login"><VscGear/></StyleLink>
        </CardIcon>
      </LinkListLi>
    </LinkList>
  </PageNavbar>
}

export default NavBar