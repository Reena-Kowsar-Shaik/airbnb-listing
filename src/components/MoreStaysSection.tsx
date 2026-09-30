import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

export const MoreStaysSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const stays = LISTING_DATA.moreStays;

  return (
    <div className="py-12 border-t border-gray-200 space-y-6">
      {/* Header with Title and Pagination Arrows */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">More stays nearby</h3>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">
            {currentPage} / {totalPages}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              className="p-2 rounded-full border border-gray-300 hover:border-black disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(2)}
              className="p-2 rounded-full border border-gray-300 hover:border-black disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Stay Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {stays.map((stay) => (
          <div key={stay.id} className="group cursor-pointer space-y-2">
            {/* Image container */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                type="button"
                className="absolute top-3 right-3 p-1.5 rounded-full hover:scale-110 transition-transform text-white"
              >
                <Heart className="w-5 h-5 fill-black/30 stroke-white stroke-2" />
              </button>
            </div>

            {/* Info */}
            <div className="text-xs">
              <div className="flex items-center justify-between font-bold text-gray-900">
                <span className="truncate">{stay.location}</span>
                <span className="flex items-center gap-1 flex-shrink-0">
                  <Star className="w-3 h-3 fill-black text-black" />
                  {stay.rating}
                </span>
              </div>
              <p className="text-gray-600 line-clamp-1 font-medium mt-0.5">{stay.title}</p>
              <p className="text-gray-500">{stay.dates}</p>
              <div className="pt-1 text-gray-900">
                <span className="font-bold">₹{stay.price.toLocaleString('en-IN')}</span> night
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
