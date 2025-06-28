"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Rajanikanth',
    location: 'Hyderabad',
    review: "A tour with IntoTheWild is truly memorable. Arvind's teaching is practical and ensures that whatever we learn is applied in the field. He has excellent tracking skills and coordinates well with the naturalist, which is always a great combination. He ensures that all end-to-end arrangements are in place and blends seamlessly with the group to create cherished memories. I have always enjoyed his tours and photo workshops.",
    image: null,
  },
  {
    name: 'Hasham',
    location: 'Hyderabad',
    review: "An absolutely breathtaking experience! The guides were knowledgeable, and the entire trip was organized flawlessly. I captured some of the best photos of my life. Highly recommended for any wildlife enthusiast.",
    image: null,
  },
  {
    name: 'Randheer Reddy',
    location: 'Hyderabad',
    review: "From the planning stages to the final safari, everything was perfect. The team's passion for wildlife is contagious. They go the extra mile to ensure you have a safe, ethical, and unforgettable adventure.",
    image: null,
  },
];

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative w-full bg-black py-20 px-4 sm:px-8 flex items-center justify-center min-h-[70vh] h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Chota-Dadiyal.png"
        alt="Chota Dadiyal landscape"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
      />
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center h-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Customer <span className="text-[#7AD151]">Reviews</span>
        </h2>
        
        <div className="relative w-full flex items-center justify-center h-[350px] sm:h-[400px] md:h-[420px]">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 -translate-x-4 sm:-translate-x-1/2 md:-translate-x-full text-white/50 hover:text-white transition-colors z-20 p-2"
            aria-label="Previous review"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* Review Card */}
          <div className="w-full max-w-2xl mx-auto h-full flex items-center justify-center" key={activeIndex}>
            <div
              className="bg-black/50 backdrop-blur-md border border-[#7AD151]/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-white transition-opacity duration-500 animate-fade-in w-full h-full flex flex-col justify-center"
            >
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6 mb-4">
                <Image
                  src={reviews[activeIndex].image}
                  alt={reviews[activeIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-2 border-[#7AD151]"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg tracking-wider uppercase">{reviews[activeIndex].name}</h3>
                  <p className="text-gray-400">{reviews[activeIndex].location}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                “{reviews[activeIndex].review}”
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 translate-x-4 sm:translate-x-1/2 md:translate-x-full text-white/50 hover:text-white transition-colors z-20 p-2"
            aria-label="Next review"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews; 