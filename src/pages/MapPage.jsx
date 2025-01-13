import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { fetchCities } from "../utils/ApiCall";
import { fetchBikes } from "../utils/BikeCall";
import io from 'socket.io-client'

const socket = io('http://localhost:5001')

const MapPage = () => {
  const [center, setCenter] = useState({ lat: 59.329323, lng: 18.068581 });
  const [cities, setCities] = useState([])
  const [bikes, setBikes] = useState([])
  const numTrips = 16;
  const roomIds = Array.from({ length: numTrips }, (_, i) => `trip${i}`);

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

    roomIds.forEach((roomId) => {
      socket.emit("join-trip-room", roomId);
    });

    // const tripiD = 'trip1'
    // socket.emit('join-trip-room', (tripiD))

    socket.on('position-updated', (data) => {
      const bike = data

      setBikes((prevBikes) => {
        const updateBikes = prevBikes.filter((b) => b.bike_id !== bike.bike_id)
        return [...updateBikes, bike]
      })
    })

    return () => {
      socket.off('position-updated');
      socket.off('disconnect')
    }
  }, [])

  return <Map center={center} cities={cities} bikes={bikes} />
};

export default MapPage;
