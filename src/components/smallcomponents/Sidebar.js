import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white flex flex-col py-8 px-6 transition-all duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="text-3xl font-bold mb-8">WasteExpert</div>
      <nav className="mb-auto">
        <ul className="space-y-4">
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-blue-800">
              View Map
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-blue-800">
              Manage Admin
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-blue-800">
              Manage Dispatcher
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-blue-800">
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
  );
};

export default Sidebar;
