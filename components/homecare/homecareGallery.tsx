// components/ImageGallery.tsx

import React from 'react';

interface ImageInfo {
  image: string;
  alt: string;
  caption: string;
}

const imageGalleryData: ImageInfo[] = [
  {
    image: 'https://static.wixstatic.com/media/db217e_123dcadf702c4ca3b2e4e002d98794b2~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/db217e_123dcadf702c4ca3b2e4e002d98794b2~mv2.jpg',
    alt: 'Image 1',
    caption: 'Beautiful landscape',
  },
  {
    image: 'https://connect.talemetry.com/system/production/assets/230476/original/featured-alliedhealth-people2-locationhospital-peoplepatient-640x420-072020.jpg',
    alt: 'Image 2',
    caption: 'A lovely flower',
  },
  {
    image: 'https://www.brighamandwomens.org/assets/BWH/images/promo/flu-vaccine-promo-700x400.jpg',
    alt: 'Image 3',
    caption: 'City lights at night',
  },
  {
    image: 'https://www.colgateprofessional.com/content/dam/cp-sites/oral-care/professional2020/global/articles/helping-my-patients-undergoing-cancer-treatment.jpg',
    alt: 'Image 4',
    caption: 'Sunset by the beach',
  },
  {
    image: 'https://agedcareguide-assets.imgix.net/news/articles/wp/iStock-1182515848.jpg?fm=pjpg&w=700&format=auto&q=65',
    alt: 'Image 4',
    caption: 'Sunset by the beach',
  },
  {
    image: 'https://www.clinicaladvisor.com/wp-content/uploads/sites/11/2018/12/diabetes-screening_0113-web-ex_334647.jpg',
    alt: 'Image 4',
    caption: 'Sunset by the beach',
  },
];

const HomecareGallery: React.FC = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-600 h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageGalleryData.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <div className="relative">
              <img
                src={item.image}
                alt={item.alt}
                className="object-cover w-full h-64 md:h-80 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
                {item.caption}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomecareGallery;
