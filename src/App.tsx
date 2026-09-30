import { useState } from 'react';
import { Share, Heart } from 'lucide-react';
import { LISTING_DATA } from './data/listingData';
import { Navbar } from './components/Navbar';
import { StickyNav } from './components/StickyNav';
import { HeroGallery } from './components/HeroGallery';
import { GuestFavoriteBadge } from './components/GuestFavoriteBadge';
import { DescriptionSection } from './components/DescriptionSection';
import { SleepingArrangements } from './components/SleepingArrangements';
import { AmenitiesSection } from './components/AmenitiesSection';
import { CalendarSection } from './components/CalendarSection';
import { ReservationCard } from './components/ReservationCard';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { HostSection } from './components/HostSection';
import { ThingsToKnowSection } from './components/ThingsToKnowSection';
import { MoreStaysSection } from './components/MoreStaysSection';
import { Footer } from './components/Footer';

// Modals & Overlays
import { PhotoTourModal } from './components/PhotoTourModal';
import { LightboxModal } from './components/LightboxModal';
import { ShareModal } from './components/modals/ShareModal';
import { AmenitiesModal } from './components/modals/AmenitiesModal';
import { DescriptionModal } from './components/modals/DescriptionModal';
import { ReserveModal } from './components/modals/ReserveModal';

export function App() {
  // Modal / View States
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);
  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  // Interaction States
  const [isSaved, setIsSaved] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [discountClaimed, setDiscountClaimed] = useState(false);

  // Date States (Defaults: 18 Oct 2026 – 23 Oct 2026)
  const [checkIn, setCheckIn] = useState(LISTING_DATA.defaultDates.checkIn);
  const [checkOut, setCheckOut] = useState(LISTING_DATA.defaultDates.checkOut);

  // Handle Save / Wishlist
  const handleToggleSave = () => {
    const nextSaved = !isSaved;
    setIsSaved(nextSaved);
    if (nextSaved) {
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 3000);
    }
  };

  // Lightbox Open handler
  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Date Selection handler in calendar
  const handleSelectDate = (dateStr: string) => {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(dateStr);
      setCheckOut('');
    } else if (checkIn && !checkOut) {
      if (dateStr < checkIn) {
        setCheckIn(dateStr);
      } else {
        setCheckOut(dateStr);
      }
    }
  };

  const handleClearDates = () => {
    setCheckIn('');
    setCheckOut('');
  };

  // Calculate pricing
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
  const formattedPrice = `₹${(baseTotal - discountAmount).toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      {/* Top Navbar */}
      <Navbar onSearchClick={() => {}} />

      {/* Sticky In-Page Navigation Bar on Scroll */}
      <StickyNav
        onReserveClick={() => setReserveModalOpen(true)}
        priceFormatted={formattedPrice}
        rating={LISTING_DATA.rating}
        reviewsCount={LISTING_DATA.reviewCount}
      />

      {/* Main Container */}
      <main className="max-w-[1120px] mx-auto px-6 pt-6">
        {/* Title and Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl md:text-[26px] font-bold text-gray-900 leading-tight">
            {LISTING_DATA.title}
          </h1>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={() => setShareModalOpen(true)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors underline"
            >
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>

            <button
              type="button"
              onClick={handleToggleSave}
              className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors underline"
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

        {/* Hero Photo Gallery (5-Photo Grid) */}
        <HeroGallery
          photos={LISTING_DATA.photos}
          onOpenPhotoTour={() => setPhotoTourOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8 items-start">
          {/* Left Main Content Column (Span 2) */}
          <div className="lg:col-span-2 space-y-2">
            {/* Guest Favorite Laurel Badge */}
            <GuestFavoriteBadge
              rating={LISTING_DATA.rating}
              reviewsCount={LISTING_DATA.reviewCount}
            />

            {/* Description, Host snippet, & Highlights */}
            <DescriptionSection
              onShowMoreDescription={() => setDescriptionModalOpen(true)}
            />

            <hr className="border-gray-200 my-8" />

            {/* Where you'll sleep */}
            <SleepingArrangements />

            <hr className="border-gray-200 my-8" />

            {/* What this place offers (Amenities) */}
            <AmenitiesSection
              onShowAllAmenities={() => setAmenitiesModalOpen(true)}
            />

            <hr className="border-gray-200 my-8" />

            {/* Interactive Calendar Section */}
            <CalendarSection
              checkIn={checkIn}
              checkOut={checkOut}
              onSelectDate={handleSelectDate}
              onClearDates={handleClearDates}
            />
          </div>

          {/* Right Column: Sticky Reservation Widget */}
          <div className="lg:col-span-1">
            <ReservationCard
              checkIn={checkIn}
              checkOut={checkOut}
              onReserve={() => setReserveModalOpen(true)}
              discountClaimed={discountClaimed}
              onToggleDiscount={() => setDiscountClaimed(!discountClaimed)}
            />
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewsSection
          onShowAllReviews={() => {}}
        />

        {/* Location Section & Map */}
        <LocationSection
          onShowMoreLocation={() => {}}
        />

        {/* Meet Your Host Section */}
        <HostSection />

        {/* Things to Know Section */}
        <ThingsToKnowSection />

        {/* More Stays Nearby Carousel */}
        <MoreStaysSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* === OVERLAY VIEWS & MODALS === */}

      {/* Screen 2: Full-screen Photo Tour */}
      <PhotoTourModal
        isOpen={photoTourOpen}
        onClose={() => setPhotoTourOpen(false)}
        photos={LISTING_DATA.photos}
        onOpenLightbox={(idx) => {
          setPhotoTourOpen(false);
          handleOpenLightbox(idx);
        }}
        onShare={() => setShareModalOpen(true)}
        onSave={handleToggleSave}
        isSaved={isSaved}
      />

      {/* Screen 3: Single-Photo Lightbox with Keyboard Navigation & Animations */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        photos={LISTING_DATA.photos}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onShare={() => setShareModalOpen(true)}
        onSave={handleToggleSave}
        isSaved={isSaved}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      {/* Amenities Modal */}
      <AmenitiesModal
        isOpen={amenitiesModalOpen}
        onClose={() => setAmenitiesModalOpen(false)}
      />

      {/* Description Modal */}
      <DescriptionModal
        isOpen={descriptionModalOpen}
        onClose={() => setDescriptionModalOpen(false)}
      />

      {/* Reserve Confirmation Modal */}
      <ReserveModal
        isOpen={reserveModalOpen}
        onClose={() => setReserveModalOpen(false)}
        checkIn={checkIn}
        checkOut={checkOut}
        discountClaimed={discountClaimed}
      />

      {/* Wishlist Saved Toast Notification */}
      {showSavedToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in slide-in-from-bottom-5">
          <Heart className="w-4 h-4 fill-[#FF385C] text-[#FF385C]" />
          <span>Saved to your wishlist!</span>
        </div>
      )}
    </div>
  );
}
