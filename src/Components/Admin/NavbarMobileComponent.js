import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function NavbarMobileComponent() {

    const Menus = [
        { title: 'ພາບລວມ', icon: 'overviews', url: '/dashboard/overview' },
        { title: 'ອຸປະກອນ', icon: 'station', url: '/dashboard/station' },
    ];

    return (
        <div className="w-9/12 shadow-md lg:hidden mx-auto px-10 py-2 fixed bottom-2 left-0 right-0 z-20 rounded-full backdrop-blur-sm bg-black/60">
            <div className="flex justify-around gap-x-4">
                {Menus.map((Menu, index) => (
                        <NavLink 
                            to={Menu.url}
                            key={index}
                            className={`text-gray-50 transition rounded-sm pb-px ease-in-out duration-200 flex flex-col items-center`}
                            activeStyle={{borderBottom: "4px solid white"}}
                        >
                            <img
                            src={require(`../../assets/icon/${Menu.icon}.svg`)}
                            alt={`${Menu.icon}`}
                            className="w-6"
                            />
                            <span className="text-sm">{Menu.title}</span>
                        </NavLink>
                ))}
                </div>
        </div>
    )
}

export default NavbarMobileComponent