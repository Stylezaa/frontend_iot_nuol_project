import React from 'react';
import BarDataComponent from '../Chart/BarDataComponent'
import DataGridComponent from '../DataGridComponent'

const totalKeyArray = ['pH', 'DO', 'EC'];

function DetailsView(props) {
    const {
        location: { name, sensor },
        onClickClose
    } = props;

    let title = name;
    // if (province !== '' && province !== country) {
    //     title = `${province}, ${country}`;
    // }

    const totalElements = totalKeyArray.map(key => {
        const count = sensor[key];
        // console.log(count)
        return (
            <div key={key} className="bg-blue-500 rounded-sm add_unit">
                <div className="flex flex-row justify-center items-center px-2 py-5">
                    <h6 className="font-sm text-white">{key}</h6>
                    <p className="ml-2 text-right text-sm sm:text-xl font-semibold text-white">{count.toFixed(2)}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="bg-white shadow-lg rounded fixed left-4 right-4 bottom-0 top-[80%] top: lg:w-100 lg:fixed lg:top-0 lg:right-0 lg:left-2/3 lg:bottom-0 z-40 overflow-y-auto">
            <div>
                <div className="bg-blue-500 w-full flex justify-between items-center">
                    <h4 className="text-white font-lg font-semibold p-2 uppercase">{title}</h4>
                    <div className="text-3xl cursor-pointer text-white p-2 bg-blue-900" onClick={onClickClose}>&times;</div>
                </div>
                <div className="grid grid-cols-3 px-1 mt-3 gap-x-1">
                    {totalElements}
                </div>
                <div className="mt-3 hidden sm:block w-full">
                    <BarDataComponent />
                </div>
                <div className="mt-3 hidden sm:block w-full">
                    <DataGridComponent 
                        GridHeight={500}
                        pHWidth={60} 
                        ECWidth={120} 
                        DOWidth={120} 
                        latitudeWidth={100}
                        longitudeWidth={100}
                        last_updateWidth={200}
                    />
                </div>
            </div>
        </div>
    );
}

export default DetailsView;