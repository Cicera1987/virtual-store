import * as React from "react";
import { useState, useContext } from 'react'
import { ButtonLogin } from '../../atoms/Buttons/ButtonLogin/style';
import { FormLogin, LoginEnter, LabelContainer, ContainerTitleLogin } from "./style";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState('')
  const [users, setUsers] = useState()


  const { setAuth, auth } = useContext(AuthContext)

  const navigate = useNavigate();

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })

  }

  function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem("users", "Adm",)
    localStorage.getItem('users')
    setUsers(users)
    if (form.email === 'ccica_25@hotmail.com' && form.password === '123') {
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
            value={users}
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
            value={users}
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