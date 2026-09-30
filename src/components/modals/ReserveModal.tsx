import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';
import { LISTING_DATA } from '../../data/listingData';

interface ReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkIn: string;
  checkOut: string;
  discountClaimed: boolean;
}

export const ReserveModal: React.FC<ReserveModalProps> = ({
  isOpen,
  onClose,
  checkIn,
  checkOut,
  discountClaimed,
}) => {
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 5;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 5;
  };

  const nights = calculateNights();
  const baseRate = LISTING_DATA.nightlyPrice;
  const baseTotal = baseRate * nights;
  const discountAmount = discountClaimed ? Math.round(baseTotal * 0.10) : 0;
  const cleaningFee = LISTING_DATA.cleaningFee;
  const serviceFee = LISTING_DATA.serviceFee;
  const total = baseTotal - discountAmount + cleaningFee + serviceFee;

  const handleConfirm = () => {
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-modal border border-gray-100 relative overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-bold text-gray-900">
            {confirmed ? 'Reservation Confirmed!' : 'Review & Confirm Reservation'}
          </h3>
          <div className="w-8"></div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <h4 className="text-2xl font-bold text-gray-900">
                You're all set for Candolim! 🎉
              </h4>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                A confirmation has been prepared for {LISTING_DATA.title}. Your host <span className="font-semibold text-gray-900">Mirashya Homes</span> has been notified of your stay.
              </p>

              {/* Trip details box */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-left text-sm space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-700" />
                  <div>
                    <span className="font-semibold text-gray-900">{checkIn} to {checkOut}</span>
                    <span className="text-gray-500 text-xs block">({nights} nights)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  <div>
                    <span className="font-semibold text-gray-900">Candolim, Goa, India</span>
                    <span className="text-gray-500 text-xs block">Exact address will be sent to your inbox</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-gray-700" />
                  <div>
                    <span className="font-semibold text-gray-900">Total Paid: ₹{total.toLocaleString('en-IN')}</span>
                    <span className="text-emerald-700 text-xs block font-medium">Free cancellation until 17 October</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-black text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Close & Return to Listing
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Listing preview */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                <img
                  src={LISTING_DATA.photos[0].url}
                  alt={LISTING_DATA.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{LISTING_DATA.title}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{LISTING_DATA.type}</p>
                  <p className="font-bold text-gray-800 text-xs mt-1">★ {LISTING_DATA.rating} (19 reviews)</p>
                </div>
              </div>

              {/* Booking breakdown */}
              <div className="space-y-3 border-y border-gray-100 py-4 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>₹{baseRate.toLocaleString('en-IN')} x {nights} nights</span>
                  <span>₹{baseTotal.toLocaleString('en-IN')}</span>
                </div>
                {discountClaimed && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>10% Promo discount</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>₹{cleaningFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Airbnb service fee</span>
                  <span>₹{serviceFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-bold text-base text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total (INR)</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Your booking is protected by Airbnb AirCover.</span>
              </div>

              {/* Confirm Button */}
              <button
                type="button"
                onClick={handleConfirm}
                className="btn-reserve-gradient w-full text-white font-bold py-4 rounded-xl text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Confirm & Pay ₹{total.toLocaleString('en-IN')}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
