import React from 'react';
import ProfileControl from '../Admin/profileControl'
import AboutPopup from '../Info/AboutPopup'
import StatusComponent from '../Admin/StatusComponent'
import InfoPHComponent from '../Info/InfoPHComponent'
import InfoDOComponent from '../Info/InfoDOComponent'
import InfoECComponent from '../Info/InfoECComponent'

const totalKeyArray = ['pH', 'DO', 'EC'];

function ListView(props) {
    const { 
        locationArray, 
        selectedLocation, 
        onSelectItem, 
        onDeselectItem,
        locationOne,
    } = props;

    //Check Auth Token
    let isAuth = false;

    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        isAuth = true;
    }

    const [Deskopen, setDeskOpen] = React.useState(true);
    const [Mobileopen, setMobileOpen] = React.useState(false);

    const [infoAbout, setInfoAbout] = React.useState(false);
    const [infoSensor, setInfoSensor] = React.useState(false)
    const [infoData, setInfoData] = React.useState(false)

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
            <div key={key} className="bg-blue-500 rounded-sm add_unit relative">
                <svg onClick={() => {
                    setInfoSensor(!infoSensor)
                    setInfoData(key)
                }}
                    className={`bi bi-info-circle-fill z-50 ease-in-out duration-300 bi bi-chevron-double-right absolute cursor-pointer top-1 right-1 w-3.5 font-medium`} style={{color: "#FFF", borderColor: "#000"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
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

        let locationClass = 'bg-white p-5 cursor-pointer my-2 shadow hover:bg-gray-200 mx-2 rounded';
        if (selectedLocation !== null) {
            if (location.id === selectedLocation.id) {
                locationClass += ' selected';
            }
        }

        return (
            <div key={`${id}-${name}`} className={locationClass} onClick={() => onClickItem(id)}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                        <h6 className="uppercase mb-2">{name}</h6>
                        <StatusComponent />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-right font-semibold">{pH.toFixed(2)}</p>
                        <p className="text-right font-semibold">{DO.toFixed(2)} mg/L</p>
                        <p className="text-right font-semibold">{EC.toFixed(2)} μS/c m</p>
                    </div>
                </div>
            </div>
        );
    });

    let infoCom;
    if (infoData === "pH") {
        infoCom = <InfoPHComponent />;
    } else if (infoData === "EC") {
        infoCom = <InfoECComponent />;
    } else {
        infoCom = <InfoDOComponent />;
    }

    return (
        <>
            { infoAbout 
                ?
                <>
                    <AboutPopup />
                </>
                :
                null
            }

            { infoSensor 
                ?
                <>
                    {infoCom}
                </>
                :
                null
            }

            {/* ===== On Desktop Version ===== */}
            <div className={`ease-in-out duration-300 ${Deskopen ? 'w-4/5 sm:w-auto': 'w-0'} bg-white hidden lg:flex flex-col fixed top-0 bottom-0 left-0 z-30`}>
                <svg
                    onClick={() => setDeskOpen(!Deskopen)}
                    className={`z-50 ease-in-out duration-300 bi bi-chevron-double-right shadow-lg absolute cursor-pointer rounded-r -right-10 top-9 w-10 font-medium border-2 bg-blue-900 ${
                        !Deskopen && "rotate-180 left-0 rounded-l rounded-r-none shadow-lg"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{color: "#FFF", borderColor: "#1e3a8a"}}
                    >
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
                <svg onClick={() => setInfoAbout(!infoAbout)}
                    className={`bi bi-info-circle-fill z-50 ease-in-out duration-300 bi bi-chevron-double-right shadow-lg absolute cursor-pointer rounded-r -right-10 top-16 mt-[13px] w-10 p-2 font-medium border-2 bg-black`} style={{color: "#FFF", borderColor: "#000"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
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
                <a href="/" className={`${Deskopen ? 'block': 'hidden'} bg-blue-500	border-b border-solid border-gray-400 shrink-0 text-white text-center text-lg font-semibold p-5 w-full`}>
                    AQUATIC INDEX
                </a>
                <div className={`${Deskopen ? 'block': 'hidden'} bg-white border-b border-solid border-gray-200 shrink-0 px-2 py-5 shadow-md`}>
                    <h2 className="font-semibold uppercase">ຄ່າສະເລ່ຍ ({locationArray.length}) Station 1</h2>
                    <div className="grid grid-cols-3 mt-3 gap-x-1">
                        {totalElements}
                    </div>
                </div>  
                <div className="bg-slate-100 border-b border-solid border-gray-400 grow relative overflow-y-auto">
                    <div className="bg-slate-100 text-center p-2">
                        <h4 className="text-black font-lg font-semibold uppercase">ລາຍການອຸປະກອນ</h4>
                    </div>
                    {locationElements}
                </div>
            </div>

            {/* ===== On Mobile version ===== */}
            <div className={`ease-in-out duration-300 ${Mobileopen ? 'w-4/5 sm:w-auto': 'w-0'} bg-white flex lg:hidden flex-col fixed top-0 bottom-0 left-0 z-30`}>
                <svg
                    onClick={() => setMobileOpen(!Mobileopen)}
                    className={`z-50 ease-in-out duration-300 bi bi-chevron-double-right shadow-lg absolute cursor-pointer rounded-r -right-10 top-9 w-10 font-medium border-2 bg-blue-900 ${
                        !Mobileopen && "rotate-180 left-0 rounded-l rounded-r-none shadow-lg"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{color: "#FFF", borderColor: "#1e3a8a"}}
                    >
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
                <svg onClick={() => setInfoAbout(!infoAbout)}
                    className={`bi bi-info-circle-fill z-50 ease-in-out duration-300 bi bi-chevron-double-right shadow-lg absolute cursor-pointer rounded-r -right-10 top-16 mt-[13px] w-10 p-2 font-medium border-2 bg-black`} style={{color: "#FFF", borderColor: "#000"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
                {isAuth
                    ? 
                    <>          
                        <div className="lg:hidden border absolute cursor-pointer rounded-r -right-16 p-0 m-0 top-28 mt-2 w-16 h-12 font-medium bg-white">
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
                <a href="/" className={`${Mobileopen ? 'block': 'hidden'} bg-blue-500	border-b border-solid border-gray-400 shrink-0 text-white text-center text-lg font-semibold p-5 w-full`}>
                    AQUATIC INDEX
                </a>
                <div className={`${Mobileopen ? 'block': 'hidden'} bg-white border-b border-solid border-gray-200 shrink-0 px-2 py-5 shadow-md`}>
                    <h2 className="font-semibold uppercase">ຄ່າສະເລ່ຍ ({locationArray.length}) Station 1</h2>
                    <div className="grid grid-cols-3 mt-3 gap-x-1">
                        {totalElements}
                    </div>
                </div>  
                <div className="bg-slate-50 border-b border-solid border-gray-400 grow relative overflow-y-auto">
                    <div className="bg-slate-50 text-center p-4">
                        <h4 className="text-black font-lg font-semibold uppercase">ລາຍການອຸປະກອນ</h4>
                    </div>
                    {locationElements}
                </div>
            </div>        
        </>
    );
}

export default ListView;