import React, { Component } from 'react';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import './App.css';
import { fetchReservations } from '../ApiCalls/ApiCalls'

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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
