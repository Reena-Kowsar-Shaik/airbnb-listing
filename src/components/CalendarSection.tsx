import React from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

interface CalendarSectionProps {
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  onSelectDate: (dateStr: string) => void;
  onClearDates: () => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({
  checkIn,
  checkOut,
  onSelectDate,
  onClearDates,
}) => {
  // Days helper for Oct 2026 and Nov 2026
  // October 2026 starts on Thursday (offset 4, days: 31)
  // November 2026 starts on Sunday (offset 0, days: 30)

  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  const isSelected = (year: number, month: number, day: number) => {
    const formatted = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return formatted === checkIn || formatted === checkOut;
  };

  const isInRange = (year: number, month: number, day: number) => {
    if (!checkIn || !checkOut) return false;
    const formatted = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return formatted > checkIn && formatted < checkOut;
  };

  const isCheckIn = (year: number, month: number, day: number) => {
    const formatted = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return formatted === checkIn;
  };

  const isCheckOut = (year: number, month: number, day: number) => {
    const formatted = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return formatted === checkOut;
  };

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="py-8 space-y-6">
      {/* Title & Subtitle */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          {nights > 0 ? `${nights} nights in Candolim` : 'Select check-in date'}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          {checkIn && checkOut
            ? `${formatDateDisplay(checkIn)} - ${formatDateDisplay(checkOut)}`
            : 'Add your travel dates for exact pricing'}
        </p>
      </div>

      {/* 2 Month Calendar View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
        {/* October 2026 */}
        <div>
          <div className="flex items-center justify-between font-bold text-base text-gray-900 mb-4 px-2">
            <button type="button" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <span>October 2026</span>
            <div className="w-5 md:hidden"></div>
          </div>

          <div className="grid grid-cols-7 text-center text-xs text-gray-500 font-semibold mb-2">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          <div className="grid grid-cols-7 text-center text-sm gap-y-1 font-semibold">
            {/* 4 empty days before Oct 1 (Thu) */}
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>
            <div className="h-10"></div>

            {octDays.map((day) => {
              const selected = isSelected(2026, 10, day);
              const inRange = isInRange(2026, 10, day);
              const start = isCheckIn(2026, 10, day);
              const end = isCheckOut(2026, 10, day);

              return (
                <div
                  key={`oct-${day}`}
                  className={`h-10 flex items-center justify-center relative ${
                    inRange ? 'bg-gray-100' : ''
                  } ${start ? 'rounded-l-full bg-gray-100' : ''} ${
                    end ? 'rounded-r-full bg-gray-100' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectDate(`2026-10-${String(day).padStart(2, '0')}`)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      selected
                        ? 'bg-black text-white font-bold shadow'
                        : 'text-gray-800 hover:border hover:border-black'
                    }`}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* November 2026 */}
        <div>
          <div className="flex items-center justify-between font-bold text-base text-gray-900 mb-4 px-2">
            <div className="w-5 hidden md:block"></div>
            <span>November 2026</span>
            <button type="button" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs text-gray-500 font-semibold mb-2">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          <div className="grid grid-cols-7 text-center text-sm gap-y-1 font-semibold">
            {novDays.map((day) => {
              const selected = isSelected(2026, 11, day);
              const inRange = isInRange(2026, 11, day);
              const start = isCheckIn(2026, 11, day);
              const end = isCheckOut(2026, 11, day);

              return (
                <div
                  key={`nov-${day}`}
                  className={`h-10 flex items-center justify-center relative ${
                    inRange ? 'bg-gray-100' : ''
                  } ${start ? 'rounded-l-full bg-gray-100' : ''} ${
                    end ? 'rounded-r-full bg-gray-100' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectDate(`2026-11-${String(day).padStart(2, '0')}`)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      selected
                        ? 'bg-black text-white font-bold shadow'
                        : 'text-gray-800 hover:border hover:border-black'
                    }`}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer controls */}
      <div className="flex items-center justify-between pt-2 max-w-2xl">
        <button
          type="button"
          aria-label="Keyboard Shortcuts"
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
        >
          <Keyboard className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onClearDates}
          className="font-bold underline text-sm text-gray-900 hover:text-black transition-colors"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};
