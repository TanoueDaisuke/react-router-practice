import React, { useState } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link, 
  Redirect,
  // useRouteMatch,
} from 'react-router-dom'

import Notes from './components/Notes'
import Note from './components/Note'
import Login from './components/Login'
import styled from 'styled-components'

const App = () => {
  const Page = styled.div`
    padding: 1em;
    background: papayawhip;
  `

  const Navigation = styled.div`
    background: BurlyWood;
    padding: 1em;
  `

  const Footer = styled.div`
    background: Chocolate;
    padding: 1em;
    margin-top: 1em;
  `

  const[notes, setNotes] = useState([
    {
      id: 1,
      content: "てすと１",
      important: true
    },
    {
      id: 2,
      content: "てすと２",
      important: false
    },
  ])
  
  const [user, setUser] = useState(null)
  
  const login = (user) => {
    setUser(user)
  }
  
  const Home = () => (
    <div> <h2>TKTL notes app</h2> </div>
    )
    
    
  const Users = () => (
    <div> <h2>Users</h2> </div>
    )
    
  const padding = {
    padding: 5
  }
    
  // const match = useRouteMatch('/notes/:id')
  // console.log(match);
  
  // const note = match
  //   ? notes.find(note => note.id === Number(match.params.id))
  //   : null
  const note = notes[0] // ↑がエラー出るのでとりあえず
    
  return (
    <Page>
      <Router>
        <Navigation>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/users">users</Link>
          <Link style={padding} to="/notes">notes</Link>
          {user 
            ? <em>{user} logged in</em> 
            : <Link style={padding} to="/login">login</Link>
          }
        </Navigation>

        <Switch>
          <Route path="/notes/:id">
            <Note note={note} />
          </Route>
          <Route path="/notes">
            <Notes notes={notes} />
          </Route>
          <Route path="/users">
            { user ? <Users /> : <Redirect to="/login" />}
          </Route>
          <Router path="/login">
            <Login onLogin={login} />
          </Router>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <Footer>
        <em>Note app, Department of Computer Science 2020</em>
      </Footer>
    </Page>
  )
}

export default App