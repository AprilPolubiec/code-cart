import React, { Component } from 'react'

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

  getPageTitle = () => {
    fetch(`http://textance.herokuapp.com/title/${this.state.url}`)
      .then((data) => {
        return data.text()
      })
      .then((res) => {
        this.setState({ name: res })
      })
  }

  handleChange = (e) => {
    var { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
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
                <option value='volvo'>Volvo</option>
                <option value='saab'>Saab</option>
                <option value='fiat'>Fiat</option>
                <option value='audi'>Audi</option>
              </select>
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
            <button type='button'>Add to Cart</button>
          </form>
        </div>
      </div>
    )
  }
}
