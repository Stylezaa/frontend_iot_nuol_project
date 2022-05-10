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
            return sum = (sum + location.latest[key]);  
        }, 0);

        const sumData = sum/locationArray.length
        
        return (
            <div key={key} className="grid grid-cols-2">
                <div className="">
                    <h6 className="title">{key}</h6>
                </div>
                <div className="">
                    {/* <p className="is-6 has-text-right">{sum/locationArray.length}</p> */}
                    <p className="text-right">{sumData.toFixed(2)}</p>
                </div>
            </div>
        );
    });

    const locationElements = locationArray.map(location => {
        const {
            id, name,
            latest: { pH, DO, EC }
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
                        <h6>{title}</h6>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-right">{pH}</p>
                        <p className="text-right">{DO}</p>
                        <p className="text-right">{EC}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="bg-white flex flex-col fixed top-0 bottom-0 left-0 w-80 z-30">
            <div className="bg-white border-b border-solid border-gray-400 shrink-0 p-5">
                <h2 className="title">Water MSN</h2>
            </div>
            <div className="bg-white border-b border-solid border-gray-400 shrink-0 p-5">
                <h2 className="title">Average ({locationArray.length}) Stations</h2>
                {totalElements}
            </div>
            <div className="bg-gray-200 border-b border-solid border-gray-400 grow relative overflow-y-auto">
                {locationElements}
            </div>
        </div>
    );
}

export default ListView;