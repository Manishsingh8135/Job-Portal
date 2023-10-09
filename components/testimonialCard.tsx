// TestimonialCard.tsx

import React from 'react';

interface TestimonialCardProps {
  name: string;
  title: string;
  testimonial: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, testimonial, imageUrl }) => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center lg:text-left">
        <div className="py-12 md:px-6 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg text-gray-900 bg-whiteborder border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white px-6 py-12 ...">
                  <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                    {name}
                  </h2>
                  <p className="mb-4 font-semibold">{title}</p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    {testimonial}
                  </p>
                  <ul className="flex justify-center lg:justify-start">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-primary dark:text-primary-400">
                        <path fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                      </svg>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-primary dark:text-primary-400">
                        <path fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                      </svg>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-primary dark:text-primary-400">
                        <path fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                      </svg>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-primary dark:text-primary-400">
                        <path fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                      </svg>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-primary dark:text-primary-400">
                        <path fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <img
                  src={imageUrl}
                  className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="testimonial"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialCard;
