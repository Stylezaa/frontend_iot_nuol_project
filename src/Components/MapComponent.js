import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

function MapComponent() {
  return (
    <>
        <div className="container mx-auto my-10 max-w-7xl px-6">
            <MapContainer style={{ height: '400px'}} className="drop-shadow-md rounded" center={[17.965835,102.611009]} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    </>
  )
}

export default MapComponent