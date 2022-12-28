import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUsers } from './UsersData'

const Wrapper = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  border: 1px solid black;
`

const ListItem = styled.p`
  width: 100%;
  font-size: 2rem;
`

const Users = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    getUsers()
    .then(res => setUserList(res.data))
    .catch(err => console.log(err.response))
  }, [])

  return (
    <>
      {userList.map((item, index) => {
        return (
          <Wrapper key={index}>
            <ListItem>{item.document_id}</ListItem>
            <ListItem>{`${item.first_name} ${item.last_name}`}</ListItem>
          </Wrapper>
        )
      })}
    </>
  )
}

export default Users