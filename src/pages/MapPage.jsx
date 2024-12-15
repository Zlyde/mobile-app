import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import City from "../components/City";
import { fetchCities } from "../utils/ApiCall";

const MapPage = () => {
  const [center, setCenter] = useState({ lat: 59.329323, lng: 18.068581 });
  const [cities, setCities] = useState([])

  const getCities = async () => {
    const data = await fetchCities()
    setCities(data)
  }

  useEffect(() => {
    getCities()
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

export default MapPage;
