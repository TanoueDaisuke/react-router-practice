import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core'

const Header = ({ user }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <Button color="inherit">
          <Link to="/">home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/notes">notes</Link>
        </Button>
        <Button color="inherit">
          <Link to="/users">users</Link>
        </Button>  
        <Button color="inherit">
          {user
            ? <em>{user} logged in</em>
            : <Link to="/login">login</Link>
          }
        </Button>                
      </Toolbar>
    </AppBar>
  )
}

export default Header

