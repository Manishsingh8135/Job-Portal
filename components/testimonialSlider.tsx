"use client"
import { useState } from 'react';
import TestimonialCard from './testimonialCard';
// import { Transition } from '@headlessui/react';

type Testimonial = {
    name: string;
    title: string;
    testimonial: string;
    imageUrl: string;
};

export default function TestimonialSlider() {
    const testimonials: Testimonial[] = [
        {
            name: 'Anna Doe',
            title: 'Graphic designer',
            testimonial: 'Transforming Job Searches into Dream Opportunities with Sheddler\'s list!',
            imageUrl: 'https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/080.jpg'
        },
        {
            name: 'John Smith',
            title: 'Web Developer',
            testimonial: 'Finding the right opportunities was never this easy. Thanks to Sheddler\'s List for making my journey effortless.',
            imageUrl: 'https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/081.jpg'
        },
        {
            name: 'Lucy White',
            title: 'UI/UX Designer',
            testimonial: 'Sheddler\'s List gave me exposure to the best companies out there. Their platform is a game-changer for job seekers.',
            imageUrl: 'https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/082.jpg'
        },
        {
            name: 'Mark Green',
            title: 'Digital Marketer',
            testimonial: 'From job search to placement, Sheddler\'s List was there at every step. Highly recommended!',
            imageUrl: 'https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/083.jpg'
        },
        {
            name: 'Sophie Turner',
            title: 'Content Writer',
            testimonial: 'With Sheddler\'s List, I landed my dream job within weeks. Their platform is user-friendly and highly efficient.',
            imageUrl: 'https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/084.jpg'
        }
        ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const prevTestimonial = () => {
        setCurrentTestimonialIndex(
            currentTestimonialIndex === 0
                ? testimonials.length - 1
                : currentTestimonialIndex - 1
        );
    };

    const nextTestimonial = () => {
        setCurrentTestimonialIndex(
            (currentTestimonialIndex + 1) % testimonials.length
        );
    };

    const currentTestimonial = testimonials[currentTestimonialIndex];

    return (
        <div className="relative container my-24 mx-auto md:px-6"> {/* Added relative positioning here */}
            {/* <Transition
                as="div"
                show={true}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <TestimonialCard {...currentTestimonial} />
            </Transition> */}

            {/* Left Button */}
            <button onClick={prevTestimonial} className="bg-black bg-opacity-50 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-opacity-70 transition ease-in-out duration-300">
                &#60;
            </button>
            <TestimonialCard {...currentTestimonial} />
            {/* Right Button */}
            <button onClick={nextTestimonial} className="bg-black bg-opacity-50 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-opacity-70 transition ease-in-out duration-300">
                &#62;
            </button>
        </div>
    );
}
