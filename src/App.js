import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Folders from './pages/Folders'
import Folder from './pages/Folder'
import AddItem from './pages/AddItem'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div id='main'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/folders'>
            <Folders />
          </Route>
          <Route path='/folders/:folderid'>
            <Folder />
          </Route>
          <Route path='/add-item'>
            <AddItem />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
