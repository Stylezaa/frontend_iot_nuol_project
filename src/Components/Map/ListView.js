import React from 'react';

const totalKeyArray = ['pH', 'DO', 'EC'];

function ListView(props) {
    const { 
        locationArray, 
        selectedLocation, 
        onSelectItem, 
        onDeselectItem,
        locationOne
    } = props;

    const [open, setOpen] = React.useState(true);



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
        // console.log(sum)
        
        return (
            <div key={key} className="bg-blue-500 rounded-sm add_unit">
                <div className="flex flex-row justify-center items-center px-2 py-5">
                    <h6 className="font-xs text-white">{key}</h6>
                    <p className="ml-2 text-right font-xl font-semibold text-white">{sumData.toFixed(2)}</p>
                </div>
            </div>
        );
    });

    const locationElements = locationOne.map(location => {
        const {
            id, name,
            sensor: { pH, DO, EC }
        } = location;

        // let title = name;
        // // if (province !== '' && province !== country) {
        // //     title = `${province}, ${country}`;
        // // }

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
                        <h6 className="uppercase">{name}</h6>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-right">{pH.toFixed(2)}</p> {/* {pH.toFixed(2)} */}
                        <p className="text-right">{DO.toFixed(2)} mg/L</p>
                        <p className="text-right">{EC.toFixed(2)} μS/c m</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={`${open ? 'w-auto': 'w-0'} ease-in-out duration-700 bg-white flex flex-col fixed top-0 bottom-0 left-0 z-30`}>
            <svg
                onClick={() => setOpen(!open)}
                className={`z-50 ease-in-out duration-700 bi bi-chevron-double-right shadow-lg absolute cursor-pointer rounded-l -right-3 top-9 w-10 font-medium border-2 bg-white border-blue-600 ${
                    !open && "rotate-180 left-0 rounded-r shadow-lg"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{color: "#3b82f6", borderColor: "#3b82f6"}}
                >
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <a href="/" className={`${open ? 'block': 'hidden'} bg-blue-500	border-b border-solid border-gray-400 shrink-0 text-white text-center text-lg font-semibold p-5 w-full`}>Water MSN</a>
            <div className={`${open ? 'block': 'hidden'} bg-white border-b border-solid border-gray-400 shrink-0 px-2 py-5 shadow-md`}>
                <h2 className="font-semibold uppercase">ຄ່າສະເລ່ຍ ({locationArray.length}) Station 1</h2>
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