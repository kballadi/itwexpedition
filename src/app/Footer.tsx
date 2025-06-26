const Footer = () => (
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
          <li><a href="#about" className="hover:text-white transition-colors uppercase">ABOUT</a></li>
          <li><a href="#tours" className="hover:text-white transition-colors uppercase">TOURS</a></li>
          <li><a href="#gallery" className="hover:text-white transition-colors uppercase">GALLERY</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors uppercase">CONTACT</a></li>
        </ul>
      </div>
      {/* Column 3: Social Icons */}
      <div>
        <h4 className="font-semibold text-white mb-3">Follow Us</h4>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="https://instagram.com/itwexpedition" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2.001c-4.04.09-5.49.46-5.83 2.82-.16 1.12-.16 3.2 0 4.32.33 2.36 1.79 2.73 5.83 2.82 4.04-.09 5.49-.46 5.83-2.82.16-1.12.16-3.2 0-4.32C17.805 2.461 16.355 2.091 12.315 2.001zm-1.16 1.34c3.83.09 4.96.44 5.2 2.1.13.9.13 2.5 0 3.4-.24 1.66-1.37 2.01-5.2 2.1-3.83-.09-4.96-.44-5.2-2.1-.13-.9-.13-2.5 0-3.4.24-1.66 1.37-2.01 5.2-2.1zM12 7.181c-2.2 0-3.98 1.78-3.98 3.98s1.78 3.98 3.98 3.98 3.98-1.78 3.98-3.98S14.2 7.181 12 7.181zm0 1.34c1.47 0 2.64 1.17 2.64 2.64s-1.17 2.64-2.64 2.64-2.64-1.17-2.64-2.64S10.53 8.521 12 8.521zm4.5-.83c-.6 0-1.08.48-1.08 1.08s.48 1.08 1.08 1.08 1.08-.48 1.08-1.08-.48-1.08-1.08-1.08z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.25 5 12 5 12 5s-6.25 0-7.82.44c-.86.23-1.52.9-1.75 1.75C2 8.75 2 12 2 12s0 3.25.43 4.81c.23.86.9 1.52 1.75 1.75C5.75 19 12 19 12 19s6.25 0 7.82-.44c.86-.23 1.52-.9 1.76-1.75C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" /></svg>
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