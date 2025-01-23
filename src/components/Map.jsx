import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import City from "../components/City";
import Bike from './Bike';
import Zone from './Zone';
import Station from './Station';


const Map = ({ center, cities, bikes, zones, stations }) => {
  return (
    <MapContainer className="map" center={center} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map((city) => (
        <City key={city._id} boundary={city.boundary} color={city.color} />
      ))}

      {bikes.map((bike) => (
        <Bike key={bike._id} bike={bike}/>      
      ))}

      {zones.length > 0 && zones.map((zone) => (
        <Zone key={zone._id} zone={zone} />
      ))}

      {stations.length > 0 && stations.map((station) => (
        <Station key={station._id} station={station} />
      ))}
    </MapContainer>
  )
}

export default Map
