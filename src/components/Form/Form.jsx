import React, { useState } from 'react'
import { fields } from './FormData'
import { saveClient } from './FormCtrl'
import InputField from '../InputField/InputField'
import InputButton from '../InputButton/InputButton'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 350px;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
`

const buildBody = () => {
  let keys = {}
  fields.forEach(item => keys[item.name] = item.defaultValue)
  return keys
}

const Form = () => {
  const [body, setBody] = useState(buildBody())
  const changeValue = (e) => {
    body[e.target.name] = e.target.value
    setBody(body)
  }

  const save = () => saveClient(body)

  return (
    <Wrapper>
      <h1>Add User</h1>
      {fields.map((item, index) => {
        return <InputField
          key={index}
          name={item.name}
          type={item.type}
          placeholder={item.name}
          changeValue={changeValue}
        />
      })}
      <InputButton method={save}/>
    </Wrapper>
  )
}

export default Form