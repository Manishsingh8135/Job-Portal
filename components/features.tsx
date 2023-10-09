export default function FeatureSection() {
    return (
        <div id="features">
        <div className="bg-gray-100 dark:bg-slate-800 h-screen py-20">
            <div className="container mx-auto px-6 text-center h-full">
                <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-20">Features Overview</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 h-3/4">

                    {/* Card 1 */}
                    <div className="relative group p-10 bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 group-hover:opacity-25 transition-opacity"></div>
                        <h3 className="relative z-10 text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">Easy Job Search</h3>
                        <p className="relative  font-bold z-10 text-gray-600 dark:text-gray-300 mb-5">Discover jobs that fit your skills and preferences with our advanced search tools.</p>
                        <ul className="relative z-10 text-gray-600 dark:text-gray-300 mb-5 text-lg font-bold">
                            <li>• Advanced Filtering</li>
                            <li>• Real-time Results</li>
                            <li>• Skill Matching</li>
                        </ul>
                        <button className="relative z-10 mt-2 px-4 py-2 text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-purple-500 transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="relative group p-10 bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-green-600 group-hover:opacity-25 transition-opacity"></div>
                        <h3 className="relative z-10 text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">Instant Application</h3>
                        <p className="relative z-10 text-gray-600 dark:text-gray-300 mb-5 font-bold">Apply for jobs in just a few clicks and track your applications in real-time.</p>
                        <ul className="relative z-10 text-gray-600 dark:text-gray-300 mb-5 text-lg font-bold">
                            <li>• Quick Submissions</li>
                            <li>• Real-time Tracking</li>
                            <li>• Mobile Friendly</li>
                        </ul>
                        <button className="relative z-10 mt-2 px-4 py-2 text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-teal-500 transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="relative group p-10 bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 group-hover:opacity-25 transition-opacity"></div>
                        <h3 className="relative z-10 text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">Personalized Job Recommendations</h3>
                        <p className="relative z-10 text-white font-bold dark:text-gray-300 mb-5">Get job suggestions tailored to your profile and preferences, ensuring a perfect fit.</p>
                        <ul className="relative z-10 text-white font-bold dark:text-gray-300 mb-5 text-lg">
                            <li>• AI-powered Matching</li>
                            <li>• Personalized Alerts</li>
                            <li>• Daily Recommendations</li>
                        </ul>
                        <button className="relative z-10 mt-2 px-4 py-2 text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-red-500 transition-all">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}
