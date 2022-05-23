import * as React from 'react';
import SidebarComponent from '../../Components/Admin/SidebarComponent'
import BarComponent from '../../Components/Admin/BarComponent'
import CurrentTime from '../../Components/CurrentTime'

export default function DashboardContent() {

  return (
    <div className="flex">
      <SidebarComponent />
      <div className="h-screen flex-1 ">
        <BarComponent />
        <div className="container mx-auto my-3 px-5 flex justify-end lg:justify-between">
          <ul className="flex gap-x-2 hidden lg:flex">
            <li className="text-gray-400 uppercase text-base">ໜ້າຈັດການລະບົບ</li>
            <li className="text-base">/</li>
            <li className="font-medium text-blue-500 uppercase text-base">ອຸປະກອນ</li>
          </ul>
          <div className="border border-blue-500 text-blue-500 px-2 py-1 rounded-sm">
            <CurrentTime />
          </div>
        </div>
        <div className="container mx-auto px-5">
          <iframe className="rounded" width="100%"  height="600px" src="http://202.137.130.47:1880/#flow/03c9ea59963c8365" title="Node-Red" allowFullScreen="true">
					</iframe>
        </div>
      </div>
    </div>
  );
}