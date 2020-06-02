import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const Header = ({ user }) => {
  const padding = {
    padding: 5
  }
    

  return (
    <div>
      <Link style={padding} to="/">home</Link>
      <Link style={padding} to="/users">users</Link>
      <Link style={padding} to="/notes">notes</Link>
        {user 
          ? <em>{user} logged in</em> 
          : <Link style={padding} to="/login">login</Link>
        }
    </div>
  )
}

export default Header

