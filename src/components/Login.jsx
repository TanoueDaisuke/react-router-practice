import React from 'react'
import { useHistory } from 'react-router-dom'

const Login = props => {
  const history = useHistory()

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
          username: <input type="text"/>
        </div>
        <div>
          password: <input type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login