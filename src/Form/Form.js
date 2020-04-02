import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    // let value = event.target.name === 'number' ? parseInt(event.target.value) : event.target.value;
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = (event) => {
    event.preventDefault();
    const newRes = {
      ...this.state,
      id: Date.now()
    }
    this.props.addReservation(newRes);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  }

  render () {
    return (
      <form>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='date'
          value={this.state.date}
          placeholder='Date (mm/dd)'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='time'
          value={this.state.time}
          placeholder='Time'
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='number'
          value={this.state.number}
          placeholder='Number of Guests'
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
