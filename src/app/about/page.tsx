import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className="bg-[#0C0C0C] text-white">
      {/* Founder Introduction Section */}
      <section className="relative w-full py-20 px-8 flex items-center justify-center min-h-[100vh]">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Background Image */}
        <Image
          src="/images/Coorg-Tusker.jpg"
          alt="Tusker in a forest background"
          layout="fill" 
          objectFit="cover" objectPosition='center'
          className="absolute inset-0 z-0 opacity-70"
        />

        <div className="relative z-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* Left: Text Block */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">I am Kalyan Babu Alladi…</h1>
            <p className="mb-4 text-lg text-gray-300">
              My journey into the wild began in 2019, when a lifelong passion for nature transformed into a professional calling. As a <span className="text-[#7AD151]">wildlife photographer</span>, I found my purpose in the dense forests of Kabini and the sprawling landscapes of Nagarahole.
            </p>
            <p className="text-lg text-gray-300">
              I founded IntoTheWild Expeditions to share this passion and promote conservation through the powerful medium of lens-based storytelling. We are dedicated to creating ethical, immersive, and unforgettable wildlife experiences.
            </p>
          </div>

          {/* Right: Founder Image */}
          <div className="flex justify-center md:justify-end">
            <div className="max-w-sm rounded-xl shadow-xl overflow-hidden">
              <Image
                src="/images/Profile-Picture.jpg"
                alt="Portrait of Kalyan Babu"
                width={400}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Featured In Section */}
      <section className="w-full py-10 flex flex-col items-center justify-center">
        <h2 className="text-white text-center uppercase font-bold tracking-widest mb-8 text-lg">Featured In</h2>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center">
          {/* National Geographic Logo Placeholder */}
          <div className="bg-white p-4 rounded shadow h-50 w-50 flex items-center justify-center">
            {/* Replace src with actual logo if available */}
            <Image src="/images/Nif.jpg" alt="Nature In Focus" className="object-contain h-full w-full" width={100} height={50} />
          </div>
          {/* Animal Planet Logo Placeholder */}
          <div className="bg-white p-4 rounded shadow h-50 w-50 flex items-center justify-center">
            {/* Replace src with actual logo if available */}
            <Image src="/images/AnimalPlanet.jpg" alt="Animal Planet" className="object-contain h-full w-full" width={100} height={50} />
          </div>
        </div>
      </section>
      {/* Our Vision Section */}
      <section className="w-full bg-[#0C0C0C] py-16 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our <span className="text-[#7AD151]">Vision.</span>
        </h2>
        {/* Leaf Divider Icon */}
        <div className="mb-6">
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 22C20 22 36 14 36 2" stroke="#7AD151" strokeWidth="3" strokeLinecap="round"/>
            <path d="M20 22C20 22 4 14 4 2" stroke="#7AD151" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="text-gray-200 max-w-3xl mx-auto text-center text-lg">
          At IntoTheWild Expeditions, our vision is to nurture the next generation of passionate photographers and storytellers. We believe in teaching conservation through meaningful fieldwork, immersive experiences, and a deep respect for nature. Our mission is to inspire, educate, and empower every traveler to become a steward of the wild.
        </p>
      </section>
      {/* Why Choose Us Section (About Page) */}
      <section className="w-full bg-[#0C0C0C] py-16 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why choose <span className="text-[#7AD151]">us?</span>
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto text-center text-lg">
          IntoTheWild Expeditions offers a unique blend of hands-on photography guidance, deep wildlife immersion, and a strong commitment to conservation. Our journeys are designed for those who seek more than just a tour—each experience is crafted to inspire, educate, and connect you with the wild in meaningful ways.
        </p>
      </section>
    </main>
  );
};

export default AboutPage; 