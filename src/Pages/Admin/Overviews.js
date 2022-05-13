import * as React from 'react';
import SidebarComponent from '../../Components/Admin/SidebarComponent'
import BarComponent from '../../Components/Admin/BarComponent'
// import SensorComponent from '../../Components/SensorComponent';
import NumberDataComponent from '../../Components/Chart/NumberDataComponent'

export default function DashboardContent() {

  return (
    <div className="flex">
      <SidebarComponent />
      <div className="h-screen flex-1">
        <BarComponent />
        <div className="container mx-auto my-3 px-5">
          <ul className="flex gap-x-2">
            <li className="text-gray-400">Dashboard</li>
            <li>/</li>
            <li className="font-medium text-black">Overview Page</li>
          </ul>
        </div>
        <div className="container mx-auto px-5">
          <NumberDataComponent />
          <iframe width="100%"  height="600px" src="http://202.137.130.47:1880/#flow/03c9ea59963c8365" title="Node-Red">
					</iframe>
        </div>
      </div>
    </div>
  );
}
