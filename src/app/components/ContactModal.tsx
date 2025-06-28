import React from 'react';
import Image from 'next/image';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60" onClick={onClose}>
      <div
        className="relative w-full max-w-2xl mx-auto rounded-lg border border-[#7AD151] overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/Chota-Dadiyal.png"
            alt="Tiger in the wild"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col justify-center h-full min-h-[320px]">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-white text-2xl font-bold" style={{fontSize:19,fontWeight:900}}>CONTACT US</h2>
            <div className="flex-1 border-t border-[#7AD151] ml-2" />
          </div>
          <p className="text-white text-lg mb-2" style={{fontSize: 14, fontWeight: 700}}>For Any Enquires Please Email Us</p>
          <p className="text-white text-base mb-2" style={{fontSize: 14, fontWeight: 700}}>
            <span style={{fontSize: 14, fontWeight : 700}} className="font-semibold">Email:</span> Info@IntoTheWild.Com
          </p>
          <p className="text-white text-base" style={{fontSize: 14, fontWeight: 700}}>
            <span className="font-semibold">Call Or WhatsApp</span> - 94410 17244 
          </p>
        </div>
        {/* Close Button */}
        {/* <button
          type="button"
          className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors duration-200 z-20"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close contact dialog"
        >
          ×
        </button> */}
      </div>
    </div>
  );
};

export default ContactModal; 