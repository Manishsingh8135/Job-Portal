"use client"
import React, { useState, useEffect } from 'react';
import JobCard from './jobCard';
import Navbar from './jobNavbar'; // Import the Navbar component

interface JobData {
  _id: string;
  title: string;
  company: string;
  type: string;
  description: string;
  // Add more properties as needed
}

const JobSection: React.FC = () => {
  const [jobData, setJobData] = useState<JobData[]>([]);
  // Track navbar state

  useEffect(() => {
    // Fetch data from the API and update jobData state
    fetch('https://jobportalbackend.netlify.app/.netlify/functions/api/jobs/all')
      .then((response) => response.json())
      .then((data: JobData[]) => {
        setJobData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

 
    console.log(jobData)
  return (
    <div>
      {/* Render the Navbar */}
      <Navbar/>

      {/* Content */}
      <div className='max-w-screen-md mx-auto p-4 mt-16'>
        {jobData.map((job) => (
          <JobCard
            key={job._id}
            title={job.title}
            company={job.company}
            type={job.type}
            description={job.description}
            // Add more props as needed
          />
        ))}
      </div>
    </div>
  );
};

export default JobSection;
