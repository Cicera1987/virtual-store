import React from 'react' 
import {ContainerLabel, ContainerBuscar} from './style'

const InputSearch = ({search, setSearch}) => {
  return (
      <ContainerLabel>
          <ContainerBuscar>
              <input
                  type="seach"
                  placeholder='Buscar'
                  onChange={e => setSearch(e.target.value)}
                  value={search}
              />
          </ContainerBuscar>
      </ContainerLabel>
  )
}

export default InputSearch