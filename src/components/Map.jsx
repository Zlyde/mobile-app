import React, { useState } from 'react'
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const [center, setCenter] = useState({ lat: 59.329323, lng: 18.068581 })
  return (
    <MapContainer
    center={center}
    zoom={13}
    style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      />
      
    </MapContainer>
  )
}

export default Map
