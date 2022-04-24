import * as React from 'react';
import SidebarComponent from '../../Components/Admin/SidebarComponent'
import BarComponent from '../../Components/Admin/BarComponent'

export default function DashboardContent() {

  return (
    <div className="flex">
      <SidebarComponent />
      <div className="h-screen flex-1 ">
        <BarComponent />
        <div className="container mx-auto my-3">
          <ul className="flex gap-x-2">
            <li className="text-gray-400">Dashboard</li>
            <li>/</li>
            <li className="font-medium text-black">Map Page</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
