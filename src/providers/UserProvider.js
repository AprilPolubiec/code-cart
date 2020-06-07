import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

import { auth, ui, uiConfig } from '../firebase'

const UserContext = React.createContext()
const UserConsumer = UserContext.Consumer

class UserProvider extends Component {
  constructor(props) {
    super(props)

    const handleSignOut = () => {
      auth.signOut()
    }

    this.state = {
      user: null,
      handleSignOut,
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user, authLoaded: true })
      if (user) {
        ui.reset()
      } else {
        ui.start('#firebaseui-auth-container', uiConfig)
      }
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
