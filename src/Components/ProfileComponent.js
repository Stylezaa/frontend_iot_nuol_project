import React from 'react'
import ProfileControl from './Admin/profileControl'

function ProfileComponent() {
    let isAuth = false;

    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        isAuth = true;
    }

    return (
        <div className="text-center justify-items-center items-center mx-auto bg-white p-5 shadow-md rounded-b fixed inset-x-0 top-0 w-60 z-40">
            {isAuth
                    ? 
                    <>
                      <ProfileControl link="/dashboard/overview" title="Dashboard" />
                    </>
                    : 
                    <>
                      <a href="/login" className="font-medium transition duration-300 ease-in-out bg-sky-600 hover:bg-sky-700 text-white hover:text-slate-100 px-8 py-2 rounded">
                        Log in
                      </a>
                    </>
            }   
        </div>
    )
}

export default ProfileComponent