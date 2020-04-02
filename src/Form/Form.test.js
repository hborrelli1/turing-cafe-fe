import React from 'react';
import Form from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form Test', () => {
  it('should render the form to the page', () => {
    const { getByPlaceholderText } = render(<Form />);

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date (mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const numGuestsInput = getByPlaceholderText('Number of Guests');

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numGuestsInput).toBeInTheDocument();
  });

  it('should be able to enter infomation into the form', () => {
    const { getByPlaceholderText, getByText } = render(<Form />)

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date (mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const numGuestsInput = getByPlaceholderText('Number of Guests');
    const submitButton = getByText('Make Reservation');

    fireEvent.change(nameInput, {target:{value:'Jeff'}});
    fireEvent.change(dateInput, {target:{value:'(4/12)'}});
    fireEvent.change(timeInput, {target:{value:'4:00'}});
    fireEvent.change(numGuestsInput, {target:{value:'4'}});

    expect(nameInput.value).toBe('Jeff');
    expect(dateInput.value).toBe('(4/12)');
    expect(timeInput.value).toBe('4:00');
    expect(numGuestsInput.value).toBe('4');

  });

  it('should be able to fill out and submit form', async () => {
    const mockAddReservation = jest.fn();
    Date.now = jest.fn().mockImplementation(() => 84848993);
    const newRes = {
      id: 84848993,
      name: 'Jeff',
      date: '(4/12)',
      time: '4:00',
      number: '4'
    }
    mockAddReservation.mockReturnValue(newRes);

    const { getByPlaceholderText, getByText } = render(<Form addReservation={mockAddReservation} />)

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date (mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const numGuestsInput = getByPlaceholderText('Number of Guests');
    const submitButton = getByText('Make Reservation');

    fireEvent.change(nameInput, {target:{value:'Jeff'}});
    fireEvent.change(dateInput, {target:{value:'(4/12)'}});
    fireEvent.change(timeInput, {target:{value:'4:00'}});
    fireEvent.change(numGuestsInput, {target:{value:'4'}});

    fireEvent.click(submitButton);

    expect(mockAddReservation).toBeCalledTimes(1)
    expect(mockAddReservation).toBeCalledWith(newRes)
  });

})
