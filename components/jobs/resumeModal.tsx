"use client"
import React, { useState } from 'react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (resumeLink: string) => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [resumeLink, setResumeLink] = useState("");

    const handleSubmit = () => {
        onSubmit(resumeLink);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
                <h2 className="text-xl font-bold mb-4 text-gray-100">Resume</h2>
                <p className="mb-4 text-gray-300">Please submit the link of your resume.</p>
                <input 
                    type="text" 
                    placeholder="Enter your resume link here"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    className="p-2 mb-4 w-full bg-gray-800 text-white rounded border border-gray-700 focus:border-indigo-500 focus:outline-none"
                />
                <div className="flex justify-between">
                    <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
                        Submit
                    </button>
                    <button onClick={onClose} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResumeModal;
