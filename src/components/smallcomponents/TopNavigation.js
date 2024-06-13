import React from 'react';


const TopNavigation = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-blue-900 shadow px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Links */}
      <nav className="flex-1 mb-2 md:mb-0 md:text-right">
        {/* Show Sidebar Button (only for smaller screens and when sidebar is closed) */}
        {!isSidebarOpen && window.innerWidth <= 768 && (
          <button
            className="block text-white md:inline-block md:text-left md:mr-4"
            onClick={toggleSidebar}
          >
            
            Show Sidebar
          </button>
        )}
        {/* Example Links */}
        <a href="#" className="block text-white md:inline-block md:text-left md:mr-4">Link 1</a>
        <a href="#" className="block text-white md:inline-block md:text-left md:mr-4">Link 2</a>
        <a href="#" className="block text-white md:inline-block md:text-left md:mr-4">Link 3</a>
      </nav>
      
      {/* Example Button */}
      <button className="bg-teal-600 text-white px-4 py-2 rounded">Button</button>
    </header>
  );
};

export default TopNavigation;
