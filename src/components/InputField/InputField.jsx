import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0);
  background-color: rgba(230, 230, 230, 0.516);
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  };

  &:focus {
    background-color: #ffffff;
    border: 2px solid rgba(30, 85, 250, 0.47);
  }
`

const InputField = (props) => {
  return (
    <div>
      <Input
        type={ props.type || null }
        name={ props.name || null }
        placeholder={ props.placeholder || null }
        onChange={ props.changeMethod || null }
      />
    </div>
  )
}

export default InputField