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

// const totalKeyArray = ['pH', 'DO', 'EC'];

function BarDataComponent(props) {

    // const {
    //   location: { sensor },
    // } = props;

    const [BarData, setBarData] = React.useState([]);
    console.log(BarData);

    const getSensor = async () => {
        try {
          const resp = await axios.get('http://localhost:8000/api/chart/1/get/all');
          setBarData(resp.data.slice(0, 4).reverse());
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
    <span className="text-center text-3xl font-medium text-black bg-white w-full">
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
                dataKey="last_update"
                tickFormatter={(unixTime) => moment(unixTime).format('hh:mm:ss')}
                tick={{ fontSize: 16 }}
                />
                <YAxis tick={{ fontSize: 16 }} />
                <Tooltip wrapperStyle={{fontSize: "16px"}} labelFormatter={last_update => new Date(last_update).toLocaleString()} />
                <Legend wrapperStyle={{fontSize: "14px"}} />
                <Bar dataKey="pH" fill="#3b82f6" />
                <Bar dataKey="DO" fill="#37C2A4" />
                <Bar dataKey="EC" fill="#0a1936" />
            </BarChart>
        </ResponsiveContainer>
    </span>
  )
}

export default BarDataComponent