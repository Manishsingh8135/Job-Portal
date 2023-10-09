import React, { useState } from 'react';
import JobModal from './jobModel';

interface JobCardProps {
    title: string;
    company: string;
    type: string;
    description: string;
}


const JobCard: React.FC<JobCardProps> = ({ title, company, type, description }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6 shadow-md">
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
            <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{company}</h4>
            <span className="inline-block bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-300 rounded-full px-3 py-1 text-sm font-semibold mr-2">{type}</span>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
            <button 
                onClick={() => setModalOpen(true)} 
                className="mt-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-4 rounded">
                View Details
            </button>
            <JobModal 
                job={{ title, company, type, description }}  
                isOpen={modalOpen} 
                onClose={() => { setModalOpen(false); }} 
                onApply={() => { /* Handle job apply success logic here */ }}
            />
        </div>
    );
}

export default JobCard;
