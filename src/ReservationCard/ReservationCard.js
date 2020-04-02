import React from 'react'
import PropTypes from 'prop-types'
import './ReservationCard.css'

const ReservationCard = ({ reservationInfo }) => {
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
      <p>{number}</p>
    </article>
  )
}

export default ReservationCard
