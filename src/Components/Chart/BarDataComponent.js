import React from 'react'
import axios from 'axios';
import moment from 'moment';
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
  } from 'recharts';

function BarDataComponent() {

    const [BarData, setBarData] = React.useState([]);

    const getSensor = async () => {
        try {
          const resp = await axios.get('http://localhost:8000/api/sensor');
          setBarData(resp.data.slice(0, 8).reverse());
        } catch (error) {
          console.log(error)
        }
    };

    React.useEffect(() => {
        getSensor();
    
        const interval = setInterval(() => {
          getSensor();
        }, 10000);
    
        return () => clearInterval(interval);
    }, []);
  return (
    <span className="text-center text-3xl p-5 font-medium text-black bg-white h-auto drop-shadow-md rounded">
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                width={500}
                height={300}
                data={BarData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                font-size={200}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                dataKey="timestamp"
                tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                tick={{ fontSize: 18 }}
                />
                <YAxis tick={{ fontSize: 18 }} />
                <Tooltip wrapperStyle={{fontSize: "18px"}} />
                <Legend wrapperStyle={{fontSize: "18px"}} />
                <Bar dataKey="pH" fill="#9FEAFF" />
                <Bar dataKey="DO" fill="#37C2A4" />
                <Bar dataKey="EC" fill="#043A5B" />
            </BarChart>
        </ResponsiveContainer>
    </span>
  )
}

export default BarDataComponent