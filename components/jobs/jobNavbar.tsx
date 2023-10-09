
"use client"
import React, { useState } from 'react';
import { ModeToggle } from '../ui/ModeToggle';
import { UserButton, UserProfile } from '@clerk/nextjs';

const Navbar: React.FC = () => {
  // 1. Create a state for navbar open status
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // 2. Create a function to toggle navbar open status
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className='max-w-screen-md mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold ml-14'>Sheddler's List</div>

        {/* Navigation links */}
        <div className={`md:flex space-x-4 ${isNavbarOpen ? 'flex' : 'hidden'}`}>
          <a href='/' className='block py-2 px-4'>Home</a>
          <a href='#' className='block py-2 px-4'>About</a>
          <a href='#' className='block py-2 px-4'>Contact</a>
          <a href='/portfolio' className='block py-2 px-4'>Founder</a>
        </div>
        <div className='flex'>
          <div className='mr-3'>
            <ModeToggle/>
          </div>
          <div>
            <UserButton afterSignOutUrl="/"   />
          </div>
        </div>
        {/* Toggle button for smaller screens */}
        <button
          onClick={toggleNavbar}
          className='md:hidden p-2 rounded'
        >
          {isNavbarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
