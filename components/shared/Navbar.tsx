"use client"
import { useState , useEffect} from "react";
import Link from "next/link";
import { ModeToggle } from "../ui/ModeToggle";
import Signedinn from "./Signedin";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


 

  return (
    <div className={`fixed top-0 w-full z-10 bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-white border-b border-gray-300 dark:border-slate-700 `}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Sheddler's list
          </Link>

          <div className="hidden md:block ">
            <Link href="/jobs" className="text-gray-900 px-4 dark:text-white">
              Find Jobs
            </Link>
            <Link href="#features" className="text-gray-900 px-4 dark:text-white">
              Features
            </Link>
            <Link href="#services" className="text-gray-900 px-4 dark:text-white">
              Services
            </Link>
            <Link href="#contact " className="text-gray-900 px-4 dark:text-white">
              Contact
            </Link>
            <Link href="/portfolio " className="text-gray-900 px-4 dark:text-white">
              Founder
            </Link>
          </div>

          <div className="flex">
            <div className="mx-5">
              <UserButton afterSignOutUrl="/" />
            </div>

            <div>
              <ModeToggle />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none focus:text-gray-600 dark:text-white dark:focus:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="block md:hidden mt-4">
            <Link href="/jobs" className="block text-gray-900 px-4 py-2 dark:text-white">
              Find Jobs
            </Link>
            <Link href="#features" className="block text-gray-900 px-4 py-2 dark:text-white">
              Features
            </Link>
            <Link href="#services" className="block text-gray-900 px-4 py-2 dark:text-white">
              Services
            </Link>
            <Link href="#contact" className="block text-gray-900 px-4 py-2 dark:text-white">
              Contact
            </Link>
            <Link href="/portfolio" className="block text-gray-900 px-4 py-2 dark:text-white">
              Founder
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
