import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom';
import L from 'leaflet'
import scooterImg from '../assets/scooter.png'
import usedScooter from '../assets/electric-scooter.png'

const Bike = ({ bike }) => {
  const navigate = useNavigate();
  let theImg = scooterImg;
  let theData = sessionStorage.getItem("ongoingTrip")
  let theTrip = JSON.parse(theData)
  
  if (theTrip && bike.bike_id == theTrip.bike_id) {
    theImg = usedScooter;
  }
  if (!bike || !bike.location || !bike.location.coordinates || bike.status !== "available" || bike.battery_level < 50) {
    if (theTrip && bike.bike_id == theTrip.bike_id) {
      theImg = usedScooter;
    } else {
      return null
    }
  }

  const bikeIcon = new L.icon({
    iconUrl: theImg,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  })

  const startRideButton = {
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
  }

  const handleStartRide = async () => {
    navigate(`/start-ride/${bike.bike_id}`);
  };

  return (
    <Marker 
      position={[
        bike.location.coordinates[1],
        bike.location.coordinates[0]
      ]}
      icon={bikeIcon}
    >
      <Popup>
        <div>
          <h3>Bike Info</h3>
          <p><strong>ID:</strong> {bike.bike_id}</p>
          <p><strong>Battery:</strong> {bike.battery_level}</p>
          <button
            style={startRideButton}
            onClick={handleStartRide}
          >
            Start Ride
          </button>
        </div>
      </Popup>
    </Marker>
  )
}

export default Bike