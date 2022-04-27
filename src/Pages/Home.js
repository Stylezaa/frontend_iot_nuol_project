import React from 'react'
import Header from "../Components/HeaderComponent";
import Footer from "../Components/FooterComponent";
import MapComponent from '../Components/MapComponent'
import NumberDataComponent from '../Components/Chart/NumberDataComponent'
import BarDataComponent from '../Components/Chart/BarDataComponent'
import PieDataComponent from '../Components/Chart/PieDataComponent'
import AreaDataComponent from '../Components/Chart/AreaDataComponent'

function Home() {
  return (
    <>
        <Header />
        <div className="container mx-auto my-10 max-w-7xl px-6">
          <MapComponent />
          <NumberDataComponent />
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 pb-4">
            <BarDataComponent />
            <PieDataComponent />
          </div>
          <div className="grid gap-4 sm:grid-cols-1 grid-cols-1 pb-4">
            <AreaDataComponent />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Home