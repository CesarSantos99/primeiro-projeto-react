import React, { useState, useRef } from "react";
import axios from 'axios'
import People from '../../assets/People.png'
import seta from '../../assets/seta.svg'

import { Container, Imagem, ContainerItens, H1, InputLabel, Input, Button } from "./styles"
//JSX
function App() {
  // const users = [];
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })
    setUsers
      ([...users, newUser])
  }

  return (
    <Container>

      <Imagem alt="logo-imagem" src={People} />

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={seta} /></Button>

      </ContainerItens>
    </Container>
  )
}

export default App 
