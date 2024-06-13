import React, { useState, useEffect } from 'react';
import Sidebar from './smallcomponents/Sidebar';
import TopNavigation from './smallcomponents/TopNavigation';
import AdminCard from './smallcomponents/AdminCard';

const ManageAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Top Navigation */}
        <TopNavigation toggleSidebar={toggleSidebar} />

        {/* Main content */}
        <div className="p-6 flex-1 overflow-y-auto">
          {/* Admin cards section */}
          <h2 className="text-2xl font-semibold mb-4">Manage Admins</h2>
          <AdminCard />
        </div>
      </div>
    </div>
  );
};

export default ManageAdmin;
