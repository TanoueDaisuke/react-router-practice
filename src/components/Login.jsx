import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'

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
          <TextField label="username" />
        </div>
        <div>
          <TextField label="password" type="password" />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">login</Button>
        </div>
      </form>
    </div>
  )
}

export default Login