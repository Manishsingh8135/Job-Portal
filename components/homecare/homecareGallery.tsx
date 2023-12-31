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
        alt: 'Patient receiving compassionate care at home',
        caption: 'Patient receiving compassionate care at home',
      },
      {
        image: 'https://connect.talemetry.com/system/production/assets/230476/original/featured-alliedhealth-people2-locationhospital-peoplepatient-640x420-072020.jpg',
        alt: 'Supporting seniors on their journey of aging gracefully',
        caption: 'Supporting seniors on their journey of aging gracefully',
      },
      {
        image: 'https://www.brighamandwomens.org/assets/BWH/images/promo/flu-vaccine-promo-700x400.jpg',
        alt: 'Helping cancer patients through their treatment at home',
        caption: 'Helping cancer patients through their treatment at home',
      },
      {
        image: 'https://www.colgateprofessional.com/content/dam/cp-sites/oral-care/professional2020/global/articles/helping-my-patients-undergoing-cancer-treatment.jpg',
        alt: 'Empowering individuals with disabilities with home care services',
        caption: 'Empowering individuals with disabilities with home care services',
      },
      {
        image: 'https://agedcareguide-assets.imgix.net/news/articles/wp/iStock-1182515848.jpg?fm=pjpg&w=700&format=auto&q=65',
        alt: 'Compassionate patient care in a homely environment',
        caption: 'Compassionate patient care in a homely environment',
      },
      {
        image: 'https://www.clinicaladvisor.com/wp-content/uploads/sites/11/2018/12/diabetes-screening_0113-web-ex_334647.jpg',
        alt: 'Comprehensive diabetes care at home',
        caption: 'Comprehensive diabetes care at home',
      },
];

const HomecareGallery: React.FC = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-600">
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
  </div>
  );
};

export default HomecareGallery;
