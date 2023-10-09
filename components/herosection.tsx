"use client"

import Link from 'next/link'

function HeroSection() {
  return (
    <div className="mt-16 bg-gray-100 dark:bg-slate-800 py-32 relative h-screen">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:from-transparent dark:to-slate-800"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="gradient-text">Sheddler's List</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Elevate your business with our amazing solutions and services.
        </p>
        <div className="flex justify-center space-x-4">


          {/* <Link href='/signup' className="px-6 py-2 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300">
           Sign Up 
          </Link> */}


          <Link href="/sign-up" className="px-6 py-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full   text-center ">Sign Up </Link>
          <Link href="/jobs">
          <button className="px-6 py-2 border border-gray-900 text-gray-900 bg-gray-200 dark:bg-slate-800 dark:border-gray-100 dark:text-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300">
            Explore
          </button>
          </Link>
        </div>
      </div>
      <style jsx>{`
  .gradient-text {
    background-image: linear-gradient(45deg, #4F46E5, #9333EA);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    transform: translateY(-1rem);
    animation: fadeInSlideDown 1s forwards 0.5s;
  }

  h1, p {
    opacity: 0;
    transform: translateY(-1rem);
    animation: fadeInSlideDown 1s forwards;
  }

  button:hover, a:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }

  @keyframes fadeInSlideDown {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>

    </div>
  );
}

export default HeroSection;
