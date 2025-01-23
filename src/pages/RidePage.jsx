import React, { useState, useEffect } from "react";
import Ride from "../components/Ride";
import { fetchBikeById } from "../utils/BikeCall";

const RidePage = () => {
  const [trip, setTrip] = useState(null);
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const tripData = JSON.parse(sessionStorage.getItem("ongoingTrip"));
      setTrip(tripData);

      if (tripData) {
        const bikeData = await fetchBikeById(tripData.bike_id);
        setBike(bikeData);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!trip || !bike) {
    return <div>Inga pågående resor</div>;
  }

  return <Ride trip={trip} bike={bike} />;
};

export default RidePage;