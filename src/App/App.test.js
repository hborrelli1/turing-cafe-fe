import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fetchReservations } from '../ApiCalls/ApiCalls';
jest.mock('../ApiCalls/ApiCalls');

describe('App Test', () => {
  let reservations;
  beforeEach(() => {
    reservations = [
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
      },
      {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
      },
      {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
      }
    ]
  })

  it('should render the form and ideas to the page', async () => {
    jest.clearAllMocks();
    fetchReservations.mockResolvedValue(reservations);

    const { getByText, getByPlaceholderText, debug } = render(<App />)

    expect(getByText('Turing Cafe Reservations')).toBeInTheDocument();
    expect(getByText('Make Reservation')).toBeInTheDocument();
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    await waitFor(() => getByText('Christie'));

    expect(getByText('Christie')).toBeInTheDocument();
  });

  it('should be able to add a new reservation', async () => {
    jest.clearAllMocks();
    fetchReservations.mockResolvedValue(reservations);
    // const addReservation = jest.fn();
    Date.now = jest.fn().mockImplementation(() => 84848993);
    const newRes = {
      id: 84848993,
      name: 'Jeff',
      date: '(4/12)',
      time: '4:00',
      number: '6'
    }
    // addReservation.mockImplementation(() => newRes);

    const { getByText, getByPlaceholderText, debug } = render(<App />)

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date (mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const numberOfGuestsInput = getByPlaceholderText('Number of Guests');
    const submitButton = getByText('Make Reservation');

    await waitFor(() => {
      fireEvent.change(nameInput, {target:{value:'Jeff'}})
      fireEvent.change(dateInput, {target:{value:'(4/12)'}})
      fireEvent.change(timeInput, {target:{value:'4:00'}})
      fireEvent.change(numberOfGuestsInput, {target:{value:'6'}})
    })
    fireEvent.click(submitButton)

    expect(getByText('Jeff')).toBeInTheDocument();
    expect(getByText('(4/12)')).toBeInTheDocument();
    expect(getByText('4:00')).toBeInTheDocument();
    expect(getByText('Number of guests: 6')).toBeInTheDocument();
    
  })
});
