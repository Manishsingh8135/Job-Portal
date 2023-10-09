"use client"
import { useState } from 'react';
import SidebarNew from './sidebarnew';
import JobsSection from './jobs/jobSection';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // Default closed

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="mt-15 flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* This button will only be visible on small screens */}
      <button onClick={toggleSidebar} className="md:hidden absolute top-4 left-4 z-10">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16m-16 6h16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`absolute  h-screen w-64 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20 ${sidebarOpen ? 'block' : 'hidden'} md:relative md:block`}>
        <SidebarNew toggleSidebar={toggleSidebar} />
      </div>
     
      <div className=' w-full overflow-auto  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900'>
          <JobsSection />
      </div>
    </div>
  );
}

export default Dashboard;
