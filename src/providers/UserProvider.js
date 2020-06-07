import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

import { auth } from '../firebase'

const UserContext = React.createContext()
const UserConsumer = UserContext.Consumer

class UserProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user, authLoaded: true })
    })
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

// UserProvider = withRouter(UserProvider)

export { UserProvider, UserConsumer, UserContext }
