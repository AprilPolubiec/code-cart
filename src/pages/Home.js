import React, { Component } from 'react'
import { UserContext } from '../providers/UserProvider'

export default class Home extends Component {
  static contextType = UserContext
  render() {
    var { user, authLoaded } = this.context
    return (
      <div id='contents'>
        Home
        <div className='container'></div>
      </div>
    )
  }
}
