import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function SidebarComponent() {

  const [open, setOpen] = React.useState(true);
  const Menus = [
    { title: 'ພາບລວມ', icon: 'overviews', url: '/dashboard/overview' },
    { title: 'ອຸປະກອນ', icon: 'station', url: '/dashboard/station' },
  ];

  return (
    <>
      <div
        className={`${
          open ? 'hidden lg:block lg:w-72' : 'hidden lg:block lg:w-20'
        } duration-300 h-screen p-5 pt-8 relative z-10`}
        style={{ backgroundColor: "#3b82f6"}}
      >
        <svg
          onClick={() => setOpen(!open)}
          className={`hidden md:block bi bi-chevron-double-right absolute cursor-pointer rounded -right-3 top-9 w-7 font-medium border-2 bg-white border-blue-600 ${
            !open && "rotate-180"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          style={{color: "#1e3a8a", borderColor: "#1e3a8a"}}
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
        <div className="flex gap-x-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg"  className={`bi bi-moisture cursor-pointer w-10 text-white duration-500 ${
              open && 'rotate-[360deg]'
            }`} fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
          </svg>
          <h1
            className={`text-white origin-left text-xl duration-200 font-semibold ${
              !open && 'scale-0 hidden'
            }`}
          >
            AQUATIC INDEX
          </h1>
        </div>
        <div className="pt-6">
          {Menus.map((Menu, index) => (
            <NavLink key={index} className={`text-gray-50 transition ease-in-out duration-200 flex items-center gap-x-4 cursor-pointer border-b border-slate-200 p-2 hover:bg-blue-600 hover:text-white ${
              Menu.gap ? 'mt-4' : 'mt-2'
            } ${index === 0 && 'bg-light-white'}`} to={Menu.url} activeStyle={{backgroundColor:"#2563eb"}}>
                <img
                  src={require(`../../assets/icon/${Menu.icon}.svg`)}
                  alt={`${Menu.icon}`}
                  className="w-7"
                />
                <span
                  className={`${
                    !open && 'hidden'
                  } text-base origin-left duration-300 uppercase font-semibold`}
                >
                  {Menu.title}
                </span>
            </NavLink>
          ))}
        </div>
        
      </div>
    </>
  );
}