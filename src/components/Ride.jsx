import React, { useState, useEffect } from 'react';
import { endTrip } from '../utils/TripCall';
import { useNavigate } from "react-router-dom";

const Ride = ({ trip, bike }) => {
  const navigate = useNavigate()

  const [tripDuration, setTripDuration] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate duration in minutes and price
  const calculateDurationAndPrice = () => {
    const startTime = new Date(trip.start_time);
    const currentTime = new Date();
    const diffMs = currentTime - startTime; // Difference in milliseconds
  
    // Calculate total seconds
    const totalSeconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(totalSeconds / 60); // Total minutes
    const seconds = totalSeconds % 60; // Remaining seconds
  
    // Calculate hours and remaining minutes
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    // Update the total price based on exact minutes
    setTotalPrice(minutes * 2.5 + 10);
  
    return `${hours}h ${remainingMinutes}m ${seconds}s`;
  };

  // Update duration and price every second
    useEffect(() => {
    const interval = setInterval(() => {
      setTripDuration(calculateDurationAndPrice());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [trip.start_time]);

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
      <h4 className='card-title'>Din sparkcykel har ID {bike.bike_id}</h4>
      <div className='card'>
        <span className="card-info">Startpris: 10kr</span>
        <span className="card-info">Pris per min: 2,5kr</span>
        <span className="card-info">Total tid: {tripDuration}</span>
        <span className="card-info">Totalt pris: {totalPrice}</span>
        <span className="card-info">Batteri: {bike.battery_level}</span>
        <button
          className='btn primary-btn'
          onClick={endRide}
        >AVSLUTA RESA
        </button>        
      </div>
    </div>
  )
}

export default Ride
