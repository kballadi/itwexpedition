import { FaInstagram, FaYoutube } from "react-icons/fa";

interface FooterProps {
  onContactClick?: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => (
  <footer className="w-full bg-[#0C0C0C] text-[#AAAAAA] pt-16">
    <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* Column 1: Logo & Tagline */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-xl font-bold text-white">IntoTheWild Expeditions</h3>
        <p className="mt-2 text-sm">Into the Wild, Through the Lens.</p>
      </div>
      {/* Column 2: Quick Links */}
      <div>
        <h4 className="font-semibold text-white mb-3">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="/about" className="hover:text-white transition-colors uppercase">ABOUT</a></li>
          <li><a href="#tours" className="hover:text-white transition-colors uppercase">TOURS</a></li>
          <li><a href="/gallery/wildlife" className="hover:text-white transition-colors uppercase">GALLERY</a></li>
          <li>
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="transition-colors uppercase bg-transparent border-none cursor-pointer"
                style={{ color: '#7AD151', fontWeight: 'inherit' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                onMouseOut={e => (e.currentTarget.style.color = '#7AD151')}
              >
                CONTACT
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/* Column 3: Social Icons */}
      <div>
        <h4 className="font-semibold text-white mb-3">Follow Us</h4>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="https://instagram.com/itwexpedition" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
           
            <FaInstagram className="inline-block mr-2" size={20} />
          </a>
          <a href="https://www.youtube.com/@IntoTheWildWithKalyan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
           
            <FaYoutube className="inline-block mr-2" size={20}/>
          </a>
        </div>
      </div>
    </div>
    {/* Footer Bottom Bar */}
    <div className="mt-12 border-t border-gray-800 py-4">
      <p className="text-center text-xs text-gray-500">© 2025 IntoTheWild Expeditions. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer; 