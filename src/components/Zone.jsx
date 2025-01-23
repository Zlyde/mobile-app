import React from 'react'
import { GeoJSON, Marker, Popup } from 'react-leaflet'
import P from '../assets/p.png'
import L from 'leaflet'

const Zone = ({ zone }) => {
  if (!zone) return
  const getCenter = (coordinates) => {
    const latLngs = coordinates[0]; // Use the first polygon (excluding holes)
    let latSum = 0;
    let lngSum = 0;

    latLngs.forEach(([lng, lat]) => {
      latSum += lat;
      lngSum += lng;
    });

    const latCenter = latSum / latLngs.length;
    const lngCenter = lngSum / latLngs.length;

    return [latCenter, lngCenter];
  }
  const center = getCenter(zone.location.coordinates);

  const pIcon = new L.icon({
    iconUrl: P,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  })
  return (
    <>
      <GeoJSON
        data={zone.location}
        style={{
          color: zone.color,
          weight: 2,
          fillColor: zone.color,
          fillOpacity: 0.3
        }} 
      />
      <Marker
        position={center}
        icon={pIcon}
      >

        <Popup>
          <div>
            <h3 className="font-bold">{zone.parking_zone_id}</h3>
            <p>Parkeringszon</p>
            {/* <p>Antal cyklar: {zone.bikeCount || 0}</p> */}
          </div>
        </Popup>
      </Marker>
    </>
  )
}

export default Zone
