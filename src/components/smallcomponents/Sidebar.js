import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Drivers.jpeg'; // Adjust the path according to your project structure


const Sidebar = ({ isOpen }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(isOpen);

  return (
    <>
      {/* Mobile trigger */}
      <button
        title="Side navigation"
        type="button"
        className={`fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45"
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? "true" : "false"}
        aria-controls="nav-menu-1"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/* Side Navigation */}
      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-64 flex-col bg-blue-900 text-white py-8 px-6 transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-3xl font-bold mb-8 flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          WasteExpert
        </div>
        <nav className="mb-auto">
          <ul className="space-y-4">
            <li>
              <Link to="#" className="block py-2 px-4 hover:bg-blue-800">
                View Map
              </Link>
            </li>
            <li>
              <Link to="/mangeadmin" className="block py-2 px-4 hover:bg-blue-800">
                Manage Admin
              </Link>
            </li>
            <li>
              <Link to="/managedispatcher" className="block py-2 px-4 hover:bg-blue-800">
                Manage Dispatcher
              </Link>
            </li>
            <li>
              <Link to="/managecollector" className="block py-2 px-4 hover:bg-blue-800">
                Manage Collector
              </Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-4 hover:bg-blue-800">
                Manage Schedule
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Backdrop */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-opacity lg:hidden ${
          isSideNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
};

export default Sidebar;
