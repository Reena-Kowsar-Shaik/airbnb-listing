import React from 'react';
import { Star } from 'lucide-react';

interface GuestFavoriteBadgeProps {
  rating: number;
  reviewsCount: number;
}

export const GuestFavoriteBadge: React.FC<GuestFavoriteBadgeProps> = ({
  rating,
  reviewsCount,
}) => {
  return (
    <div className="border border-gray-200 rounded-3xl p-6 my-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-white hover:border-gray-300 transition-colors">
      {/* Left: Laurel Wreath & Title */}
      <div className="flex items-center gap-4">
        {/* Laurel Wreath SVG */}
        <div className="flex items-center">
          <svg className="w-10 h-10 text-gray-900" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 28C8.5 25 6 20 6 14C6 8 10 4 14 3" strokeLinecap="round" />
            <path d="M7 21C5 18 5 14 6 10" strokeLinecap="round" />
            <path d="M9 25C7 22 7 18 8 15" strokeLinecap="round" />
            <path d="M20 28C23.5 25 26 20 26 14C26 8 22 4 18 3" strokeLinecap="round" />
            <path d="M25 21C27 18 27 14 26 10" strokeLinecap="round" />
            <path d="M23 25C25 22 25 18 24 15" strokeLinecap="round" />
          </svg>
          <div className="ml-2">
            <div className="font-bold text-lg text-gray-900 leading-tight">Guest</div>
            <div className="font-bold text-lg text-gray-900 leading-tight">favourite</div>
          </div>
        </div>

        {/* Center text description */}
        <div className="text-gray-800 text-sm md:text-base font-normal max-w-xs pl-2 border-l border-gray-200">
          One of the most loved homes on Airbnb, according to guests
        </div>
      </div>

      {/* Right: Big Rating & Star count */}
      <div className="flex items-center gap-8 text-center">
        <div>
          <div className="text-xl md:text-2xl font-bold text-gray-900">{rating.toFixed(2)}</div>
          <div className="flex items-center justify-center gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-black text-black" />
            ))}
          </div>
        </div>

        <div className="border-l border-gray-200 pl-8">
          <div className="text-xl md:text-2xl font-bold text-gray-900 underline cursor-pointer">{reviewsCount}</div>
          <div className="text-xs text-gray-700 font-medium">Reviews</div>
        </div>
      </div>
    </div>
  );
};
