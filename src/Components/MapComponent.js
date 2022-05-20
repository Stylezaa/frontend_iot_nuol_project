import React from 'react'
import axios from 'axios';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet"

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapComponent() {

  const [AllData, getAllData] = React.useState([]);

    const getSensor = async () => {
        try {
        const resp = await axios.get('https://ceit-iot-api.herokuapp.com/api/sensor/1');
        getAllData(resp.data);
        } catch (error) {
        console.log(error)
        }
    };

    React.useEffect(() => {
        getSensor();

        const interval = setInterval(() => {
        getSensor();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const markerElements = AllData.map(location => {
      const {
          _id, pH,
          EC, DO,
          latitude, longitude,
          // timestamp
      } = location;

      return (
          <Marker 
              key={`${_id}`} 
              position={[latitude, longitude]}
           >
              <Popup>
                <ul>
                  <li>pH: {pH}</li>
                  <li>EC: {EC}</li>
                  <li>DO: {DO}</li>
                </ul>
              </Popup>
          </Marker>
      );
    });

  return (
    <>
      <MapContainer style={{height: '400px'}} className="drop-shadow-md rounded" center={[17.965835,102.611009]} zoom={14} scrollWheelZoom={false}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* {AllData.map((data) => (
           <Marker position={[data.latitude,data.longitude]}>
           </Marker>
          ))} */}
          {/* <Marker position={[17.965835,102.611009]}>

          </Marker> */}

        {markerElements}
      </MapContainer>
    </>
  )
}

export default MapComponent