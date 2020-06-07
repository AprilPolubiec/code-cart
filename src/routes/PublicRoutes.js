import React, { Component } from 'react'
import { UserContext } from '../providers/UserProvider'
import { Route, Switch, Redirect } from 'react-router-dom'
import Landing from '../pages/Landing'

export default class PublicRoutes extends Component {
  static contextType = UserContext

  render() {
    console.log('PublicRoutes()')

    var { user } = this.context
    if (user) {
      return <Redirect to='/' />
    } else {
      return (
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/folders'>
            <Redirect to='/' />
          </Route>
          <Route path='/add-item'>
            <Redirect to='/' />
          </Route>
          <Route exact path='/profile'>
            <Redirect to='/' />
          </Route>
          {/* <Route component={Error} /> */}
        </Switch>
      )
    }
  }
}
