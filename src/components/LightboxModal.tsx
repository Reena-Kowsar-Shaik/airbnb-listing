import React, { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Share2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PhotoItem } from '../data/listingData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onShare: () => void;
  onSave: () => void;
  isSaved: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onIndexChange,
  onShare,
  onSave,
  isSaved,
}) => {
  const currentPhoto = photos[currentIndex] || photos[0];

  const handleNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      onIndexChange(currentIndex + 1);
    } else {
      // Loop back to start
      onIndexChange(0);
    }
  }, [currentIndex, photos.length, onIndexChange]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    } else {
      // Loop to end
      onIndexChange(photos.length - 1);
    }
  }, [currentIndex, photos.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between select-none animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 text-white z-20">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-full transition-colors text-white text-sm font-semibold"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
          <span className="hidden sm:inline">Close</span>
        </button>

        {/* Counter */}
        <div className="text-sm font-semibold tracking-wider text-gray-200">
          {currentIndex + 1} / {photos.length}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onShare}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Share photo"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={onSave}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Save to wishlist"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-white'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Main Image Container with navigation */}
      <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 overflow-hidden">
        {/* Prev Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-all active:scale-95 shadow-lg backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Animated Image */}
        <div className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center justify-center h-full w-full"
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-all active:scale-95 shadow-lg backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info & Thumbnails Bar */}
      <div className="px-6 py-5 bg-black/80 backdrop-blur-md border-t border-white/10 z-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF385C] font-semibold block">
              {currentPhoto.categoryTitle}
            </span>
            <p className="text-white text-sm md:text-base font-medium mt-0.5">
              {currentPhoto.caption}
            </p>
          </div>

          {/* Quick thumbnail bar */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {photos.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => onIndexChange(idx)}
                className={`relative w-12 h-8 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                  currentIndex === idx
                    ? 'border-[#FF385C] scale-105 opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
