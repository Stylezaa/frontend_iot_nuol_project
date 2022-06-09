import * as React from 'react';
import SidebarComponent from '../../Components/Admin/SidebarComponent'
import BarComponent from '../../Components/Admin/BarComponent'
import NumberDataComponent from '../../Components/Chart/NumberDataComponent'
import DataGridComponent from '../../Components/DataGridComponent'
import CurrentTime from '../../Components/CurrentTime'
import NavbarMobileComponent from '../../Components/Admin/NavbarMobileComponent'

export default function DashboardContent() {

  return (
    <div className="flex relative">
      <SidebarComponent />
      <NavbarMobileComponent />
      <div className="h-screen flex-1">
        <BarComponent />
        <div className="container mx-auto my-3 px-5 flex justify-end lg:justify-between">
          <ul className="flex gap-x-2 hidden lg:flex">
            <li className="text-gray-400 uppercase text-base">ໜ້າຈັດການລະບົບ</li>
            <li className="text-base">/</li>
            <li className="font-medium text-blue-500 uppercase text-base">ພາບລວມ</li>
          </ul>
          <div className="border border-blue-500 text-blue-500 px-2 py-1 rounded-sm">
            <CurrentTime />
          </div>
        </div>
        <div className="container mx-auto px-5">
          {/* <NumberDataComponent /> */}
          <DataGridComponent 
            GridHeight={405}
            pHWidth={200} 
            ECWidth={200} 
            DOWidth={200} 
            latitudeWidth={250}
            longitudeWidth={250}
            last_updateWidth={300}
          />
        </div>
      </div>
    </div>
  );
}