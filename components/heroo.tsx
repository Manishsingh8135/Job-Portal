"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-white">
      {/* Vibrant Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 opacity-80"></div>
      {/* Falling Balls */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ y: -10 }}
            animate={{ y: '100vh', x: [10, -10, 10] }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              filter: 'blur(1px)',
            }}
          ></motion.div>
        ))}
      </div>
      {/* Animated Image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Replace with your animated image */}
        <Image
          src="/https://images.ctfassets.net/hrltx12pl8hq/1fR5Y7KaK9puRmCDaIof7j/09e2b2b9eaf42d450aba695056793607/vector1.jpg?fit=fill&w=1200&h=630"
          alt="Animated Image"
          width={100}
          height={100}
        />
      </div>
      {/* Text Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 slate-800 dark:from-gray-700 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent"
        >
          Find Your Dream Job
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl mb-8 text-center bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 slate-800 dark:from-gray-700 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent"
        >
          Explore thousands of job opportunities today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="/signup">
             className="bg-blue-500 hover:bg-blue-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
              Sign Up
            
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
