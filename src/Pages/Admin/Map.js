import * as React from 'react';
import SidebarComponent from '../../Components/Admin/SidebarComponent'
import BarComponent from '../../Components/Admin/BarComponent'
import MapComponent from '../../Components/MapComponent'

export default function DashboardContent() {

  return (
    <div className="flex">
      <SidebarComponent />
      <div className="h-screen flex-1 ">
        <BarComponent />
        <div className="container mx-auto my-3 px-5">
          <ul className="flex gap-x-2">
            <li className="text-gray-400">Dashboard</li>
            <li>/</li>
            <li className="font-medium text-black">Map Page</li>
          </ul>
        </div>
        <div className="container mx-auto px-5">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
