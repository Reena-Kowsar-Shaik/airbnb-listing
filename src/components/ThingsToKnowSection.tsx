import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

export const ThingsToKnowSection: React.FC = () => {
  return (
    <div className="py-10 border-t border-gray-200 space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Things to know</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* House rules */}
        <div className="space-y-3">
          <h4 className="font-bold text-base text-gray-900">House rules</h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div>Check-in after 2:00 pm</div>
            <div>Checkout before 11:00 am</div>
            <div>3 guests maximum</div>
          </div>
          <button type="button" className="font-bold underline text-sm text-gray-900 hover:text-black flex items-center gap-1 pt-1">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Safety & property */}
        <div className="space-y-3">
          <h4 className="font-bold text-base text-gray-900">Safety & property</h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div>Carbon monoxide alarm not reported</div>
            <div>Smoke alarm not reported</div>
            <div>Exterior security cameras on property</div>
          </div>
          <button type="button" className="font-bold underline text-sm text-gray-900 hover:text-black flex items-center gap-1 pt-1">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cancellation policy */}
        <div className="space-y-3">
          <h4 className="font-bold text-base text-gray-900">Cancellation policy</h4>
          <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <div>{LISTING_DATA.cancellationPolicy.summary}</div>
            <div className="text-gray-500 text-xs">{LISTING_DATA.cancellationPolicy.details}</div>
          </div>
          <button type="button" className="font-bold underline text-sm text-gray-900 hover:text-black flex items-center gap-1 pt-1">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
