// "use client"
// import { useState } from 'react';

// const CreateJobPage: React.FC = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         company: '',
//         salary: '',
//         yearsOfExperience: '',
//         type: '',
//         field: '',
//         eligibility: '',
//         requirements: [''],
//         industry: '',
//         location: '',
//         description: ''
//     });

//     const handleSubmit = async () => {
//         try {
//             const response = await fetch('/api/jobs/post', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 // Handle success (e.g., show a success message, redirect, etc.)
//             } else {
//                 console.error(data);
//             }
//         } catch (error) {
//             console.error("Error posting job:", error);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//                 <h2 className="mt-6 text-center text-2xl font-semibold mb-4 dark:text-white">
//                     Post a New Job
//                 </h2>

//                 <div className="grid grid-cols-3 gap-4">
//                     {/* Title */}
//                     <div className="col-span-3">
//                         <input 
//                             value={formData.title}
//                             onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
//                             className="w-full p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
//                             placeholder="Job Title"
//                         />
//                     </div>

//                     {/* Company */}
//                     <div className="col-span-2">
//                         <input 
//                             value={formData.company}
//                             onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
//                             className="w-full p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
//                             placeholder="Company Name"
//                         />
//                     </div>

//                     {/* Location */}
//                     <input 
//                         value={formData.location}
//                         onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
//                         className="w-full p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
//                         placeholder="Job Location"
//                     />

//                     {/* Salary & Years of Experience */}
//                     <input 
//                         type="number"
//                         value={formData.salary}
//                         onChange={(e) => setFormData(prev => ({ ...prev, salary: e.target.value }))}
//                         className="p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
//                         placeholder="Salary"
//                     />
//                     <input 
//                         type="number"
//                         value={formData.yearsOfExperience}
//                         onChange={(e) => setFormData(prev => ({ ...prev, yearsOfExperience: e.target.value }))}
//                         className="p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
//                         placeholder="Years of Experience"
//                     />

//                     {/* Job Type, Field & Eligibility */}

//                     <select 
//                         value={formData.type}
//                         onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
//                         className="p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white"
//                     >
//                         {/* ...options... */}
//                         <option value="">Select Job Type</option>
//                         <option value="Full-Time">Full-Time</option>
//                         <option value="Part-Time">Part-Time</option>
//                         <option value="Internship">Internship</option>
//                         <option value="Temporary">Temporary</option>
//                         <option value="Contract">Contract</option>
//                     </select>
//                     <select 
//                         value={formData.field}
//                         onChange={(e) => setFormData(prev => ({ ...prev, field: e.target.value }))}
//                         className="p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white"
//                     >
//                         {/* ...options... */}
//                         <option value="">Select Job Field</option>
//                         <option value="IT">IT</option>
//                         <option value="Finance">Finance</option>
//                         <option value="Healthcare">Healthcare</option>
//                         <option value="Education">Education</option>
//                     </select>
//                     <select 
//                         value={formData.eligibility}
//                         onChange={(e) => setFormData(prev => ({ ...prev, eligibility: e.target.value }))}
//                         className="p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white"
//                     >
//                         {/* ...options... */}
//                         <option value="">Select Eligibility</option>
//                         <option value="Any Degree">Any Degree</option>
//                         <option value="Bachelors Degree">Bachelor Degree</option>
//                     </select>

//                     {/* Industry */}
//                     <div className="col-span-3">
//                         <select 
//                             value={formData.industry}
//                             onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
//                             className="w-full p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white"
//                         >
//                             {/* ...options... */}
//                             <option value="">Select Industry</option>
//                         <option value="Technology">Technology</option>
//                         <option value="Finance">Finance</option>
//                         {/* ...other options... */}
//                         </select>
//                     </div>

//                     {/* Description */}
//                     <div className="col-span-3">
//                         <textarea 
//                             value={formData.description}
//                             onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
//                             className="w-full p-2 rounded border dark:bg-gray-900 dark:border-gray-700 dark:text-white" 
//                             placeholder="Job Description"
//                             rows={4}
//                         />
//                     </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex justify-end mt-4">
//                     {/* You can replace this with a link to go back or another action you'd like */}
//                     <button 
//                         className="px-4 py-2 mr-2 rounded text-gray-700 dark:text-gray-400 border dark:border-gray-700"
//                     >
//                         Go Back
//                     </button>
//                     <button 
//                         onClick={handleSubmit}
//                         className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900"
//                     >
//                         Post
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateJobPage;


export default function CreateJobPage(){
    return(
        <>
        <div className="flex items-center justify-center">
            <h1 className="font-bold text-slate-800 dark:text-white ">Only Admin can Post Job!!</h1>
        </div>
        </>
    )
}