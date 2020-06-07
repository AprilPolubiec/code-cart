import React, { Component } from 'react'
import { UserContext } from '../providers/UserProvider'

import { withRouter } from 'react-router-dom'

class Home extends Component {
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

export default withRouter(Home)
