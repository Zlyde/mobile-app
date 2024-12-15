import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Map from "../components/Map";
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

  return <Map center={center} cities={cities} />
};

export default MapPage;
