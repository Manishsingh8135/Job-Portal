"use client"
import React, {useState} from 'react';
import ResumeModal from './resumeModal';
type Job = {
    _id?: string;
    title: string;
    company: string;
    type: string;
    description: string;
    // ... other fields as needed
};

interface JobModalProps {
    job: Job;
    isOpen: boolean;
    onClose: () => void;
    onApply: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose, onApply }) => {
    const [showResumeModal, setShowResumeModal] = useState(false);
    const handleApply = () => {
        // Instead of calling the API directly, we show the ResumeModal
        setShowResumeModal(true);
    };

    const handleResumeSubmit = (resumeLink: string) => {
        setShowResumeModal(false);
        // Call your API to apply for the job using the provided resumeLink
        // ...
        onApply();
    };
    
    if (!isOpen) return null;

    

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
                <p className="mb-2"><strong>Company:</strong> <span className="text-gray-600">{job.company}</span></p>
                <p className="mb-2"><strong>Type:</strong> <span className="text-gray-600">{job.type}</span></p>
                <p className="mb-4 border-t border-gray-200 pt-2"><strong>Description:</strong><br /> {job.description}</p>
                <div className="flex justify-between">
                    <button onClick={handleApply} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
                        Apply
                    </button>
                    <button onClick={onClose} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
                        Close
                    </button>
                </div>
            </div>

            {/* Resume Modal */}
            <ResumeModal 
                isOpen={showResumeModal}
                onClose={() => setShowResumeModal(false)}
                onSubmit={handleResumeSubmit}
            />

        </div>
    );
}

export default JobModal;
