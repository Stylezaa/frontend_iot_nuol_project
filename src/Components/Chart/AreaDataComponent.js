import React from 'react'
import axios from 'axios';
import moment from 'moment';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function AreaDataComponent() {

    const [AllData, getAllData] = React.useState([]);

    const getSensor = async () => {
        try {
        const resp = await axios.get('http://localhost:8000/api/sensor/1');
        getAllData(resp.data);
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
    <span className="text-center text-3xl p-5 font-medium text-black col-span-3 bg-white h-auto drop-shadow-md rounded">
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart
                width={730}
                height={250}
                data={AllData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                <linearGradient id="colorpH" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9FEAFF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#9FEAFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorDO" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#37C2A4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#37C2A4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorEC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#043A5B" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#043A5B" stopOpacity={0} />
                </linearGradient>
                </defs>
                <XAxis
                dataKey="timestamp"
                tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                tick={{ fontSize: 18 }}
                />
                <YAxis tick={{ fontSize: 18 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip wrapperStyle={{fontSize: "18px"}} />
                <Legend wrapperStyle={{fontSize: "18px"}} />
                <Area
                type="monotone"
                dataKey="pH"
                stroke="#9FEAFF"
                fillOpacity={1}
                fill="url(#colorpH)"
                tick={{ fontSize: 18 }}
                />
                <Area
                type="monotone"
                dataKey="DO"
                stroke="#37C2A4"
                fillOpacity={1}
                fill="url(#colorDO)"
                tick={{ fontSize: 18 }}
                />
                <Area
                type="monotone"
                dataKey="EC"
                stroke="#043A5B"
                fillOpacity={1}
                fill="url(#colorEC)"
                tick={{ fontSize: 18 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    </span>
  )
}

export default AreaDataComponent