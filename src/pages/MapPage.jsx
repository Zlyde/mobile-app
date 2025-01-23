import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { fetchCities } from "../utils/ApiCall";
import { fetchBikes } from "../utils/BikeCall";
import {
  fetchStations,
  fetchZones,
  fetchBikesAtStation,
  fetchBikesAtZone,
} from "../utils/StationZoneCall";

const MapPage = () => {
  const [center, setCenter] = useState({ lat: 56.18245003903675, lng: 15.59082446366235 });
  const [cities, setCities] = useState([])
  const [bikes, setBikes] = useState([])
  const [stations, setStations] = useState([])
  const [zones, setZones] = useState([])

  const getCities = async () => {
    const data = await fetchCities()
    setCities(data)
  }

  const getBikes = async () => {
    const bikes = await fetchBikes()
    setBikes(bikes)
  }

  const getStations = async () => {
    const data = await fetchStations()
    setStations(data)
  }

  const getZones = async () => {
    const data = await fetchZones()
    setZones(data)
  }

  useEffect(() => {
    getCities()
    getBikes()
    getStations()
    getZones()
  }, [])

  return <Map center={center} cities={cities} bikes={bikes} stations={stations} zones={zones} />
};

export default MapPage;
