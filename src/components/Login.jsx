import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Login = props => {
  const history = useHistory()

  const Button = styled.button`
    background: Bisque;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid Chocolate;
    border-radius: 3px;
  `

  const Input = styled.input`
    margin: 0.25rem;
  `

  const onSubmit = (e) => {
    e.preventDefault()
    props.onLogin('テストユーザー')
    history.push('/')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <Input type="text"/>
        </div>
        <div>
          password: <Input type="password" />
        </div>
        <Button type="submit">login</Button>
      </form>
    </div>
  )
}

export default Login