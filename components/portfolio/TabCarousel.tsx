// components/TabCarousel.tsx
"use client"
import React from 'react';
import { ModeToggle } from '../ui/ModeToggle';
type TabNames = "Personal Details" | "Education" | "Experience";

interface Props {
    onSelect: (tab: TabNames) => void;
    activeTab: TabNames;
}

const TabCarousel: React.FC<Props> = ({ onSelect, activeTab }) => {
    const tabs: TabNames[] = ["Personal Details", "Education", "Experience"];

    return (
        <div className="absolute left-[-30%] top-1/4 w-64 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded p-4 shadow-lg">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => onSelect(tab)}
                    className={`block w-full text-white rounded p-2 mb-2 ${activeTab === tab ? 'bg-purple-600 dark:bg-gray-600' : ''}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default TabCarousel;
