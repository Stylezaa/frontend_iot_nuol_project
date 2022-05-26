import React from 'react'

function NavbarMobileComponent() {

    const Menus = [
        { title: 'ພາບລວມ', icon: 'overviews', url: '/dashboard/overview' },
        { title: 'ອຸປະກອນ', icon: 'station', url: '/dashboard/station' },
    ];

    return (
        <div className="w-9/12 shadow-md lg:hidden mx-auto px-10 py-2 fixed bottom-2 left-0 right-0 z-20 rounded-full backdrop-blur-sm bg-black/60">
            <ul className="flex justify-around gap-x-4">
                {Menus.map((Menu, index) => (
                    <a href={Menu.url} key={index}>
                        <li
                            key={index}
                            className={`text-gray-50 transition border-b-4 rounded-sm pb-px ease-in-out duration-200 flex`}
                        >
                            <img
                            src={require(`../../assets/icon/${Menu.icon}.svg`)}
                            alt={`${Menu.icon}`}
                            className="w-8"
                            />
                        </li>
                    </a>
                ))}
                </ul>
        </div>
    )
}

export default NavbarMobileComponent