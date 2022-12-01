import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom"
import axios from 'axios'
import People from '../../assets/People.png'
import seta from '../../assets/seta.svg'

import H1  from '../../Components/Title'
import ContainerItens  from '../../Components/ContainerIntens'
import Button  from '../../Components/Button'



import {
  Container,
  Imagem,
  InputLabel,
  Input,
} from "./styles"

function App() {
  const [users, setUsers] = useState([])
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })
    setUsers
      ([...users, newUser])

    history.push('/usuarios')
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
          Cadastrar <img alt="seta" src={seta} />
        </Button>

      </ContainerItens>

    </Container>
  )
}

export default App 
