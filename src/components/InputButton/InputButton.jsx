import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  background-color: #3949ab;
  cursor: pointer;
  outline: none;
  border: none;
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    background-color: #1a237e;
  }
`

const InputButton = (props) => {
  return (
    <Button onClick={props.method || null}>Save</Button>
  )
}

export default InputButton