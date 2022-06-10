import React from 'react'
import axios from 'axios';

function StatusComponent() {

  const [status, setStatus] = React.useState([]);
  console.log(status);

    const getStatus = async () => {
        try {
          const resp = await axios.get('https://ceit-iot-api.herokuapp.com/api/station/1/filter/1');
          setStatus(resp.data.station_status[0].status);
        } catch (error) {
          console.log(error)
        }
    };

    React.useEffect(() => {
      getStatus();
    
        const interval = setInterval(() => {
          getStatus();
        }, 10000);
    
        return () => clearInterval(interval);
    }, []);

    let textStatus;
    if (status === "Online") {
      textStatus = <><span className="w-full text-center font-medium">ONLINE</span></>;
    } else {
      textStatus = <><span className="w-full text-center font-medium flex justify-center items-center	animate-pulse text-white">OFFLINE
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="animate-spin bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </span>
      </>;
    }

  return (
    <>
      <div className="px-4 flex items-center	border-emerald-500 border-2 w-40 rounded-full bg-emerald-400">
        {textStatus}
      </div>
    </> 
  )
}

export default StatusComponent