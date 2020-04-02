import React, { Component } from 'react';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';
import './App.css';
import { fetchReservations, postReservation, deleteResevationRemote } from '../ApiCalls/ApiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = async () => {
    let fetchedReservations = await fetchReservations();
    this.setState({ reservations: fetchedReservations });
  }

  addReservation = (newRes) => {
    postReservation(newRes)
    this.setState({ reservations: [...this.state.reservations, newRes] });
  }

  deleteReservation = (id) => {
    deleteResevationRemote(id);
    const filteredReservations = this.state.reservations.filter(res => res.id !== id);
    this.setState({ reservations: filteredReservations })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            addReservation={this.addReservation}
          />
        </div>
        <div className='resy-container'>
          <ReservationContainer
            reservations={this.state.reservations}
            deleteReservation={this.deleteReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
