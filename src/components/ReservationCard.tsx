import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Minus, Plus, Tag, Check, Sparkles } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface ReservationCardProps {
  checkIn: string;
  checkOut: string;
  onReserve: () => void;
  discountClaimed: boolean;
  onToggleDiscount: () => void;
}

export const ReservationCard: React.FC<ReservationCardProps> = ({
  checkIn,
  checkOut,
  onReserve,
  discountClaimed,
  onToggleDiscount,
}) => {
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  // Calculate nights
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
  const totalBeforeTaxes = baseTotal - discountAmount + cleaningFee + serviceFee;

  const totalGuests = adults + children;

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return 'Add date';
    const d = new Date(dateStr);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${month}/${day}/${d.getFullYear()}`;
  };

  return (
    <div className="sticky top-28 space-y-4">
      {/* 10% Promo Banner */}
      <div className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
            <Tag className="w-5 h-5 fill-emerald-600 text-emerald-600" />
          </div>
          <div className="text-xs">
            <div className="font-semibold text-gray-900">Get 10% off your next stay.</div>
            <a href="#terms" className="underline text-gray-500 hover:text-black">Terms apply</a>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggleDiscount}
          className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
            discountClaimed
              ? 'bg-emerald-600 text-white flex items-center gap-1 shadow-sm'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          {discountClaimed ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Applied</span>
            </>
          ) : (
            'Claim'
          )}
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className="border border-gray-200 rounded-3xl p-6 bg-white shadow-airbnb space-y-6">
        {/* Price Header */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ₹{(baseTotal - discountAmount).toLocaleString('en-IN')}
            </span>
            <span className="text-gray-600 text-base font-normal"> for {nights} nights</span>
          </div>
          {discountClaimed && (
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
              10% OFF
            </span>
          )}
        </div>

        {/* Date & Guests Picker Box */}
        <div className="border border-gray-400 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-black">
          {/* Check-in / Checkout split */}
          <div className="grid grid-cols-2 divide-x divide-gray-400 border-b border-gray-400 text-left">
            <div className="p-3 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="block text-[10px] font-extrabold uppercase text-gray-800 tracking-wider">
                CHECK-IN
              </span>
              <span className="text-xs md:text-sm text-gray-700 font-medium">
                {formatDateDisplay(checkIn)}
              </span>
            </div>

            <div className="p-3 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="block text-[10px] font-extrabold uppercase text-gray-800 tracking-wider">
                CHECKOUT
              </span>
              <span className="text-xs md:text-sm text-gray-700 font-medium">
                {formatDateDisplay(checkOut)}
              </span>
            </div>
          </div>

          {/* Guests Dropdown Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setGuestsOpen(!guestsOpen)}
              className="w-full p-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <div>
                <span className="block text-[10px] font-extrabold uppercase text-gray-800 tracking-wider">
                  GUESTS
                </span>
                <span className="text-xs md:text-sm text-gray-800 font-medium">
                  {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
                  {infants > 0 ? `, ${infants} infant${infants > 1 ? 's' : ''}` : ''}
                  {pets > 0 ? `, ${pets} pet${pets > 1 ? 's' : ''}` : ''}
                </span>
              </div>
              {guestsOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Guests Selector Dropdown Popover */}
            {guestsOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-modal border border-gray-200 p-5 space-y-4 z-30">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-gray-900">Adults</div>
                    <div className="text-xs text-gray-500">Age 13+</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults(adults - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center text-sm font-semibold">{adults}</span>
                    <button
                      type="button"
                      disabled={totalGuests >= 3}
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-gray-900">Children</div>
                    <div className="text-xs text-gray-500">Ages 2–12</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren(children - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center text-sm font-semibold">{children}</span>
                    <button
                      type="button"
                      disabled={totalGuests >= 3}
                      onClick={() => setChildren(children + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-gray-900">Infants</div>
                    <div className="text-xs text-gray-500">Under 2</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={infants <= 0}
                      onClick={() => setInfants(infants - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center text-sm font-semibold">{infants}</span>
                    <button
                      type="button"
                      disabled={infants >= 2}
                      onClick={() => setInfants(infants + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Pets */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-gray-900">Pets</div>
                    <div className="text-xs text-gray-500">Bringing a service animal?</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={pets <= 0}
                      onClick={() => setPets(pets - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center text-sm font-semibold">{pets}</span>
                    <button
                      type="button"
                      disabled={pets >= 2}
                      onClick={() => setPets(pets + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black disabled:opacity-30 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                  This place has a maximum of 3 guests, not including infants. Pets are allowed.
                </div>

                <button
                  type="button"
                  onClick={() => setGuestsOpen(false)}
                  className="w-full text-right text-xs font-bold underline text-black hover:opacity-75 pt-1"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Free cancellation pill */}
        <div className="bg-gray-100/90 text-gray-700 text-xs py-2 px-3 rounded-lg text-center font-normal">
          Free cancellation before <span className="font-bold text-gray-900">17 October</span>
        </div>

        {/* Reserve Button */}
        <button
          type="button"
          onClick={onReserve}
          className="btn-reserve-gradient w-full text-white font-bold py-3.5 rounded-xl text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Reserve</span>
        </button>

        <p className="text-center text-xs text-gray-500">
          You won't be charged yet
        </p>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-2 text-sm text-gray-700">
          <div className="flex justify-between items-center">
            <span className="underline">₹{baseRate.toLocaleString('en-IN')} x {nights} nights</span>
            <span>₹{baseTotal.toLocaleString('en-IN')}</span>
          </div>

          {discountClaimed && (
            <div className="flex justify-between items-center text-emerald-700 font-medium">
              <span>10% promotional discount</span>
              <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="underline">Cleaning fee</span>
            <span>₹{cleaningFee.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="underline">Airbnb service fee</span>
            <span>₹{serviceFee.toLocaleString('en-IN')}</span>
          </div>

          <hr className="border-gray-200 my-2" />

          <div className="flex justify-between items-center font-bold text-base text-gray-900 pt-1">
            <span>Total before taxes</span>
            <span>₹{totalBeforeTaxes.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
