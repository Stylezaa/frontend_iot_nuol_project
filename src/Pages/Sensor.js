import React from 'react'
import Header from "../Components/HeaderComponent";
import Footer from "../Components/FooterComponent";
import NumberDataComponent from '../Components/Chart/NumberDataComponent'
import DataGridComponent from '../Components/DataGridComponent'

function SensorComponent() {

    return (
        <>
            <Header />
            <div className="container mx-auto my-2 max-w-7xl px-6">
                <NumberDataComponent />
                <DataGridComponent /> 
            </div>
            <Footer />
        </>
    )
}

export default SensorComponent