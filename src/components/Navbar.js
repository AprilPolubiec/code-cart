import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from '../providers/UserProvider'

export default class Navbar extends Component {
  static contextType = UserContext
  render() {
    var { user } = this.context
    return (
      <>
        <div id='nav'>
          <div id='logo'>codecart.</div>

          <Link to='/'>
            <FontAwesomeIcon icon={faHome} />
            Dashboard
          </Link>

          <Link to='/folders'>
            <FontAwesomeIcon icon={faFolder} />
            Folders
          </Link>

          <Link to='/add-item'>
            <FontAwesomeIcon icon={faPlus} />
            ADD TO CART
          </Link>
        </div>
        <div id='top-nav'>
          <img id='user-photo' src={user.photoURL}></img>
        </div>
        <div id='user-menu'>
          <div>{user.email}</div>
          <div>Sign Out</div>
        </div>
      </>
    )
  }
}
