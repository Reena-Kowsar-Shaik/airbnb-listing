import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { LISTING_DATA } from '../../data/listingData';
import { renderAmenityIcon } from '../AmenitiesSection';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = [
    'Bathroom',
    'Bedroom & laundry',
    'Entertainment',
    'Heating & cooling',
    'Home safety',
    'Internet & office',
    'Kitchen & dining',
    'Outdoor',
    'Parking & facilities',
    'Services'
  ];

  const filteredAmenities = LISTING_DATA.amenities.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-modal border border-gray-100 relative overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-bold text-gray-900">What this place offers</h3>
          <div className="w-8"></div>
        </div>

        {/* Search Bar */}
        <div className="p-6 pb-2">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search amenities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Scrollable Amenities Content */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {categories.map((cat) => {
            const itemsInCat = filteredAmenities.filter((a) => a.category === cat);
            if (itemsInCat.length === 0) return null;

            return (
              <div key={cat} className="space-y-4">
                <h4 className="font-bold text-base text-gray-900 border-b border-gray-100 pb-2">
                  {cat}
                </h4>
                <div className="space-y-4">
                  {itemsInCat.map((amenity, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-gray-800">
                      <div className="mt-0.5">
                        {renderAmenityIcon(amenity.iconName, "w-5 h-5 text-gray-700")}
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${!amenity.available ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                          {amenity.name}
                        </div>
                        {amenity.subtext && (
                          <div className="text-xs text-gray-500 mt-0.5">{amenity.subtext}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
