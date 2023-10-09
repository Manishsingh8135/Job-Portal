import React from 'react';
interface SidebarNewProps {
  toggleSidebar: () => void;
}
const SidebarNew: React.FC<SidebarNewProps> = ({ toggleSidebar }) => {
  return (
    <div className="h-full flex flex-col py-4 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className='mx-2'>
        <div className='flex justify-between  border-2 dark:border-b-gray-200 border-b-slate-700 pb-8'>
          <div className="flex justify-center mx-1">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">My Job Portal</h1>
          </div>

          <div className='ml-2  bg-red-700  p-1 rounded-lg  '>
            <button
              onClick={toggleSidebar}
              className=" text-gray-500 hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Logo/Title */}

        </div>
        {/* Links */}
        <nav className="mt-6">
          <ul className="space-y-2">
            {/* Example link */}
            
            <li>
              <a
                href="/postjobs"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition duration-300"
              >
                <span>Post new Job</span>
              </a>
            </li>

            <li>
              <a
                href="/jobs"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition duration-300"
              >
                <span>Find Jobs</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SidebarNew;
