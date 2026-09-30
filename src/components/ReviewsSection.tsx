import React, { useState } from 'react';
import {
  Star,
  SprayCan as Spray,
  CheckCircle2,
  KeyRound,
  MessageSquare,
  MapPin,
  Tag,
} from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface ReviewsSectionProps {
  onShowAllReviews: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onShowAllReviews }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="reviews-section" className="py-12 border-t border-gray-200 space-y-10">
      {/* Big 4.95 Laurel Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center gap-3">
          {/* Left Leaf Wreath */}
          <svg className="w-12 h-16 text-gray-800" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M28 50C15 45 8 32 8 18C8 10 14 5 20 2" strokeLinecap="round" />
            <path d="M12 36C8 30 7 24 9 17" strokeLinecap="round" />
            <path d="M17 44C12 38 11 31 14 25" strokeLinecap="round" />
          </svg>

          <div className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
            {LISTING_DATA.rating.toFixed(2)}
          </div>

          {/* Right Leaf Wreath */}
          <svg className="w-12 h-16 text-gray-800 scale-x-[-1]" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M28 50C15 45 8 32 8 18C8 10 14 5 20 2" strokeLinecap="round" />
            <path d="M12 36C8 30 7 24 9 17" strokeLinecap="round" />
            <path d="M17 44C12 38 11 31 14 25" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-gray-900">Guest favourite</h3>
        <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <div>
          <a href="#how-reviews-work" className="text-xs font-bold underline text-gray-900 hover:text-black">
            How reviews work
          </a>
        </div>
      </div>

      {/* Ratings Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4 pt-6 border-y border-gray-100 py-8 text-left">
        {/* Overall Rating Bar */}
        <div className="col-span-2 md:col-span-1 border-r-0 md:border-r border-gray-200 pr-4">
          <div className="text-xs font-bold text-gray-900 mb-2">Overall rating</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 font-medium">5</span>
              <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[95%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 font-medium">4</span>
              <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[5%]"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 font-medium">3</span>
              <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 font-medium">2</span>
              <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 font-medium">1</span>
              <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden"></div>
            </div>
          </div>
        </div>

        {/* Cleanliness */}
        <div className="border-r border-gray-200 px-3">
          <div className="text-xs font-bold text-gray-900">Cleanliness</div>
          <div className="text-base font-bold text-gray-900 mt-1">5.0</div>
          <Spray className="w-6 h-6 text-gray-700 mt-3" />
        </div>

        {/* Accuracy */}
        <div className="border-r border-gray-200 px-3">
          <div className="text-xs font-bold text-gray-900">Accuracy</div>
          <div className="text-base font-bold text-gray-900 mt-1">5.0</div>
          <CheckCircle2 className="w-6 h-6 text-gray-700 mt-3" />
        </div>

        {/* Check-in */}
        <div className="border-r border-gray-200 px-3">
          <div className="text-xs font-bold text-gray-900">Check-in</div>
          <div className="text-base font-bold text-gray-900 mt-1">5.0</div>
          <KeyRound className="w-6 h-6 text-gray-700 mt-3" />
        </div>

        {/* Communication */}
        <div className="border-r border-gray-200 px-3">
          <div className="text-xs font-bold text-gray-900">Communication</div>
          <div className="text-base font-bold text-gray-900 mt-1">5.0</div>
          <MessageSquare className="w-6 h-6 text-gray-700 mt-3" />
        </div>

        {/* Location */}
        <div className="border-r border-gray-200 px-3">
          <div className="text-xs font-bold text-gray-900">Location</div>
          <div className="text-base font-bold text-gray-900 mt-1">4.8</div>
          <MapPin className="w-6 h-6 text-gray-700 mt-3" />
        </div>

        {/* Value */}
        <div className="px-3">
          <div className="text-xs font-bold text-gray-900">Value</div>
          <div className="text-base font-bold text-gray-900 mt-1">4.8</div>
          <Tag className="w-6 h-6 text-gray-700 mt-3" />
        </div>
      </div>

      {/* Review Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
        {LISTING_DATA.reviewTags.map((tag) => (
          <button
            key={tag.name}
            onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedTag === tag.name
                ? 'bg-black text-white border-black shadow'
                : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
            }`}
          >
            <span>{tag.emoji}</span>
            <span>{tag.name}</span>
            <span className="text-gray-400 font-normal">{tag.count}</span>
          </button>
        ))}
      </div>

      {/* Reviews Grid (6 Reviews) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {LISTING_DATA.reviews.map((rev) => {
          const isExpanded = expandedReviews[rev.id];
          const isLong = rev.content.length > 150;

          return (
            <div key={rev.id} className="space-y-3">
              {/* Author header */}
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover border border-gray-100"
                />
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{rev.author}</h4>
                  <p className="text-gray-500 text-xs">{rev.tenure}</p>
                </div>
              </div>

              {/* Rating stars & date */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-black text-black" />
                  ))}
                </div>
                <span className="font-semibold text-gray-700">· {rev.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-800 text-sm leading-relaxed">
                {isLong && !isExpanded ? `${rev.content.slice(0, 150)}...` : rev.content}
              </p>

              {isLong && (
                <button
                  type="button"
                  onClick={() => toggleExpand(rev.id)}
                  className="font-bold underline text-xs text-gray-900 hover:text-black block"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Show all reviews button */}
      <div>
        <button
          type="button"
          onClick={onShowAllReviews}
          className="border border-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 active:scale-95 transition-all text-gray-900"
        >
          Show all 19 reviews
        </button>
      </div>
    </div>
  );
};
