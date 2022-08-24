import React from 'react'
import { HeaderList } from './style'
import Banner01 from '../../img/Banner01.jpg'


const Header = () => {
  return (
    <HeaderList>
      <img width="95%" height="300px" src={Banner01} />
    </HeaderList>
  )
}

export default Header