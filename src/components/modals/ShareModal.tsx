import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Mail } from 'lucide-react';
import { LISTING_DATA } from '../../data/listingData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-modal border border-gray-100 relative">
        <button
          type="button"
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors absolute top-5 left-5 text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
          Share this place
        </h3>

        {/* Listing preview */}
        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-200 mb-6">
          <img
            src={LISTING_DATA.photos[0].url}
            alt={LISTING_DATA.title}
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="text-xs">
            <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{LISTING_DATA.title}</h4>
            <p className="text-gray-500 mt-0.5">{LISTING_DATA.subtitle}</p>
            <p className="font-semibold text-gray-800 mt-1">★ {LISTING_DATA.rating} · {LISTING_DATA.reviewCount} reviews</p>
          </div>
        </div>

        {/* Share buttons grid */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-semibold text-sm text-gray-800 transition-colors"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-600 stroke-[3]" /> : <Copy className="w-5 h-5 text-gray-700" />}
            <span>{copied ? 'Link copied!' : 'Copy Link'}</span>
          </button>

          <button
            type="button"
            onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(LISTING_DATA.title + ' ' + window.location.href)}`, '_blank')}
            className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-semibold text-sm text-gray-800 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-emerald-500" />
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => window.open(`mailto:?subject=${encodeURIComponent(LISTING_DATA.title)}&body=${encodeURIComponent(window.location.href)}`)}
            className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-semibold text-sm text-gray-800 transition-colors"
          >
            <Mail className="w-5 h-5 text-red-500" />
            <span>Email</span>
          </button>

          <button
            type="button"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(LISTING_DATA.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
            className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-semibold text-sm text-gray-800 transition-colors"
          >
            <span className="font-bold text-base">𝕏</span>
            <span>Twitter (X)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
