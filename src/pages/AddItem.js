import React, { Component } from 'react'

import { UserContext } from '../providers/UserProvider'
import { db } from '../firebase'

export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      name: '',
      folder: '',
      status: '',
      notes: '',
    }
  }

  static contextType = UserContext

  getPageTitle = () => {
    fetch(`http://textance.herokuapp.com/title/${this.state.url}`)
      .then((data) => {
        return data.text()
      })
      .then((res) => {
        this.setState({ name: res })
      })
  }

  handleSubmit = () => {
    var { userDoc } = this.context
    var { folder, name, url, status, notes } = this.state
    userDoc
      .collection('folders')
      .doc(folder)
      .collection('projects')
      .doc(name)
      .set({ name, url, status, notes })
  }

  handleChange = (e) => {
    var { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    var { folders } = this.context
    return (
      <div id='contents'>
        <div className='container'>
          <h1>Add to Cart</h1>
          <form id='add-item-form'>
            <label>
              URL
              <input
                type='url'
                name='url'
                value={this.state.url}
                onChange={this.handleChange}
                onBlur={this.getPageTitle}
              ></input>
            </label>
            <label>
              Name
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              Folder
              <select id='folders' name='folders' onChange={this.handleChange}>
                {folders.map((folder) => (
                  <option value={folder.id}>{folder.id}</option>
                ))}
                <option value='new-folder'>Add new folder</option>
              </select>
              {folders.length === 0 || this.state.folder === 'new-folder' ? (
                <>Add new</>
              ) : (
                <></>
              )}
              {/* TODO: customer dropdown */}
              {/* <Dropdown
                title='Select a folder'
                items={folders}
                onChange={this.handleChange}
              /> */}
            </label>
            <label>
              Status
              <select id='status' name='status' onChange={this.handleChange}>
                <option value='to-do'>To do</option>
                <option value='in-progress'>In progress</option>
                <option value='done'>Done</option>
              </select>
            </label>
            <label>
              Notes
              <textarea
                style={{ width: 512, height: 140 }}
                name='notes'
                value={this.state.notes}
                onChange={this.handleChange}
              ></textarea>
            </label>
            <button type='button' onClick={this.handleSubmit}>
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    )
  }
}
