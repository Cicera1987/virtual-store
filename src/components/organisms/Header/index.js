import React from 'react'
import { HeaderList } from './style'
import Headder from '../../img/headder.jpg'

const Header = () => {
  return (
    <HeaderList>
      <img width="100%" height="400px" src={Headder} />
    </HeaderList>
  )
}

export default Header