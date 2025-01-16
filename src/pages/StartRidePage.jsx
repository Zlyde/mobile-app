import React, { useState, useEffect } from "react";
import Ride from "../components/Ride";
import { useParams, useNavigate } from 'react-router-dom';
import { startTrip } from '../utils/TripCall';

const StartRidePage = () => {
    const navigate = useNavigate()
    const userData = localStorage.getItem('user')
    const user = JSON.parse(userData)

    const { bikeId } = useParams();

    const getTrip = async () => {
        try {
            const data = await startTrip(parseInt(bikeId), user.user_id);
            
            sessionStorage.setItem('ongoingTrip', JSON.stringify(data))
            navigate('/ongoing')
        } catch (error) {
            console.error("Failed to fetch trip data:", error);
        }
    };

    useEffect(() => {
        getTrip()
      }, [])

};

export default StartRidePage;
