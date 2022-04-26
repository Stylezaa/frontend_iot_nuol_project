import React from 'react'
// import Button from '@mui/material/Button';
import SensorComponent from '../Components/SensorComponent'
// import ReportNew from '../Components/SensorOld'
import Header from "../Components/HeaderComponent";
import Footer from "../Components/FooterComponent";
import MapComponent from '../Components/MapComponent'

function Home() {
  return (
    <>
        <Header />
        <MapComponent />
        <SensorComponent />
        {/* <ReportNew /> */}
        <Footer />
    </>
  )
}

export default Home