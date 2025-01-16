import React from 'react'
import { endTrip } from '../utils/TripCall';
import { useNavigate } from "react-router-dom";

const Ride = ({ trip }) => {
  const navigate = useNavigate()
  const endRide = async () => {
    console.log(trip.trip_id);
    
    const data = await endTrip(trip.trip_id);
    console.log(data);
    
    sessionStorage.removeItem('ongoingTrip')
    navigate('/map')
  }
  if (!trip) {
    return (
      <div>
        <h1>Inga pågående resor</h1>
      </div>
    )
  }
  return (
    <div className='ride'>
        <h1>User: {trip.user_id}</h1>
        <h2>Bike: {trip.bike_id}</h2>
        <h3>Trip: {trip.trip_id}</h3>
        <button
          className='half-width-button green-button'
          onClick={endRide}
        >AVSLUTA RESA
        </button>
    </div>
  )
}

export default Ride