import React from "react";
import Ride from "../components/Ride";


const RidePage = () => {      
    const trip = JSON.parse(sessionStorage.getItem('ongoingTrip'))
    
    return <Ride trip={trip} />
};

export default RidePage;