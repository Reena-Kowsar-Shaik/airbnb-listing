import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface StickyNavProps {
  onReserveClick: () => void;
  priceFormatted: string;
  rating: number;
  reviewsCount: number;
}

export const StickyNav: React.FC<StickyNavProps> = ({
  onReserveClick,
  priceFormatted,
  rating,
  reviewsCount,
}) => {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'photos' | 'amenities' | 'reviews' | 'location'>('photos');

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero images ~ 550px
      if (window.scrollY > 550) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Update active tab based on section scroll positions
      const amenitiesEl = document.getElementById('amenities-section');
      const reviewsEl = document.getElementById('reviews-section');
      const locationEl = document.getElementById('location-section');

      const scrollPos = window.scrollY + 120;

      if (locationEl && scrollPos >= locationEl.offsetTop) {
        setActiveTab('location');
      } else if (reviewsEl && scrollPos >= reviewsEl.offsetTop) {
        setActiveTab('reviews');
      } else if (amenitiesEl && scrollPos >= amenitiesEl.offsetTop) {
        setActiveTab('amenities');
      } else {
        setActiveTab('photos');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const scrollTo = (id: string, tab: 'photos' | 'amenities' | 'reviews' | 'location') => {
    setActiveTab(tab);
    if (tab === 'photos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm animate-in fade-in slide-in-from-top duration-200">
      <div className="max-w-[1120px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-6 h-full text-sm font-semibold text-gray-800">
          <button
            type="button"
            onClick={() => scrollTo('hero-photos', 'photos')}
            className={`h-full border-b-2 transition-colors px-1 ${
              activeTab === 'photos' ? 'border-black text-black' : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Photos
          </button>
          <button
            type="button"
            onClick={() => scrollTo('amenities-section', 'amenities')}
            className={`h-full border-b-2 transition-colors px-1 ${
              activeTab === 'amenities' ? 'border-black text-black' : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Amenities
          </button>
          <button
            type="button"
            onClick={() => scrollTo('reviews-section', 'reviews')}
            className={`h-full border-b-2 transition-colors px-1 ${
              activeTab === 'reviews' ? 'border-black text-black' : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Reviews
          </button>
          <button
            type="button"
            onClick={() => scrollTo('location-section', 'location')}
            className={`h-full border-b-2 transition-colors px-1 ${
              activeTab === 'location' ? 'border-black text-black' : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Location
          </button>
        </nav>

        {/* Right CTA summary */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-base font-bold text-gray-900">
              {priceFormatted} <span className="text-xs font-normal text-gray-600">for 5 nights</span>
            </div>
            <div className="flex items-center justify-end gap-1 text-xs text-gray-700 font-semibold">
              <Star className="w-3 h-3 fill-black text-black" />
              <span>{rating.toFixed(2)}</span>
              <span className="text-gray-400">·</span>
              <span className="underline cursor-pointer">{reviewsCount} reviews</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onReserveClick}
            className="btn-reserve-gradient text-white font-semibold px-6 py-3 rounded-lg text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};
