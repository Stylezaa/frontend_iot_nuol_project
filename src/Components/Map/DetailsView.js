import React from 'react';
import BarDataComponent from '../Chart/BarDataComponent'
import DataGridComponent from '../DataGridComponent'

const totalKeyArray = ['pH', 'DO', 'EC'];

function DetailsView(props) {
    const {
        location: { name, sensor },
        onClickClose
    } = props;

    const [open, setOpen] = React.useState(true);

    let title = name;

    const totalElements = totalKeyArray.map(key => {
        const count = sensor[key];

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
        <div className={`bg-white shadow-lg rounded fixed left-4 right-4 bottom-0 ${open ? 'top-[68%]': ' top-1/2'} top:0 lg:w-auto lg:fixed lg:top-0 lg:right-0 lg:left-2/3 lg:bottom-0 z-40 overflow-y-auto`}>
            <div className="bg-blue-500 w-full flex justify-between items-center">
                <h4 className="text-white font-lg font-semibold p-2 uppercase">{title}</h4>
                <div className="text-3xl cursor-pointer text-white px-4 py-2 bg-blue-900" onClick={onClickClose}>&times;</div>
            </div>
            <div className="grid grid-cols-3 px-1 my-3 gap-x-1">
                {totalElements}
            </div>
            <div className="px-1 mb-3 lg:hidden">
                <button onClick={() => setOpen(!open)} className="border-2 px-5 py-2 text-sm border-blue-500 mt-2 w-full uppercase font-semibold rounded-sm">{open ? 'ຂໍ້ມູນເພີ່ມຕື່ມ': ' ປິດ'}</button>
            </div>        
            <div className={`${open ? 'hidden lg:block': 'block'} mt-3 w-full`}>
                <BarDataComponent />
            </div>
            <div className={`${open ? 'hidden lg:block': 'block'} mx-auto mt-3 w-full`}>
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
    );
}

export default DetailsView;