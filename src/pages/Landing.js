import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div id='landing'>
        <div id='left-panel'>
          <h1>this is codecart.</h1>
          {/* <h3>a developer's best friend.</h3> */}
        </div>
        <div id='right-panel'>
          <div id='firebaseui-auth-container'></div>
        </div>
      </div>
    )
  }
}
