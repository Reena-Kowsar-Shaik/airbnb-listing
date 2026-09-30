import React, { useEffect, useState } from 'react';
import { ArrowLeft, Heart, Share, Sparkles } from 'lucide-react';
import type { PhotoItem } from '../data/listingData';

interface PhotoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  onOpenLightbox: (photoIndex: number) => void;
  onShare: () => void;
  onSave: () => void;
  isSaved: boolean;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  isOpen,
  onClose,
  photos,
  onOpenLightbox,
  onShare,
  onSave,
  isSaved,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All photos' },
    { id: 'living', label: 'Living area' },
    { id: 'jacuzzi', label: 'Private Jacuzzi & Patio' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'kitchen', label: 'Kitchen & Dining' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'exterior', label: 'Exterior & Pool' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-in fade-in duration-200">
      {/* Top Floating Header */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2 text-gray-800 font-semibold text-sm"
          aria-label="Back to listing"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back</span>
        </button>

        {/* Room Filter Pills */}
        <div className="hidden lg:flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onShare}
            className="flex items-center gap-2 text-xs font-semibold text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors underline"
          >
            <Share className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button
            type="button"
            onClick={onSave}
            className="flex items-center gap-2 text-xs font-semibold text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors underline"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-gray-800'
              }`}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Main Photo Gallery Content */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Photo tour</h2>
            <p className="text-gray-500 text-sm mt-1">
              Showing {filteredPhotos.length} photos of Romantic Jacuzzi 1BHK Candolim
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs bg-rose-50 text-rose-700 font-medium px-3 py-1.5 rounded-full border border-rose-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Click any photo to view in high resolution</span>
          </div>
        </div>

        {/* Photo Feed */}
        <div className="space-y-12">
          {filteredPhotos.map((photo) => {
            const actualIndex = photos.findIndex((p) => p.id === photo.id);
            return (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(actualIndex)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden bg-gray-200">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                    {photo.categoryTitle}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                    {actualIndex + 1} / {photos.length}
                  </div>
                </div>

                <div className="p-4 md:p-5 bg-white flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">{photo.categoryTitle}</h3>
                    <p className="text-gray-600 text-sm mt-0.5">{photo.caption}</p>
                  </div>
                  <span className="text-xs text-airbnb-brand font-semibold group-hover:underline">
                    Expand photo →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
