import React from 'react'
import PropTypes from 'prop-types'
import './ReservationCard.css'

const ReservationCard = ({ reservationInfo, deleteReservation }) => {
  const {
    id,
    name,
    date,
    time,
    number
  } = reservationInfo

  return (
    <article>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button
        aria-label={`delete-button-${id}`}
        onClick={() => deleteReservation(id)}
      >
        Delete Reservation
      </button>
    </article>
  )
}

export default ReservationCard
