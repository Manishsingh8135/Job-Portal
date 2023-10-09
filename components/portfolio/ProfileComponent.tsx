// components/ProfileComponent.tsx
"use client"
import React, { useState } from 'react';
import TabCarousel from './TabCarousel';
import { ModeToggle } from '../ui/ModeToggle';

type TabNames = "Personal Details" | "Education" | "Experience";
type TabContent = string | { [subHeading: string]: string };
type TabContents = Record<TabNames, TabContent>;

const ProfileComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabNames>("Personal Details");

    const tabData: TabContents = {
        "Personal Details": "Dr. Sheddler Jacques is a highly accomplished and dedicated healthcare professional with a diverse and impressive background in medicine, respiratory care, and public health leadership...",
        "Education": {
            "Medical Doctor (MD)": `As a licensed Medical Doctor, Dr. Jacques has undergone rigorous medical training
            in Haiti, acquiring a deep understanding of human physiology, anatomy, and
            disease management. With a commitment to patient-centered care, Dr. Jacques
            brings a compassionate approach to healthcare and the ability to diagnose and
            treat a wide range of medical conditions`,


            "Master of Public Health (MPH):": `Dr. Jacques holds a Master of Public Health (MPH) degree, which demonstrates a
            commitment to improving the health and well-being of communities on a broader
            scale. With a focus on leadership within public health, Dr. Jacques possesses the
            knowledge and skills necessary to design and implement public health programs,
            analyze healthcare data, and shape health policies.`,


            "Other Training": "Other relevant educational details..."
        },
        "Experience": {
          "Registered Respiratory Therapist (RRT)":  `Dr. Jacques is also a Registered Respiratory Therapist (RRT), which adds a unique
          dimension to their skill set. This qualification indicates expertise in respiratory
          care, including the assessment, treatment, and management of respiratory
          conditions. Dr. Jacques is well-versed in various respiratory therapies, such as
          mechanical ventilation, oxygen therapy, and pulmonary function testing, ensuring
          optimal respiratory health for patients.`,
        

        "Leadership and Impact":`Dr. Jacques&#39; unique combination of qualifications allows them to be a dynamic
        leader in healthcare. They have the ability to bridge the gap between clinical
        
        practice and public health, making informed decisions that positively influence
        both individual patient outcomes and the broader community&#39;s health.
        With a passion for healthcare innovation and a dedication to evidence-based
        practices, Dr. Jacques has a track record of driving positive change in healthcare
        organizations. Their leadership style is characterized by collaboration, strategic
        thinking, and a commitment to achieving the highest standards of patient care and
        public health excellence.
        Dr. Sheddler Jacques is a visionary healthcare professional whose expertise as an
        MD, RRT, and MPH uniquely positions them to tackle complex healthcare
        challenges, champion public health initiatives, and make a lasting impact on the
        well-being of individuals and communities alike.`
        
        }
    };

    const currentTabData = tabData[activeTab];

    const renderContent = () => {
        if (typeof currentTabData === "string") {
            return <p>{currentTabData}</p>;
        } else {
            return Object.entries(currentTabData as Record<string, string>).map(([subheading, content]) => (
                <div key={subheading}>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{subheading}</h2>
                    <p>{content}</p>
                </div>
            ));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 dark:from-gray-700 dark:via-gray-900 dark:to-black p-10">
            <div className="w-full max-w-4xl p-6 bg-white shadow-xl rounded-xl dark:bg-gray-800 relative h-[500px]">
                <div className='absolute -top-6 -right-6 z-10'>
                    <ModeToggle />
                </div>
                <TabCarousel activeTab={activeTab} onSelect={(tab) => setActiveTab(tab)} />
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Sheddler Jacques</h1>
                <h3>CEO </h3>
                <div className="flex h-full mt-5">
                    <div className="w-1/2 pr-4 space-y-4 overflow-y-auto hide-scrollbar" style={{ maxHeight: '350px',  scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {renderContent()}
                    </div>
                    <div className="w-1/2 pl-4 relative">
                        <img 
                            src="/assets/Sheddler1.jpeg" 
                            alt="Your Profile" 
                            className="w-full mt-5 h-full object-cover rounded-full shadow-2xl absolute -top-1/2 left-0 right-0 ml-auto mr-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
