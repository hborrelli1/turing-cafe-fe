import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'
import PropTypes from 'prop-types'
import './ReservationContainer.css'

const ReservationContainer = ({ reservations, addReservation }) => {
  let reservationsDisplay;

  reservations.length > 0
    ? reservationsDisplay = reservations.map(res => (
        <ReservationCard key={res.id} reservationInfo={res} />
      ))
    : reservationsDisplay = <p>No reservations to display.</p>;


  return (
    <section>{reservationsDisplay}</section>
  )
}

export default ReservationContainer
