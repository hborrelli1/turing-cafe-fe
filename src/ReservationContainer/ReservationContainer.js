import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'
import PropTypes from 'prop-types'

const ReservationContainer = ({ reservations }) => {
  let reservationsDisplay;

  reservations.length > 0
    ? reservationsDisplay = reservations.map(res => <ReservationCard reservationInfo={res} />)
    : reservationsDisplay = <p>No reservations to display.</p>;


  return (
    <section>{reservationsDisplay}</section>
  )
}

export default ReservationContainer
