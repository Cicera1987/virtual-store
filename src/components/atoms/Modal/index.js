import React, {useState} from 'react'

import { ContentDiv, InputDiv } from './style'


export const Modal = () => {
  const [file, setFile] = useState()

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (

    <>
      <ContentDiv>
        <InputDiv type="file" accept='image/*' onChange={handleChange}/>
          <image src={file}/>
          <InputDiv type="text" placeholder='Nome do produto' />
          <InputDiv type="text" placeholder='Codigo do produto' />
          <InputDiv type="text" placeholder='Valor do produto' />
      </ContentDiv>
    </>
  )
}
