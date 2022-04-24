import React from 'react';

export default function SidebarComponent() {
    //bi bi-caret-left-fill
  const [open, setOpen] = React.useState(true);
  const Menus = [
    { title: 'Overview', icon: 'overviews', url: '/overview' },
    { title: 'Sensor', icon: 'overviews', url: '/sensor', gap: true },
    { title: 'Map', icon: 'overviews', url: '/map' },
    { title: 'Setting', icon: 'overviews', url: '/setting' },
  ];

  return (
    <>
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } duration-300 h-screen p-5 pt-8 bg-blue-600 relative`}
      >
        <svg
          onClick={() => setOpen(!open)}
          className={`bi bi-chevron-double-right absolute cursor-pointer rounded-full -right-3 top-9 text-blue-600 w-7 font-medium border-2 bg-white border-blue-600 ${
            !open && "rotate-180"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
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
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
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
                className={`text-gray-50 duration-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-700 hover:text-white rounded-md ${
                  Menu.gap ? 'mt-4' : 'mt-2'
                } ${index === 0 && 'bg-light-white'}`}
              >
                <img
                  src={require(`../../assets/${Menu.icon}.svg`)}
                  alt="${Menu.icon}"
                  className="w-7"
                />
                <span
                  className={`${
                    !open && 'hidden'
                  } text-xl origin-left duration-300`}
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