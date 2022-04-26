import React from 'react'
import Header from "../Components/HeaderComponent";
import Footer from "../Components/FooterComponent";
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function Home() {
  return (
    <>
        <Header />
            <div className="container mx-auto my-10 max-w-7xl px-6">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        <Footer />
    </>
  )
}

export default Home