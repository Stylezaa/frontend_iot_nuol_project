import React from 'react'
import axios from 'axios';
// import moment from 'moment';

function NumberDataComponent() {

  const [lastData, setLastData] = React.useState([]);

  const getSensor = async () => {
    try {
      const resp = await axios.get('http://localhost:8000/api/sensor');
      setLastData(resp.data[0]);
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 pt-8 pb-4">
      <span className="grid text-center text-xl p-5 text-black bg-white h-28 drop-shadow-md rounded">
        pH:
        <span className="text-3xl font-medium">{lastData.pH}</span>
      </span>
      <span className="grid text-center text-xl p-5 text-black bg-white h-28 drop-shadow-md rounded">
        DO:
        <span className="text-3xl font-medium">{lastData.DO} mg/L</span>
      </span>
      <span className="grid text-center text-xl p-5 text-black bg-white h-28 drop-shadow-md rounded">
        EC:
        <span className="text-3xl font-medium">{lastData.EC} μS/c m</span>
      </span>
    </div>
  )
}

export default NumberDataComponent