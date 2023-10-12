// components/Carousel.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const Carousel: React.FC = () => {
  const slides: Slide[] = [
    {
      image: 'https://firstresponse.ae/wp-content/uploads/2022/07/The-Benefits-of-Alzheimers-and-Dementia-Home-Care-Nursing-Manipulated-Image-copy-min.png',
      title: 'Dementia Care',
      description: 'Providing compassionate care for patients with dementia.',
    },
    {
      image: 'https://www.rn.com/siteassets/blog/geriatric-nursing.jpg?format=webp',
      title: 'Aging Gracefully',
      description: 'Supporting seniors in their journey of aging.',
    },
    {
      image: 'https://www.beaumont.org/images/default-source/cancer/beaumont-cancer-program-header.jpg',
      title: 'Cancer Support',
      description: 'Helping cancer patients through their treatment.',
    },
    {
      image: 'https://resources.amedisys.com/hs-fs/hubfs/Nursing-Care-Plan-Diabetes.jpg?width=1200&height=800&name=Nursing-Care-Plan-Diabetes.jpg',
      title: 'Disability Assistance',
      description: 'Empowering individuals with disabilities.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const toggleSlide = (increment: number) => {
    const nextSlide = (currentSlide + increment + slides.length) % slides.length;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="w-full relative h-screen">
      {/* Left Arrow Icon */}
      <button onClick={() => toggleSlide(-1)} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 7.84L10.59 12l4.82 4.82L14 18l-6-6 6-6 1.41 1.41z" />
        </svg>
      </button>

      {/* Right Arrow Icon */}
      <button onClick={() => toggleSlide(1)} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10.59 6.59L15.41 12l-4.82 4.82L16 18l6-6-6-6-1.41 1.41z" />
        </svg>
      </button>

      <div className="relative h-full dark:bg-gray-800">
        <img src={slides[currentSlide].image}
         alt={slides[currentSlide].title}
        className="object-cover h-full w-full" />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-white font-bold">
          <h2 className="text-6xl font-semibold mb-2">{slides[currentSlide].title}</h2>
          <p className="text-6xl">{slides[currentSlide].description}</p>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-4 flex justify-center space-x-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-300 dark:bg-gray-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
