export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
          .then(res => res.json())
}

export const postReservation = (reservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  })
    .then(res => res.json())
    .catch(err => console.log(err.message))
}

export const deleteResevationRemote = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch(err => console.log(err.message))
}
