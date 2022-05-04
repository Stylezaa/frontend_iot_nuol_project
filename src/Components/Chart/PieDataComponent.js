import React from 'react'
import axios from 'axios';
import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

function PieDataComponent() {

    const [lastData, setlastData] = React.useState([]);

    const getSensor = async () => {
        try {
          const resp = await axios.get('http://localhost:8000/api/sensor/1');
          setlastData(resp.data[0]);
        } catch (error) {
          console.log(error)
        }
      };
    
      if (lastData === undefined) {
        console.log('Data is comming');
      }
    
      let dataPIE = [
        { name: 'pH', value: lastData.pH },
        { name: 'DO', value: lastData.DO },
        { name: 'EC', value: lastData.EC },
      ];

    //   console.log(dataPIE);

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
  )
}

export default PieDataComponent