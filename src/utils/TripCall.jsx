export const startTrip = async (bike_id, user_id) => {
    
    const url = 'http://localhost:5001/api/trip/start'
    
    const requestOptions = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ bike_id, user_id })
      }
    
    
    const response = await fetch(url, requestOptions)
    const trip = await response.json()
    
    return trip
}

export const endTrip = async (trip_id) => {
  console.log(trip_id);
    
  const url = `http://localhost:5001/api/trip/end/${trip_id}`

  const requestOptions = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
  }
  
  const response = await fetch(url, requestOptions)
  const trip = await response.json()
  
  return trip
}
