import React from 'react';
import { LayoutGrid } from 'lucide-react';
import type { PhotoItem } from '../data/listingData';

interface HeroGalleryProps {
  photos: PhotoItem[];
  onOpenPhotoTour: () => void;
  onOpenLightbox: (index: number) => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({
  photos,
  onOpenPhotoTour,
  onOpenLightbox,
}) => {
  const heroPhotos = photos.slice(0, 5);

  return (
    <div id="hero-photos" className="relative mt-4">
      {/* 5-Photo Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[340px] md:h-[460px] rounded-2xl overflow-hidden">
        {/* Main Large Left Photo (Col 1-2, Row 1-2) */}
        {heroPhotos[0] && (
          <div
            onClick={() => onOpenLightbox(0)}
            className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden group bg-gray-100"
          >
            <img
              src={heroPhotos[0].url}
              alt={heroPhotos[0].caption}
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        {/* Top Middle Photo (Col 3, Row 1) */}
        {heroPhotos[1] && (
          <div
            onClick={() => onOpenLightbox(1)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group bg-gray-100"
          >
            <img
              src={heroPhotos[1].url}
              alt={heroPhotos[1].caption}
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        {/* Top Right Photo (Col 4, Row 1) */}
        {heroPhotos[2] && (
          <div
            onClick={() => onOpenLightbox(2)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group bg-gray-100"
          >
            <img
              src={heroPhotos[2].url}
              alt={heroPhotos[2].caption}
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        {/* Bottom Middle Photo (Col 3, Row 2) */}
        {heroPhotos[3] && (
          <div
            onClick={() => onOpenLightbox(3)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group bg-gray-100"
          >
            <img
              src={heroPhotos[3].url}
              alt={heroPhotos[3].caption}
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        {/* Bottom Right Photo (Col 4, Row 2) */}
        {heroPhotos[4] && (
          <div
            onClick={() => onOpenLightbox(4)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group bg-gray-100"
          >
            <img
              src={heroPhotos[4].url}
              alt={heroPhotos[4].caption}
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}
      </div>

      {/* "Show all photos" Button */}
      <button
        type="button"
        onClick={onOpenPhotoTour}
        className="absolute bottom-6 right-6 flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg border border-black font-semibold text-sm shadow-md hover:bg-gray-100 active:scale-95 transition-all z-10"
      >
        <LayoutGrid className="w-4 h-4" />
        <span>Show all photos</span>
      </button>
    </div>
  );
};
