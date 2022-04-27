import React from 'react'
import Header from "../Components/HeaderComponent";
import Footer from "../Components/FooterComponent";
import MapComponent from '../Components/MapComponent'
import DataGridComponent from '../Components/DataGridComponent'

function Home() {
  return (
    <>
        <Header />
        <div className="container mx-auto my-2 max-w-7xl px-6">
          <div className="pb-5">
            <MapComponent />
          </div>
          <DataGridComponent />
        </div>
        <Footer />
    </>
  )
}

export default Home