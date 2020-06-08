import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

import { db, auth, ui, uiConfig } from '../firebase'

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
      userDoc: null,
      handleSignOut,
      folders: [],
    }
  }

  unsubscribe = function () {}
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user, authLoaded: true })
      if (user) {
        ui.reset()
        this.setState({ userDoc: db.collection('users').doc(user.uid) })
        this.unsubscribe = db
          .collection('users')
          .doc(user.uid)
          .collection('folders')
          .onSnapshot((querySnap) => {
            this.setState({ folders: querySnap.docs })
          })
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
