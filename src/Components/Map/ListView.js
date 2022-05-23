import React from 'react';
import ProfileControl from '../Admin/profileControl'

const totalKeyArray = ['pH', 'DO', 'EC'];

function ListView(props) {
    const { 
        locationArray, 
        selectedLocation, 
        onSelectItem, 
        onDeselectItem,
        locationOne
    } = props;

    //Check Auth Token
    let isAuth = false;

    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        isAuth = true;
    }

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
        
        return (
            <div key={key} className="bg-blue-500 rounded-sm add_unit">
                <div className="flex flex-row justify-center items-center px-2 py-5">
                    <h6 className="text-sm text-white">{key}</h6>
                    <p className="ml-2 text-right text-sm sm:text-xl font-semibold text-white">{sumData.toFixed(2)}</p>
                </div>
            </div>
        );
    });

    const locationElements = locationOne.map(location => {
        const {
            id, name,
            sensor: { pH, DO, EC }
        } = location;

        let locationClass = 'bg-white p-5 cursor-pointer border border-solid border-gray-100 my-2 shadow-md hover:bg-gray-200';
        if (selectedLocation !== null) {
            if (location.id === selectedLocation.id) {
                locationClass += ' selected';
            }
        }

        return (
            <div key={`${id}-${name}`} className={locationClass} onClick={() => onClickItem(id)}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
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
        <div className={`ease-in-out duration-300 ${open ? 'w-4/5 sm:w-auto': 'w-0'} bg-white flex flex-col fixed top-0 bottom-0 left-0 z-30`}>
            <svg
                onClick={() => setOpen(!open)}
                className={`z-50 ease-in-out duration-300 bi bi-chevron-double-right shadow-lg absolute cursor-pointer rounded-r -right-10 top-9 w-10 font-medium border-2 bg-blue-900 ${
                    !open && "rotate-180 left-0 rounded-l rounded-r-none shadow-lg"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{color: "#FFF", borderColor: "#1e3a8a"}}
                >
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            {isAuth
                ? 
                <>          
                    <div className="lg:hidden border absolute cursor-pointer rounded-r -right-16 p-0 m-0 top-20 w-16 h-12 font-medium bg-white">
                        <ProfileControl link="/dashboard/overview" title="ໜ້າຈັດການລະບົບ" />
                    </div>        
                </>
                : 
                <>
                    <a href="/login" className="lg:hidden flex items-center justify-center text-white absolute cursor-pointer rounded-r -right-10 p-0 m-0 top-20 w-10 h-10 font-medium bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                    </a>     
                </>
            }
            <a href="/" className={`${open ? 'block': 'hidden'} bg-blue-500	border-b border-solid border-gray-400 shrink-0 text-white text-center text-lg font-semibold p-5 w-full`}>Water MSN</a>
            <div className={`${open ? 'block': 'hidden'} bg-white border-b border-solid border-gray-400 shrink-0 px-2 py-5 shadow-md`}>
                <h2 className="font-semibold uppercase">ຄ່າສະເລ່ຍ ({locationArray.length}) Station 1</h2>
                <div className="grid grid-cols-3 mt-3 gap-x-1">
                    {totalElements}
                </div>
            </div>  
            <div className="bg-slate-50 border-b border-solid border-gray-400 grow relative overflow-y-auto">
                <div className="bg-blue-800 text-center p-4">
                    <h4 className="text-white font-lg font-semibold uppercase">ລາຍການອຸປະກອນ</h4>
                </div>
                {locationElements}
            </div>
        </div>
    );
}

export default ListView;