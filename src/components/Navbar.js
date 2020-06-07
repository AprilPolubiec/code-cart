import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFolder, faPlus } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from '../providers/UserProvider'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  static contextType = UserContext

  handleIconClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  handleSignOut = () => {
    var {handleSignOut} = this.context
    handleSignOut()
  }
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
          <img
            id='user-photo'
            src={user.photoURL}
            alt='profile-pic'
            onClick={this.handleIconClick}
            className={this.state.menuOpen ? 'selected' : ''}
          ></img>
        </div>
        {this.state.menuOpen ? (
          <div id='user-menu'>
            <div>{user.email}</div>
            <div onClick={this.handleSignOut}>Sign Out</div>
          </div>
        ) : (
          <></>
        )}
      </>
    )
  }
}
