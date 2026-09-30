import React, { useState } from 'react';
import { Globe, Menu, Search, User } from 'lucide-react';

interface NavbarProps {
  onSearchClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Airbnb Logo */}
        <a href="#" className="flex items-center gap-1.5 text-airbnb-brand hover:opacity-90 transition-opacity">
          <svg
            className="w-8 h-8 fill-current text-[#FF385C]"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.396.096 1.768-.464 3.473-1.63 4.8-1.22 1.388-2.923 2.195-4.79 2.271-2.148.087-4.177-.735-5.914-2.316l-.58-.553-.575.549c-1.737 1.581-3.766 2.403-5.914 2.316-1.867-.076-3.57-.883-4.79-2.271-1.166-1.327-1.726-3.032-1.63-4.8.05-.917.293-1.805.96-3.396l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.327.643-3.39 2.547l-.545 1.05C10.15 10.323 6.02 18.97 5.068 21.196l-.13.315c-.567 1.353-.767 2.08-.807 2.827-.067 1.237.324 2.43 1.14 3.359.852.97 2.046 1.534 3.353 1.587 1.632.066 3.21-.564 4.582-1.777l.794-.749 2 1.884c1.372 1.213 2.95 1.843 4.582 1.777 1.307-.053 2.501-.617 3.353-1.587.816-.929 1.207-2.122 1.14-3.359-.04-.747-.24-1.474-.807-2.827l-.13-.315c-.952-2.226-5.082-10.873-6.997-14.599l-.545-1.05C18.327 3.643 17.239 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
          <span className="font-bold text-xl tracking-tight text-[#FF385C] hidden sm:inline-block">airbnb</span>
        </a>

        {/* Search Pill */}
        <div 
          onClick={onSearchClick}
          className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer divide-x divide-gray-200 text-sm font-semibold text-gray-800"
        >
          <div className="flex items-center gap-2 pr-4 pl-1">
            <span className="text-base">🏡</span>
            <span className="hover:text-black">Anywhere</span>
          </div>
          <button type="button" className="px-4 hover:text-black font-semibold">Anytime</button>
          <div className="flex items-center gap-3 pl-4">
            <span className="text-gray-500 font-normal">Add guests</span>
            <div className="bg-[#FF385C] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#E00B41] transition-colors">
              <Search className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Right Nav Menu */}
        <div className="flex items-center gap-3">
          <button 
            type="button"
            className="text-sm font-semibold text-gray-700 hover:bg-gray-100 py-2.5 px-4 rounded-full transition-colors hidden md:block"
          >
            Become a host
          </button>
          
          <button 
            type="button"
            aria-label="Language & Currency"
            className="p-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Globe className="w-4 h-4 text-gray-700" />
          </button>

          {/* User Menu Dropdown Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-3 border border-gray-300 rounded-full p-2 pl-3 hover:shadow-md transition-shadow bg-white"
            >
              <Menu className="w-4 h-4 text-gray-600" />
              <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center text-white">
                <User className="w-4 h-4 fill-white text-white" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {userMenuOpen && (
              <div 
                className="absolute right-0 top-12 w-60 bg-white rounded-xl shadow-airbnb border border-gray-100 py-2 z-50 text-sm animate-in fade-in zoom-in-95 duration-100"
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <button type="button" className="w-full text-left px-4 py-3 font-semibold hover:bg-gray-50">Sign up</button>
                <button type="button" className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50">Log in</button>
                <div className="h-px bg-gray-100 my-1"></div>
                <button type="button" className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50">Airbnb your home</button>
                <button type="button" className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50">Host an experience</button>
                <button type="button" className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50">Help Center</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
