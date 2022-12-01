import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Avatares from '../../assets/avatares.svg'
import seta from '../../assets/seta.svg'
import lixeira from '../../assets/Lixeira.svg'

import H1  from '../../Components/Title';
import ContainerItens  from '../../Components/ContainerIntens';
import Button  from '../../Components/Button';



import {
  Container,
  Imagem,
  User
} from "./styles"

function Users() {
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers)
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage(){
    history.push("/")
  }

  return (
    <Container>
      <Imagem alt="logo-imagem" src={Avatares} />
      <ContainerItens isBlur={true}>
        <H1>Usúarios!</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="Lixeira" src={lixeira} />
              </button>
            </User>
          ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={seta} />Voltar
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default Users;
