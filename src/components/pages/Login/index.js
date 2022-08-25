import * as React from "react";
import { useState, useEffect, useContext } from 'react'
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import { FormLogin, LoginEnter, LabelContainer, ContainerTitleLogin } from "./style";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState('')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { setAuth, auth } = useContext(AuthContext)
  console.log('auth', auth)

  const navigate = useNavigate();

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })

  }

  function handleSubmit(event) {
    event.preventDefault()
    if (form.email == 'maccicera@gmail.com' && form.password == '123') {
      setAuth(true)
      navigate("/home");
      window.alert('logado com sucesso')
    }
    else {
      window.alert("dados inseridos incorretos, tente novamente!")
    }
  }

  return (
    <LoginEnter>  
      <FormLogin onSubmit={handleSubmit} >
        <ContainerTitleLogin>Entrar</ContainerTitleLogin >
      <LabelContainer>
        <span>E-mail: </span>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Insira seu e-mail"
            onChange={handleChange}
        />
      </LabelContainer>
      <LabelContainer>
        <span>Senha:</span>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Insira sua Senha"
            onChange={handleChange}
        />
      </LabelContainer> 
        <ButtonLogin type="submit">Login</ButtonLogin>   
    </FormLogin>   
    </LoginEnter>
  )
}

export default Login