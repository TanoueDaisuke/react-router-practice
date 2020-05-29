import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Notes from './components/Notes'

const App = () => {

  // const [notes, setNotes] = useState()

  const Home = () => (
    <div> <h2>TKTL notes app</h2> </div>
  )
  
  
  const Users = () => (
    <div> <h2>Users</h2> </div>
  )

  const padding = {
    padding: 5
  }

  const notes = [{
    id: 1,
    content: "てすと１"
  }]

  return (
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/users">users</Link>
        <Link style={padding} to="/notes">notes</Link>
      </div>

      <Switch>
        <Route path="/notes/:id">
          <Notes notes={notes} />
        </Route>
        <Route path="/notes">
          <Notes notes={notes} />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <div>
        <i>Note app, Department of Computer Science 2020</i>
      </div>
    </Router>
  )
}

export default App