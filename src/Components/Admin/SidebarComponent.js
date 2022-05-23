import React from 'react';

export default function SidebarComponent() {

  const [open, setOpen] = React.useState(false);
  const Menus = [
    { title: 'ພາບລວມ', icon: 'overviews', url: '/dashboard/overview' },
    { title: 'ອຸປະກອນ', icon: 'station', url: '/dashboard/station' },
  ];

  return (
    <>
      <div
        className={`${
          open ? 'w-20 sm:w-72' : 'w-20'
        } duration-300 h-screen p-5 pt-8 relative`}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={`bi bi-waterbi bi-water cursor-pointer w-10 text-white duration-500 ${
              open && 'rotate-[360deg]'
            }`}
            viewBox="0 0 16 16"
          >
            <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z" />
          </svg>
          <h1
            className={`text-white origin-left text-xl duration-200 font-semibold ${
              !open && 'scale-0 hidden'
            }`}
          >
            Water MNS
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <a href={Menu.url}>
              <li
                key={index}
                className={`text-gray-50 transition ease-in-out duration-200 flex items-center gap-x-4 cursor-pointer border-b border-slate-200 p-2 hover:bg-blue-600 hover:text-white ${
                  Menu.gap ? 'mt-4' : 'mt-2'
                } ${index === 0 && 'bg-light-white'}`}
              >
                <img
                  src={require(`../../assets/icon/${Menu.icon}.svg`)}
                  alt="${Menu.icon}"
                  className="w-7"
                />
                <span
                  className={`${
                    !open && 'hidden'
                  } text-base origin-left duration-300 uppercase font-semibold`}
                >
                  {Menu.title}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}