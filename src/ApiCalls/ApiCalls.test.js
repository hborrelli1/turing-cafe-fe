import React from 'react';
import App from '../App/App';
import { render, waitFor, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { fetchReservations, postReservation, deleteResevationRemote } from '../ApiCalls/ApiCalls';
jest.mock('../ApiCalls/ApiCalls');


describe('ApiCalls Tests', () => {
  let reservations;
  let newReservation;

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

    newReservation = {
      id: 84848993,
      name: 'Jeff',
      date: '(4/12)',
      time: '4:00',
      number: '6'
    }
  });

  it('should be able to fetch data', async () => {
    fetchReservations.mockResolvedValue(reservations);

    const { getByText } = render(<App />);
    expect(fetchReservations).toHaveBeenCalledTimes(1)
    await waitFor(() => getByText('Christie'));
    expect(getByText('Christie')).toBeInTheDocument();
  });

  it('should be able to post a reservation', async () => {
    jest.clearAllMocks();
    Date.now = jest.fn().mockImplementation(() => 84848993);
    const { getByText, getByPlaceholderText } = render(<App />)

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

    expect(postReservation).toHaveBeenCalledTimes(1)
    expect(postReservation).toHaveBeenCalledWith(newReservation)
  });

  it('should be able to delete a reservation', async () => {
    jest.clearAllMocks();
    fetchReservations.mockResolvedValue(reservations);

    const { getByText, getByLabelText, queryByLabelText } = render(<App />);

    await waitFor(() => getByText('Christie'));
    const firstResDeleteButton = getByLabelText('delete-button-1');

    expect(firstResDeleteButton).toBeInTheDocument();

    fireEvent.click(firstResDeleteButton);

    await waitFor(() => {
      expect(queryByLabelText('delete-button-1')).not.toBeInTheDocument()
    })
  })
})
