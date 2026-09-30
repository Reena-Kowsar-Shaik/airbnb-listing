import React from 'react';
import { Bed, Armchair } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

export const SleepingArrangements: React.FC = () => {
  return (
    <div className="py-6 space-y-5">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Where you'll sleep</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {LISTING_DATA.sleepingArrangements.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:border-gray-300 transition-colors bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-gray-100">
              <img
                src={item.image}
                alt={item.room}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 text-gray-800">
                {item.room.toLowerCase().includes('bedroom') ? (
                  <Bed className="w-5 h-5" />
                ) : (
                  <Armchair className="w-5 h-5" />
                )}
                <h4 className="font-bold text-base text-gray-900">{item.room}</h4>
              </div>
              <p className="text-gray-500 text-sm">{item.bed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
