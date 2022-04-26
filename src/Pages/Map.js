import React from 'react'
import Header from "../Components/HeaderComponent";
import Footer from "../Components/FooterComponent";
import MapComponent from '../Components/MapComponent'
import DataGridComponent from '../Components/DataGridComponent'

function Home() {
  return (
    <>
        <Header />
        <MapComponent />
        <DataGridComponent />
        <Footer />
    </>
  )
}

export default Home