import React from 'react';

const TopNavigation = () => {
  return (
    <header className="bg-blue-900 shadow px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Links */}
      <nav className="flex-1 mb-2 md:mb-0 md:text-right flex items-center justify-center md:justify-end">
        <a href="#" className="block text-white md:inline-block md:mr-4 hover:text-teal-400">
          Link 1
        </a>
        <a href="#" className="block text-white md:inline-block md:mr-4 hover:text-teal-400">
          Link 2
        </a>
        <a href="#" className="block text-white md:inline-block md:mr-4 hover:text-teal-400">
          Link 3
        </a>
      </nav>
      
      {/* Example Button */}
      <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
        Button
      </button>
    </header>
  );
};

export default TopNavigation;
