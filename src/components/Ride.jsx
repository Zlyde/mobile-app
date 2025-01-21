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
    <div className='card-container'>
      <h4 className='card-title'>Trip: {trip.trip_id}</h4>
      <div className='card'>
        <span className="card-info">User: {trip.user_id}</span>
        <span className="card-info">Bike: {trip.bike_id}</span>
        <button
          className='button green-button'
          onClick={endRide}
        >AVSLUTA RESA
        </button>        
      </div>
    </div>
  )
}

export default Ride
