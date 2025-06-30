"use client";

import CustomerReviews from "./components/CustomerReviews";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image */}
        <Image
          src="/images/Chota-Dadiyal.png"
          alt="Hero image"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          width={1920}
          height={1080}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10" />
        {/* Centered Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Explore Indian Jungles with Us
          </h1>
          <p className="text-[#E0E0E0] text-lg md:text-2xl mb-8 max-w-2xl">
            Wildlife Tours, Photography Expeditions & Conservation Adventures
          </p>
          <a
            href="#tours"
            className="inline-block bg-leaf text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-200 hover:bg-[#5fa233] focus:outline-none focus:ring-2 focus:ring-leaf text-lg"
          >
            View Our Tours
          </a>
        </div>
      </section>
      {/* Tours Section */}
      <section className="bg-jungle text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {/* Guided Wildlife Tours */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-lg min-w-[320px]">
              <Image src="/images/Magge-Headon.png" alt="Guided Wildlife Tours" className="w-40 h-40 object-cover rounded-md mb-4 mx-auto" width={160} height={160} />
              <h2 className="text-[#7AD151] font-bold text-xl mb-2">Guided Wildlife Tours</h2>
              <p className="text-gray-300 text-sm mb-4 text-center">Join our expert-led expeditions into India&apos;s wildest jungles. Experience thrilling safaris, learn about conservation, and capture stunning wildlife moments.</p>
              <a href="#" className="uppercase text-sm bg-[#7AD151] text-[#0C0C0C] px-4 py-2 rounded-md font-semibold hover:bg-[#5fa233] transition-colors">Tour Info</a>
            </div>
            
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* Corporate Wildlife Tours */}
            {/*
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-lg min-w-[320px] min-h-[420px] self-center">
              <Image src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80" alt="Crossover Tours" className="w-40 h-40 object-cover rounded-md mb-4 mx-auto" width={160} height={160} />
              <h2 className="text-[#7AD151] font-bold text-xl mb-2">Crossover Tours</h2>
              <p className="text-gray-300 text-sm mb-4 text-center">Team-building in the wild! Our corporate tours offer unique bonding experiences, leadership activities, and nature-based workshops in stunning locations.</p>
              <a href="#" className="uppercase text-sm bg-[#7AD151] text-[#0C0C0C] px-4 py-2 rounded-md font-semibold hover:bg-[#5fa233] transition-colors">Enquire</a>
            </div>
            */}
            {/* Birding Tours */}
            <div className="bg-[#181818] rounded-xl p-8 flex flex-col items-center shadow-lg min-w-[320px] min-h-[420px] self-center">
              <Image src="/images/Hawk-Eagle.jpg" alt="Corporate Wildlife Tours" className="w-40 h-40 object-cover rounded-md mb-4 mx-auto" width={160} height={160} />
              <h2 className="text-[#7AD151] font-bold text-xl mb-2">Birding Tours</h2>
              <p className="text-gray-300 text-sm mb-4 text-center">Discover India&apos;s rich avian diversity with our birding experts. Perfect for beginners with masterclasses and guided walks.</p>
              <a href="#" className="uppercase text-sm bg-[#7AD151] text-[#0C0C0C] px-4 py-2 rounded-md font-semibold hover:bg-[#5fa233] transition-colors">Coming Up...</a>
            </div>
          </div>
        </div>
      </section>
      {/* Our Impact Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center py-16 px-6">
        {/* Background Image */}
        {/* <img
          src="/images/Hero-Image.png"
          alt="Leopard close-up background"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[top] z-0 min-h-[400px]"
        /> */}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content Card */}
        <div className="relative z-20 max-w-3xl mx-auto bg-black/60 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center shadow-2xl">
          <h2 className="text-[#7AD151] font-bold text-3xl mb-4">Our Impact</h2>
          <p className="text-white mb-8 text-lg">
            At IntoTheWild Expeditions, since our inception in 2025, we&apos;ve been dedicated to nurturing the next generation of wildlife photographers. We&apos;ve built a vibrant community that shares our passion for nature and wildlife.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            <div className="flex flex-col items-center min-w-[140px]">
              <span className="text-[#7AD151] text-4xl font-bold">100+</span>
              <span className="uppercase text-[#E0E0E0] text-sm tracking-wider mt-1">Photo Enthusiasts Trained</span>
            </div>
            <div className="flex flex-col items-center min-w-[140px]">
              <span className="text-[#7AD151] text-4xl font-bold">50+</span>
              <span className="uppercase text-[#E0E0E0] text-sm tracking-wider mt-1">Photo Tours Offered</span>
            </div>
          </div>
        </div>
      </section>
      <CustomerReviews />
      {/* Why Choose Us Section */}
      <section className="w-full bg-[#1A1A1A] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="flex-1 w-full flex justify-center">
            <Image 
              src="/images/Guests/Tour-participants.jpg"
              alt="Group photo of tour participants"
              className="rounded-xl shadow-lg w-full max-w-[200px] aspect-circle object-cover object-center"
              width={200}
              height={200}
            />
          </div>
          {/* Right: Content */}
          <div className="flex-1 w-full flex flex-col justify-center items-start max-w-xl mx-auto">
            <h2 className="text-[#7AD151] font-bold text-3xl mb-4">Why Choose Us?</h2>
            <p className="mb-6 text-lg">
              Because it&apos;s more than just a tour. It&apos;s a transformative journey through the heart of India&apos;s wilderness. With professional mentors, eco-conscious itineraries, and decades of field experience, IntoTheWild is where your lens meets purpose.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-2">
                {/* Checkmark Icon */}
                <svg className="w-5 h-5 text-[#7AD151] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Trusted by 300+ Photographers</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#7AD151] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Local Experts & Naturalists</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#7AD151] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Comfortable & Ethical Safari Planning</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#7AD151] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Ideal for Beginners to Pros</span>
              </li>
            </ul>
            <a
              href="#team"
              className="bg-[#7AD151] text-[#0C0C0C] px-6 py-2 rounded-md font-semibold uppercase tracking-wide hover:bg-[#5fa233] transition-colors"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
      {/* Media Section */}
      <section className="w-full bg-[#0C0C0C] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#7AD151] font-bold text-3xl mb-2">Moments from the Wild</h2>
          <p className="text-[#E0E0E0] mb-8">Captured by our travelers and mentors on real jungle safaris</p>
          {/* Carousel/Grid */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:overflow-x-visible">
            {/* Image Card 1 */}
            <div className="relative min-w-[220px] h-56 md:min-w-0 md:h-60 rounded-xl shadow-lg overflow-hidden group">
              <Image src="/images/Magge-Headon.png" alt="Expedition 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" width={220} height={240} />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-xs text-white m-3">Chota Dadiyal, Tadoba 2025</span>
              </div>
            </div>
            {/* Image Card 2 */}
            <div className="relative min-w-[220px] h-56 md:min-w-0 md:h-60 rounded-xl shadow-lg overflow-hidden group">
              <Image
                src="/images/Tadoba-ChotaDadiyal.png"
                alt="Expedition 2"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ objectPosition: "center" }}
                width={220}
                height={240}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-xs text-white m-3">Chota Dadiyal, Tadoba 2025</span>
              </div>
            </div>
            {/* Image Card 3 */}
            <div className="relative min-w-[220px] h-56 md:min-w-0 md:h-60 rounded-xl shadow-lg overflow-hidden group">
              <Image src="/images/Coorg-Tusker.jpg" alt="Expedition 3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" width={220} height={240} />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-xs text-white m-3">Chota Dadiyal, Tadoba 2025</span>
              </div>
            </div>
            {/* Image Card 4 */}
            <div className="relative min-w-[220px] h-56 md:min-w-0 md:h-60 rounded-xl shadow-lg overflow-hidden group">
              <Image
                src="/images/Tadoba-Shimbu.png"
                alt="Expedition 4"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 bg-black"
                style={{ objectPosition: "center" }}
                width={220}
                height={240}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-xs text-white m-3">Chota Dadiyal, Tadoba 2025</span>
              </div>
            </div>
          </div>
          {/* Instagram CTA */}
          <div className="flex justify-center mt-10">
            <a
              href="https://instagram.com/itwexpedition"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7AD151] text-[#0C0C0C] px-5 py-2 rounded-lg font-semibold hover:bg-[#5fa233] transition-colors"
            >
              <FaInstagram className="inline-block mr-2" size={20} />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="w-full bg-[#1A1A1A] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-[#7AD151] text-2xl font-bold">Get in Touch</h2>
          <p className="mt-2 max-w-2xl mx-auto">Have questions about our tours, availability, or custom itineraries? We&apos;d love to hear from you.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <form className="w-full max-w-lg mx-auto flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" placeholder="Your Name" required className="w-full bg-[#0C0C0C] text-white rounded-md border border-gray-600 px-4 py-2 focus:ring-2 focus:ring-[#7AD151] focus:outline-none"/>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Your Email" required className="w-full bg-[#0C0C0C] text-white rounded-md border border-gray-600 px-4 py-2 focus:ring-2 focus:ring-[#7AD151] focus:outline-none"/>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" rows={5} placeholder="Your Message" required className="w-full bg-[#0C0C0C] text-white rounded-md border border-gray-600 px-4 py-2 focus:ring-2 focus:ring-[#7AD151] focus:outline-none"></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-[#7AD151] text-[#0C0C0C] px-6 py-2 rounded-md font-semibold uppercase tracking-wide hover:bg-[#5fa233] transition-colors"
              onClick={async (e) => {
                e.preventDefault();
                
                const name = (document.getElementById('name') as HTMLInputElement)?.value?.trim();
                const email = (document.getElementById('email') as HTMLInputElement)?.value?.trim();
                const message = (document.getElementById('message') as HTMLTextAreaElement)?.value?.trim();
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailRegex.test(email)) {
                  alert('Please enter a valid email address');
                  return;
                }
                
                // Message validation
                if (!message || message.length < 10) {
                  alert('Please enter a message with at least 10 characters');
                  return;
                }
                
                // Prevent spam by checking for suspicious patterns
                const suspiciousPatterns = [
                  /[A-Z]{10,}/, // Too many consecutive caps
                  /[!@#$%^&*()]{5,}/, // Too many special characters
                  /\b(spam|viagra|casino|loan)\b/i, // Common spam words
                ];
                
                const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(message));
                if (isSuspicious) {
                  alert('Message contains suspicious content. Please review and try again.');
                  return;
                }
                
                try {
                  // Send email using mailto link with pre-filled content
                  const subject = encodeURIComponent('Enquiry about the Tour');
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                  const mailtoLink = `mailto:kalyanwildlifephotographer@gmail.com?subject=${subject}&body=${body}`;
                  
                  window.open(mailtoLink, '_blank');
                  
                  // Clear form
                  (document.getElementById('name') as HTMLInputElement).value = '';
                  (document.getElementById('email') as HTMLInputElement).value = '';
                  (document.getElementById('message') as HTMLTextAreaElement).value = '';
                  
                  alert('Thank you for your enquiry! Your email client should open with a pre-filled message.');
                } catch (error) {
                  console.error('Error sending message:', error);
                  alert('There was an error sending your message. Please try again or contact us directly.');
                }
              }}
            >
              Send Message
            </button>
          </form>
          {/* Right: Map/Image */}
          <div className="w-full flex items-center justify-center">
             <Image src="/images/Elephant-Herd.jpg" alt="Elephant Herd in the jungle" className="rounded-xl shadow-lg w-full h-full object-cover object-center max-h-[400px]" width={600} height={400} />
          </div>
        </div>
      </section>
    </main>
  );
}
