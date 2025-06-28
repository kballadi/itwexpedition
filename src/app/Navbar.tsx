"use client";
import React from "react";
import Link from 'next/link';

const DeerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle mr-2">
    <path d="M4 3c1 2 3 4 6 4s5-2 6-4" stroke="#7AD151" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 7v3" stroke="#7AD151" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 10c0 2 1 4 4 4s4-2 4-4" stroke="#7AD151" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="17" r="2" stroke="#7AD151" strokeWidth="2"/>
  </svg>
);

interface NavbarProps {
  onContactClick?: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  type DropdownKey = 'social' | 'gallery';
  const [dropdown, setDropdown] = React.useState<{ social: boolean; gallery: boolean }>({ social: false, gallery: false });
  const closeTimers = React.useRef<{ [key in DropdownKey]?: NodeJS.Timeout }>({});

  // Handle sticky nav
  React.useEffect(() => {
    const nav = document.getElementById('navbar');
    const sticky = nav?.offsetTop || 0;
    const onScroll = () => {
      if (window.scrollY > sticky) {
        nav?.classList.add('shadow-lg');
      } else {
        nav?.classList.remove('shadow-lg');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('#navbar')) {
        setMenuOpen(false);
        setDropdown({ social: false, gallery: false });
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  // Handle dropdown open on hover (desktop) and click (mobile)
  const handleDropdown = (key: DropdownKey, open: boolean) => {
    if (window.innerWidth >= 1024) {
      if (open) {
        if (closeTimers.current[key]) clearTimeout(closeTimers.current[key]);
        setDropdown((d) => ({ ...d, [key]: true }));
      } else {
        closeTimers.current[key] = setTimeout(() => {
          setDropdown((d) => ({ ...d, [key]: false }));
        }, 150); // 150ms delay for smoother UX
      }
    }
  };

  const handleDropdownClick = (key: DropdownKey) => {
    if (window.innerWidth < 1024) {
      setDropdown((d) => ({ ...d, [key]: !d[key] }));
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdown({ social: false, gallery: false });
  };

  return (
    <nav id="navbar" className="bg-jungle text-white font-sans transition-colors duration-300 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center text-lg font-bold tracking-wide gap-2" onClick={closeMenu}>
            <img src="/images/INTO THE WILD.png" alt="IntoTheWild Logo" className="h-8 w-auto object-contain" />
            <span className="align-middle hidden sm:inline">IntoTheWild</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full">
            <ul className="flex flex-row space-x-6 text-center">
              {/* Social Media Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => handleDropdown('social', true)}
                onMouseLeave={() => handleDropdown('social', false)}
              >
                <button
                  className="flex items-center px-4 py-2 hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins"
                >
                  SOCIAL MEDIA
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
                <ul
                  className={`absolute left-0 mt-2 w-40 bg-jungle border border-gray-800 rounded shadow-lg transition-all duration-200 z-20 ${dropdown.social ? 'block' : 'hidden'} group-hover:block`}
                >
                  <li><a href="https://www.instagram.com/kalyanwildlife/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-leaf hover:text-jungle transition-colors duration-200 uppercase text-xs font-poppins">INSTAGRAM</a></li>
                  <li><a href="https://www.youtube.com/@IntoTheWildWithKalyan" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-leaf hover:text-jungle transition-colors duration-200 uppercase text-xs font-poppins">YOUTUBE</a></li>
                </ul>
              </li>
              {/* About Us */}
              <li>
                <Link href="/about" className="block px-4 py-2 hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins">ABOUT US</Link>
              </li>
              {/* Gallery Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => handleDropdown('gallery', true)}
                onMouseLeave={() => handleDropdown('gallery', false)}
              >
                <button
                  className="flex items-center px-4 py-2 hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins"
                >
                  GALLERY
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
                <ul
                  className={`absolute left-0 mt-2 w-40 bg-jungle border border-gray-800 rounded shadow-lg transition-all duration-200 z-20 ${dropdown.gallery ? 'block' : 'hidden'} group-hover:block`}
                  onMouseEnter={() => handleDropdown('gallery', true)}
                  onMouseLeave={() => handleDropdown('gallery', false)}
                >
                  <li><Link href="/gallery/wildlife" className="block px-4 py-2 hover:bg-leaf hover:text-jungle transition-colors duration-200 uppercase text-xs font-poppins">WILDLIFE</Link></li>
                  <li><Link href="#birding" className="block px-4 py-2 hover:bg-leaf hover:text-jungle transition-colors duration-200 uppercase text-xs font-poppins">BIRDING</Link></li>
                </ul>
              </li>
              {/* Contact Us */}
              <li>
                <button
                  type="button"
                  className="block px-4 py-2 hover:text-leaf transition-colors duration-200 w-full text-left uppercase text-xs font-poppins"
                  onClick={onContactClick}
                >
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-leaf"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="pb-4 space-y-2 border-t border-gray-700">
            {/* Social Media Mobile */}
            <div className="pt-4">
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-left hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins"
                onClick={() => handleDropdownClick('social')}
              >
                <span>SOCIAL MEDIA</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${dropdown.social ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className={`transition-all duration-200 ${dropdown.social ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="pl-4 space-y-1">
                  <a href="https://www.instagram.com/kalyanwildlife/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins">INSTAGRAM</a>
                  <a href="https://www.youtube.com/@IntoTheWildWithKalyan" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins">YOUTUBE</a>
                </div>
              </div>
            </div>

            {/* About Us Mobile */}
            <div className="pt-2">
              <Link 
                href="/about" 
                className="block px-4 py-2 hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins"
                onClick={closeMenu}
              >
                ABOUT US
              </Link>
            </div>

            {/* Gallery Mobile */}
            <div className="pt-2">
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-left hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins"
                onClick={() => handleDropdownClick('gallery')}
              >
                <span>GALLERY</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${dropdown.gallery ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className={`transition-all duration-200 ${dropdown.gallery ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/gallery/wildlife" 
                    className="block px-4 py-2 hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins"
                    onClick={closeMenu}
                  >
                    WILDLIFE
                  </Link>
                  <Link 
                    href="#birding" 
                    className="block px-4 py-2 hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins"
                    onClick={closeMenu}
                  >
                    BIRDING
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Us Mobile */}
            <div className="pt-2">
              <button
                type="button"
                className="block w-full px-4 py-2 text-left hover:text-leaf transition-colors duration-200 uppercase text-xs font-poppins"
                onClick={() => {
                  onContactClick?.();
                  closeMenu();
                }}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 