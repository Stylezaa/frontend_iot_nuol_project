import React from 'react';
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
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { format } from 'timeago.js';

export default function SensorComponent() {
  const [AllData, getAllData] = React.useState([]);
  const [BarData, setBarData] = React.useState([]);
  const [lastData, setlastData] = React.useState([]);
  //   const [PieData, setPieData] = React.useState([]);

  const getSensor = async () => {
    try {
      const resp = await axios.get('http://localhost:8000/api/sensor');
      setBarData(resp.data.slice(0, 8).reverse());
      setlastData(resp.data[0]);
      getAllData(resp.data);
    } catch (error) {
      console.log(error)
    }
  };
  // console.log(lastData.DO);
  // console.log(lastData.pH);
  // console.log(lastData.EC);
  // date_sensor_timeline4: data.slice(0, 8).reverse(),

  if (lastData === undefined) {
    console.log('Data is comming');
  }

  let dataPIE = [
    { name: 'pH', value: lastData.pH },
    { name: 'DO', value: lastData.DO },
    { name: 'EC', value: lastData.EC },
  ];

  //   setPieData(dataPIE);
  //   console.log(PieData)

  console.log(dataPIE);

  React.useEffect(() => {
    getSensor();

    const interval = setInterval(() => {
      getSensor();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-6">
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
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 pb-4">
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
        <span className="text-center text-3xl p-5 font-medium text-black bg-white h-auto drop-shadow-md rounded">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={400}>
              <Legend wrapperStyle={{fontSize: "18px"}} />
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={dataPIE}
                outerRadius={100}
                label
              >
                <Cell fill="#9FEAFF" />
                <Cell fill="#37C2A4" />
                <Cell fill="#043A5B" />
              </Pie>
              <Tooltip wrapperStyle={{fontSize: "18px"}} />
            </PieChart>
          </ResponsiveContainer>
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 grid-cols-1 pb-4">
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
      </div>
    </div>
  );
}
