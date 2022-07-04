import * as React from 'react';
import SidebarComponent from '../../Components/Admin/SidebarComponent'
import BarComponent from '../../Components/Admin/BarComponent'
import CurrentTime from '../../Components/CurrentTime'
import NavbarMobileComponent from '../../Components/Admin/NavbarMobileComponent'

export default function DashboardContent() {

  return (
    <div className="flex">
      <SidebarComponent />
      <NavbarMobileComponent />
      <div className="h-screen flex-1">
        <BarComponent />
        <div className="container mx-auto my-3 px-5 flex justify-end lg:justify-between">
          <ul className="gap-x-2 hidden lg:flex">
            <li className="text-gray-400 uppercase text-base">ໜ້າຈັດການລະບົບ</li>
            <li className="text-base">/</li>
            <li className="font-medium text-blue-500 uppercase text-base">ອຸປະກອນ</li>
          </ul>
          <div className="flex items-center border border-blue-500 text-blue-500 px-2 py-2 rounded-sm">
            <CurrentTime />
          </div>
        </div>
        {/* <div className="container mx-auto p-2">
          <span>Full Screen</span>
        </div> */}
        <div className="container mx-auto text-center pt-2 lg:pt-4 lg:px-5 lg:pb-0">
          <iframe className="rounded hidden lg:block" width="100%" height="550px" src="http://202.137.130.47:1880/#flow/03c9ea59963c8365" title="Node-Red" allowFullScreen>
					</iframe>
          <span className="lg:hidden w-full shadow-md bg-rose-300 text-white px-4 py-2 rounded-sm">ໜ້ານີ້ສາມາດເບິ່ງໄດ້ສະເພາະໂໝດ Desktop ເທົ່ານັ້ນ</span>
        </div>
      </div>
    </div>
  );
}