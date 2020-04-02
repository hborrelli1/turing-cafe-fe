import React from 'react';
import ReservationCard from './ReservationCard';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ReservationCard Tests', () => {
  it('should be able to display a reservation to the DOM', () => {
    let reservation = {
      id: 9999,
      name: 'Jeff',
      date: '(4/12)',
      time: '4:00',
      number: '4'
    }
    const { getByText } = render(<ReservationCard reservationInfo={reservation}/>);

    const resName = getByText('Jeff');
    const resDate = getByText('(4/12)');
    const resTime = getByText('4:00');
    const resNumOfGuests = getByText('Number of guests: 4');

    expect(resName).toBeInTheDocument();
    expect(resDate).toBeInTheDocument();
    expect(resTime).toBeInTheDocument();
    expect(resNumOfGuests).toBeInTheDocument();

  });

});
