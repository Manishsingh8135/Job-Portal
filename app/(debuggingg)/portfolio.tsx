// components/ProfileComponent.tsx
"use client"
import React, { useState } from 'react';

const ProfileComponent: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        if (openSection === section) {
            setOpenSection(null);
        } else {
            setOpenSection(section);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 dark:from-gray-700 dark:via-gray-900 dark:to-black p-10">
            <div className="w-full max-w-4xl p-6 bg-white shadow-xl rounded-xl dark:bg-gray-800 relative h-[500px]"> 
                {/* Adjust 'h-[500px]' to your preferred height */}
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Your Name</h1>
                <div className="flex h-full">
                    <div className="w-1/2 pr-4 space-y-4">
                        {["Personal Details", "Education", "Experience"].map((section) => (
                            <div key={section}>
                                <button
                                    className="text-xl text-gray-900 dark:text-white hover:underline"
                                    onClick={() => toggleSection(section)}
                                >
                                    {section}
                                </button>
                                <div 
                                    className={`transition-max-height duration-500 overflow-hidden ${openSection === section ? 'max-h-screen' : 'max-h-0'}`}
                                >
                                    {/* Example content inside the collapsible */}
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, natus?
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/2 pl-4 relative">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg" 
                            alt="Your Profile" 
                            className="w-full h-full object-cover rounded-full shadow-2xl absolute -top-1/2 left-0 right-0 ml-auto mr-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
