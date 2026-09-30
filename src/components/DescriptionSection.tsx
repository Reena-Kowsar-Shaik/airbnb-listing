import React from 'react';
import { Flame, Wind, DoorClosed, ChevronRight } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface DescriptionSectionProps {
  onShowMoreDescription: () => void;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  onShowMoreDescription,
}) => {
  return (
    <div className="space-y-6">
      {/* Property Subtitle & Specs */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          {LISTING_DATA.type}
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-1">
          {LISTING_DATA.subtitle}
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Host Snippet */}
      <div className="flex items-center gap-4 py-1">
        <div className="relative">
          <img
            src={LISTING_DATA.host.avatar}
            alt={LISTING_DATA.host.name}
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div className="absolute -bottom-1 -right-1 bg-black text-white p-0.5 rounded-full text-[10px]">
            ★
          </div>
        </div>
        <div>
          <h3 className="font-bold text-base text-gray-900">
            Hosted by {LISTING_DATA.host.name}
          </h3>
          <p className="text-gray-500 text-sm">
            {LISTING_DATA.host.yearsHosting} years hosting
          </p>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Highlights */}
      <div className="space-y-6 py-2">
        <div className="flex items-start gap-5">
          <Flame className="w-6 h-6 text-gray-800 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base text-gray-900">Outdoor entertainment</h4>
            <p className="text-gray-500 text-sm">The pool and alfresco dining are great for summer trips.</p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <Wind className="w-6 h-6 text-gray-800 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base text-gray-900">Designed for staying cool</h4>
            <p className="text-gray-500 text-sm">Beat the heat with the A/C and ceiling fan.</p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <DoorClosed className="w-6 h-6 text-gray-800 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base text-gray-900">Self check-in</h4>
            <p className="text-gray-500 text-sm">You can check in with the building staff.</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Translated Banner */}
      <div className="bg-gray-100/80 rounded-xl p-4 text-sm text-gray-700 flex items-center justify-between">
        <span>Some info has been automatically translated.</span>
        <button type="button" className="font-bold underline text-gray-900 hover:text-black">
          Show original
        </button>
      </div>

      {/* Description Text */}
      <div className="space-y-3">
        <p className="text-gray-800 leading-relaxed text-sm md:text-base line-clamp-3">
          {LISTING_DATA.description.short}
        </p>

        <button
          type="button"
          onClick={onShowMoreDescription}
          className="flex items-center gap-1 font-bold text-gray-900 underline text-base hover:text-black transition-colors pt-1"
        >
          <span>Show more</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
