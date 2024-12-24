import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { fetchCities } from "../utils/ApiCall";
import { fetchBikes } from "../utils/BikeCall";

const MapPage = () => {
  const [center, setCenter] = useState({ lat: 59.329323, lng: 18.068581 });
  const [cities, setCities] = useState([])
  const [bikes, setBikes] = useState([])

  const getCities = async () => {
    const data = await fetchCities()
    setCities(data)
  }

  const getBikes = async () => {
    const bikes = await fetchBikes()
    // console.log(bikes)
    setBikes(bikes)
  }

  useEffect(() => {
    getCities()
    getBikes()
  }, [])

  return <Map center={center} cities={cities} bikes={bikes} />
};

export default MapPage;
