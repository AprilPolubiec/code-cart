import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

//Pages
import Home from '../pages/Home'
import Folders from '../pages/Folders'
import Folder from '../pages/Folder'
import AddItem from '../pages/AddItem'
import Profile from '../pages/Profile'
import Navbar from '../components/Navbar'

import { UserContext } from '../providers/UserProvider'

import PublicRoutes from './PublicRoutes'

export default class PrivateRoutes extends Component {
  static contextType = UserContext

  render() {
    var { user } = this.context
    if (user) {
      return (
        <div id='main'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/folders' component={Folders}>
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
      )
    } else {
      return <Route path='' component={PublicRoutes} />
    }
  }
}
