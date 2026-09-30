import React from 'react';
import { ChevronRight } from 'lucide-react';

interface LocationSectionProps {
  onShowMoreLocation: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onShowMoreLocation }) => {
  return (
    <div id="location-section" className="py-10 border-t border-gray-200 space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Where you'll be</h3>
      <p className="text-gray-700 text-sm md:text-base font-normal">Candolim, Goa, India</p>

      {/* Styled Interactive Map Mock with Leaflet-style visual */}
      <div className="relative w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-[#E5E3DF]">
        {/* Map tiles / SVG background */}
        <div className="absolute inset-0 bg-[#e8ece9]">
          <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d5dcda" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Water body simulation (Goa Arabian Sea coast) */}
            <path d="M 0,0 Q 150,200 120,450 L 0,450 Z" fill="#bfe1f7" opacity="0.8" />
            <text x="30" y="240" fill="#3b82f6" fontSize="13" fontWeight="bold" opacity="0.7">Arabian Sea</text>
            <text x="260" y="160" fill="#475569" fontSize="12" fontWeight="600">Candolim Beach Road</text>
            <text x="320" y="280" fill="#475569" fontSize="12" fontWeight="600">Aguada Fort Rd</text>
            {/* Roads */}
            <path d="M 120,50 L 500,420" stroke="#FFFFFF" strokeWidth="8" />
            <path d="M 120,50 L 500,420" stroke="#fcd34d" strokeWidth="4" />
            <path d="M 200,450 L 450,50" stroke="#FFFFFF" strokeWidth="6" />
            <path d="M 200,450 L 450,50" stroke="#cbd5e1" strokeWidth="3" />
          </svg>
        </div>

        {/* Center privacy circle with Airbnb marker */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Pulsing radius circle */}
            <div className="w-36 h-36 bg-[#FF385C]/20 border border-[#FF385C]/50 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 bg-[#FF385C] rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.396.096 1.768-.464 3.473-1.63 4.8-1.22 1.388-2.923 2.195-4.79 2.271-2.148.087-4.177-.735-5.914-2.316l-.58-.553-.575.549c-1.737 1.581-3.766 2.403-5.914 2.316-1.867-.076-3.57-.883-4.79-2.271-1.166-1.327-1.726-3.032-1.63-4.8.05-.917.293-1.805.96-3.396l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.327.643-3.39 2.547l-.545 1.05C10.15 10.323 6.02 18.97 5.068 21.196l-.13.315c-.567 1.353-.767 2.08-.807 2.827-.067 1.237.324 2.43 1.14 3.359.852.97 2.046 1.534 3.353 1.587 1.632.066 3.21-.564 4.582-1.777l.794-.749 2 1.884c1.372 1.213 2.95 1.843 4.582 1.777 1.307-.053 2.501-.617 3.353-1.587.816-.929 1.207-2.122 1.14-3.359-.04-.747-.24-1.474-.807-2.827l-.13-.315c-.952-2.226-5.082-10.873-6.997-14.599l-.545-1.05C18.327 3.643 17.239 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Map controls floating UI */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md border border-gray-200 p-1.5 flex flex-col gap-1 text-gray-700">
          <button type="button" className="p-1.5 hover:bg-gray-100 rounded text-base font-bold">+</button>
          <div className="h-px bg-gray-200"></div>
          <button type="button" className="p-1.5 hover:bg-gray-100 rounded text-base font-bold">−</button>
        </div>
      </div>

      <p className="text-gray-600 text-sm font-normal">
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood highlights */}
      <div className="space-y-2 pt-2">
        <h4 className="font-bold text-base text-gray-900">Neighbourhood highlights</h4>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button
          type="button"
          onClick={onShowMoreLocation}
          className="flex items-center gap-1 font-bold text-gray-900 underline text-sm hover:text-black pt-1"
        >
          <span>Show more</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
