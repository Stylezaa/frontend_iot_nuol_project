import React from 'react';

const totalKeyArray = ['pH', 'DO', 'EC'];

function ListView(props) {
    const { 
        locationArray, 
        selectedLocation, 
        onSelectItem, 
        onDeselectItem 
    } = props;



    function onClickItem(id) {
        if (selectedLocation === null) onSelectItem(id);
        else if (selectedLocation.id !== id) onSelectItem(id);
        else onDeselectItem();
    }

    const totalElements = totalKeyArray.map((key) => {
        const sum = locationArray.reduce((sum, location) => {
            return sum = (sum + location.sensor[key]);  
        }, 0);

        const sumData = sum/locationArray.length
        
        return (
            <div key={key} className="bg-blue-500 rounded-sm">
                <div className="flex flex-row justify-center items-center px-2 py-5">
                    <h6 className="font-xs text-white">{key}</h6>
                    <p className="ml-2 text-right font-xl font-semibold text-white">{sumData.toFixed(2)}</p>
                </div>
            </div>
        );
    });

    const locationElements = locationArray.map(location => {
        const {
            id, name,
            sensor: { pH, DO, EC }
        } = location;

        let title = name;
        // if (province !== '' && province !== country) {
        //     title = `${province}, ${country}`;
        // }

        let locationClass = 'bg-white p-5 cursor-pointer border-b border-solid border-gray-400 first:mt-5 last:mb-5 last:border-b-0 hover:bg-gray-200';
        if (selectedLocation !== null) {
            if (location.id === selectedLocation.id) {
                locationClass += ' selected';
            }
        }

        return (
            <div key={`${id}-${name}`} className={locationClass} onClick={() => onClickItem(id)}>
                <div className="grid grid-cols-2">
                    <div>
                        <h6 className="uppercase">{title}</h6>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-right">{pH.toFixed(2)}</p>
                        <p className="text-right">{DO.toFixed(2)}</p>
                        <p className="text-right">{EC.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="bg-white flex flex-col fixed top-0 bottom-0 left-0 w-80 z-30">
            <a href="/" className="bg-blue-500	border-b border-solid border-gray-400 shrink-0 text-white text-center text-lg font-semibold p-5 w-full">Water MSN</a>
            <div className="bg-white border-b border-solid border-gray-400 shrink-0 px-2 py-5 shadow-md">
                <h2 className="font-semibold uppercase">ຄ່າສະເລ່ຍ ({locationArray.length}) ອຸປະກອນ</h2>
                <div className="grid grid-cols-3 mt-3 gap-x-1">
                    {totalElements}
                </div>
            </div>  
            <div className="bg-gray-200 border-b border-solid border-gray-400 grow relative overflow-y-auto">
                <div className="bg-blue-800 text-center p-4">
                    <h4 className="text-white font-lg font-semibold uppercase">ລາຍການອຸປະກອນ</h4>
                </div>
                {locationElements}
            </div>
        </div>
    );
}

export default ListView;