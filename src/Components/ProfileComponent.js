import React from 'react'
import ProfileControl from './Admin/profileControl'

function ProfileComponent() {
    let isAuth = false;

    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        isAuth = true;
    }

    return (
        <div className="hidden sm:block">
          {isAuth
              ? 
              <>
                <div className="text-center justify-items-center items-center mx-auto bg-white p-5 shadow-md rounded-b fixed inset-x-0 top-0 w-28 z-40">
                  <ProfileControl link="/dashboard/overview" title="ໜ້າຈັດການລະບົບ" />
                </div>
              </>
              : 
              <>
                {/* <div className="text-center justify-items-center items-center mx-auto bg-white p-5 shadow-md rounded-b fixed inset-x-0 top-0 w-40 z-40">
                  <a href="/login" className="font-medium transition duration-300 ease-in-out bg-blue-600 hover:bg-blue-700 text-white hover:text-slate-100 px-4 py-2 rounded">
                    ເຂົ້າສູ່ລະບົບ
                  </a>
                </div> */}
                {null}
              </>
          }   
        </div>
    )
}

export default ProfileComponent