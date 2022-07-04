import React from 'react'
import axios from 'axios';

function NumberDataComponent() {

  const [lastData, setLastData] = React.useState([]);

  const getSensor = async () => {
    try {
      const resp = await axios.get('https://ceit-iot-api.herokuapp.com/api/chart/1/filter/1');
      setLastData(resp.data.station_1[0]);
    } catch (error) {
      console.log(error)
    }
  };

  if (lastData === undefined) {
    console.log('Data is comming');
  }

  React.useEffect(() => {
    getSensor();

    const interval = setInterval(() => {
      getSensor();
    }, 180000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 pt-2 lg:pt-8 pb-4">
      <span className="grid text-center text-xl p-5 text-white bg-blue-500 h-24 lg:h-28 drop-shadow rounded">
        pH:
        <span className="text-3xl font-medium">{lastData.pH}</span>
      </span>
      <span className="grid text-center text-xl p-5 text-white bg-[#37C2A4] h-24 lg:h-28 drop-shadow rounded">
        DO:
        <span className="text-3xl font-medium">{lastData.DO} mg/L</span>
      </span>
      <span className="grid text-center text-xl p-5 text-white bg-[#0a1936] h-24 lg:h-28 drop-shadow rounded">
        EC:
        <span className="text-3xl font-medium">{lastData.EC} μS/c m</span>
      </span>
    </div>
  )
}

export default NumberDataComponent