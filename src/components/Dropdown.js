import React, { Component } from 'react'

export default class Dropdown extends Component {
  render() {
    return (
      <div className='dd-wrapper'>
        <div className='dd-header'>
          <div className='dd-header-title'></div>
        </div>
        <ul className='dd-list'>
          {this.props.items.map((item) => (
            <li className='dd-list-item'>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}
