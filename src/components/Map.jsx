import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import City from "./City";

const Map = () => {
  const [center, setCenter] = useState({ lat: 59.329323, lng: 18.068581 });
  const [cities, setCities] = useState([])

  const fetchCities = async () => {
    const response = await fetch('http://localhost:5001/api/city')
    if (response) {
      const citiesData = await response.json()
      setCities(citiesData)
    } else {
      console.log('error fetching cities data')
    }
  }

  useEffect(() => {
    fetchCities()
  }, [])

  return (
    <MapContainer className="map" center={center} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map((city) => (
        <City key={city._id} boundary={city.boundary} color={city.color} />
      ))}
    </MapContainer>
  );
};

export default Map;
