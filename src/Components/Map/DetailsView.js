import React from 'react';
import BarDataComponent from '../Chart/BarDataComponent'
import DataGridComponent from '../DataGridComponent'
import InfoPHComponent from '../Info/InfoPHComponent'
import InfoDOComponent from '../Info/InfoDOComponent'
import InfoECComponent from '../Info/InfoECComponent'

const totalKeyArray = ['pH', 'DO', 'EC'];

function DetailsView(props) {
    const {
        location: { name, sensor },
        onClickClose
    } = props;

    const [open, setOpen] = React.useState(true);
    const [infoSensorPH, setInfoSensorPH] = React.useState(false)
    const [infoSensorDO, setInfoSensorDO] = React.useState(false)
    const [infoSensorEC, setInfoSensorEC] = React.useState(false)
    const [infoData, setInfoData] = React.useState(false)

    const totalElements = totalKeyArray.map(key => {
        const count = sensor[key];

        return (
            <div key={key} className="bg-[#37C2A4] first:bg-blue-500 last:bg-[#0a1936] rounded-sm add_unit relative px-2 py-5">
                    <svg key={key} onClick={() => {
                            console.log(key);
                            if (key === "pH") {
                                setInfoSensorPH(!infoSensorPH)
                                setInfoData(key)
                            } else if (key === "EC") {
                                setInfoSensorDO(!infoSensorDO)
                                setInfoData(key)
                            } else if (key === "DO") {
                                setInfoSensorEC(!infoSensorEC)
                                setInfoData(key)
                            } else {
                                return;
                            }
                    }}
                        className={`bi bi-info-circle-fill z-50 ease-in-out duration-300 bi bi-chevron-double-right absolute cursor-pointer top-1 right-1 w-3.5 font-medium`} style={{color: "#FFF", borderColor: "#000"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                <div className="flex flex-row justify-center items-center">
                    <h6 className="font-sm text-white">{key}</h6>
                    <p className="ml-2 text-right text-sm sm:text-xl font-semibold text-white">{count.toFixed(2)}</p>
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
            {/* { infoSensor 
                ?
                <>
                    {infoCom}
                </>
                :
                null
            } */}
            {
                infoSensorPH
                ?
                <>
                    {infoCom}
                </>
                :
                null
            }
            {
                infoSensorDO
                ?
                <>
                    {infoCom}
                </>
                :
                null
            }
            {
                infoSensorEC
                ?
                <>
                    {infoCom}
                </>
                :
                null
            }

            <div className={`bg-white shadow-lg rounded fixed left-4 right-4 bottom-0 ${open ? 'top-[68%]': ' top-1/2'} top:0 lg:w-auto lg:fixed lg:top-0 lg:right-0 lg:left-2/3 lg:bottom-0 z-40 overflow-y-auto`}>
                <div className="bg-blue-500 w-full flex justify-between items-center">
                    <h4 className="text-white font-lg font-semibold p-2 uppercase">{name}</h4>
                    <div className="text-3xl cursor-pointer text-white px-4 py-2 bg-blue-900" onClick={onClickClose}>&times;</div>
                </div>
                <div className="grid grid-cols-3 px-1 my-3 gap-x-1">
                    {totalElements}
                </div>
                <div className="px-1 mb-3 lg:hidden">
                    <button onClick={() => setOpen(!open)} className={`${open ? 'bg-blue-400 border-blue-500': ' bg-red-400 border-red-500'} text-white border-2 px-5 py-2 text-base mt-2 w-full uppercase font-semibold rounded-sm`}>{open ? 'ຂໍ້ມູນເພີ່ມຕື່ມ': ' ປິດ'}</button>
                </div>        
                <div className={`${open ? 'hidden lg:block': 'block'} mt-3 w-full`}>
                    <BarDataComponent />
                </div>
                <div className={`${open ? 'hidden lg:block': 'block'} mx-auto mt-3 w-full`}>
                    <DataGridComponent 
                        GridHeight={405}
                        pHWidth={80} 
                        ECWidth={120} 
                        DOWidth={120} 
                        latitudeWidth={150}
                        longitudeWidth={150}
                        last_updateWidth={200}
                    />
                </div>
            </div>
        </>
    );
}

export default DetailsView;