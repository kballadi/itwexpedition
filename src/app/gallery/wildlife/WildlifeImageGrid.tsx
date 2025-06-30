"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const images = [
  // Tigers
  '/images/gallery-wildlife/jackal-Sunrise.png',
  '/images/gallery-wildlife/magge-Waterpool.png',
  '/images/gallery-wildlife/magge-Marking.png',
  '/images/gallery-wildlife/kabini-Peacock.png',
  '/images/gallery-wildlife/tusker-Coorg.jpg',
  '/images/gallery-wildlife/herd-Kabini.jpg',
  '/images/gallery-wildlife/chota-Dadiyal-Headon.png',
  '/images/gallery-wildlife/pavanDev-Tadoba .png',
  '/images/gallery-wildlife/langur-Kabini.png',
];

// Carousel version
const WildlifeImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to start interval
  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line
  }, []);

  // When current changes (by click or auto), restart interval
  useEffect(() => {
    startInterval();
    // eslint-disable-next-line
  }, [current]);

  return (
    <section className="w-full bg-[#0C0C0C] py-12 px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl aspect-square overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-black">
        <Image
          src={images[current]}
          alt={`Wildlife ${current + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-700"
        />
      </div>
      {/* <div style={{ padding: 10, zIndex: 100 }}>
  {images.map((_, idx) => (
    <button
      key={idx}
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: idx === current ? 'green' : 'gray',
        margin: 4,
        border: '2px solid black',
        zIndex: 100,
      }}
      onClick={() => setCurrent(idx)}
    />
  ))}
</div> */}
     <div className="flex justify-center mt-4 gap-2" style={{padding: 10, zIndex: 100 }}>
      {images.map((_, idx) => (
        <button
          key={idx}
          aria-label={`Go to slide ${idx + 1}`}
          className={
            `w-4 h-4 rounded-full border-2 border-black transition-all duration-200 ` +
            (current === idx ? 'bg-leaf scale-110' : 'bg-gray-400 opacity-60 hover:opacity-100')
          }
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: current === idx ? 'green' : 'gray',
            margin: 4,
            border: '2px solid black',
            zIndex: 100 }}
          onClick={() => setCurrent(idx)}
        />
      ))}
    </div>
    </section>
  );
};

/*
// Previous grid version:
const WildlifeImageGrid = () => (
  <section className="w-full bg-[#0C0C0C] py-12 px-6">
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center max-w-4xl">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-lg shadow-lg group aspect-square">
          <img
            src={src}
            alt={`Wildlife ${i+1}`}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </section>
);
*/

export default WildlifeImageCarousel; 