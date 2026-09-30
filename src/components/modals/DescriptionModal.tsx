import React from 'react';
import { X } from 'lucide-react';
import { LISTING_DATA } from '../../data/listingData';

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DescriptionModal: React.FC<DescriptionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          <h3 className="text-lg font-bold text-gray-900">About this space</h3>
          <div className="w-8"></div>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto space-y-6 text-gray-800 text-sm md:text-base leading-relaxed flex-1">
          {LISTING_DATA.description.full.map((paragraph, idx) => (
            <p key={idx} className={paragraph.startsWith('The Space:') ? 'font-bold text-lg text-gray-900 pt-2' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
