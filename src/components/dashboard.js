import React, { useState, useEffect } from 'react';
import Sidebar from './smallcomponents/Sidebar';
import TopNavigation from './smallcomponents/TopNavigation';
import WasteToCollect from './smallcomponents/WasteToCollect';
import SmartBins from './smallcomponents/SmartBins';
import SearchWithCategory from './smallcomponents/SearchWithCategory';
import Map from './smallcomponents/Map';
import ProfileModal from './smallcomponents/ProfileModal'; // Import the modal

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar is closed by default on smaller screens
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile modal state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  // Effect to set sidebar state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768); // Example threshold for sidebar collapse
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        {/* Top Navigation */}
        <TopNavigation toggleSidebar={toggleSidebar} openProfile={openProfile} />

        {/* Content Area */}
        <main className="p-6 space-y-6 overflow-y-auto">
          {/* Waste To Collect and Smart Bins */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WasteToCollect />
            <SmartBins />
          </div>

          {/* Search with Category and Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SearchWithCategory />
            <div className="col-span-1 md:col-span-2 lg:col-span-2 h-128"> {/* Adjust height as needed */}
              <Map />
            </div>
          </div>
        </main>
      </div>

      {/* Profile Modal */}
      <ProfileModal isOpen={isProfileOpen} onClose={closeProfile} />
    </div>
  );
};

export default Dashboard;
