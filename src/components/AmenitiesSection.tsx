import React from 'react';
import {
  Utensils,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  Dog,
  Cctv,
  AlertTriangle,
  BellOff,
  Wind,
  Fan,
  Tv,
  Refrigerator,
  ShowerHead,
  Shirt,
  Sun,
  Building2,
} from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface AmenitiesSectionProps {
  onShowAllAmenities: () => void;
}

export const renderAmenityIcon = (iconName: string, className = "w-6 h-6 text-gray-800") => {
  switch (iconName) {
    case 'Utensils': return <Utensils className={className} />;
    case 'Wifi': return <Wifi className={className} />;
    case 'Laptop': return <Laptop className={className} />;
    case 'Car': return <Car className={className} />;
    case 'Waves': return <Waves className={className} />;
    case 'Bath': return <Bath className={className} />;
    case 'Dog': return <Dog className={className} />;
    case 'Cctv': return <Cctv className={className} />;
    case 'AlertTriangle': return <AlertTriangle className={className} />;
    case 'BellOff': return <BellOff className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Fan': return <Fan className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Refrigerator': return <Refrigerator className={className} />;
    case 'ShowerHead': return <ShowerHead className={className} />;
    case 'Shirt': return <Shirt className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Building2': return <Building2 className={className} />;
    default: return <Utensils className={className} />;
  }
};

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onShowAllAmenities }) => {
  const topAmenities = LISTING_DATA.amenities.slice(0, 10);

  return (
    <div id="amenities-section" className="py-8 space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">What this place offers</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {topAmenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-4 text-gray-800">
            <div className="flex-shrink-0">
              {renderAmenityIcon(amenity.iconName, "w-6 h-6 stroke-[1.5]")}
            </div>
            <span
              className={`text-base ${
                !amenity.available ? 'line-through text-gray-400' : 'text-gray-900'
              }`}
            >
              {amenity.name}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={onShowAllAmenities}
          className="border border-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 active:scale-95 transition-all text-gray-900"
        >
          Show all 50 amenities
        </button>
      </div>
    </div>
  );
};
