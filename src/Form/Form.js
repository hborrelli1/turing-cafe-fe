import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numOfGuests: ''
    }
  }

  render () {
    return (
      <form>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='date'
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='time'
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='numOfGuests'
          value={this.state.numOfGuests}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}
        >
          Make Reservation
        </button>
      </form>
    )
  }
}

export default Form;
