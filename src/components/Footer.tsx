import React from 'react';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F7F7] border-t border-gray-200 mt-16 text-sm text-gray-700">
      {/* Inspiration Tabs / Destinations */}
      <div className="max-w-[1120px] mx-auto px-6 py-10 border-b border-gray-200">
        <h3 className="font-bold text-base text-gray-900 mb-4">Inspiration for future getaways</h3>
        <div className="flex gap-6 border-b border-gray-200 pb-3 text-xs font-semibold text-gray-600">
          <button type="button" className="text-black border-b-2 border-black pb-3 -mb-3.5">Popular</button>
          <button type="button" className="hover:text-black">Arts & culture</button>
          <button type="button" className="hover:text-black">Outdoors</button>
          <button type="button" className="hover:text-black">Mountains</button>
          <button type="button" className="hover:text-black">Beach</button>
          <button type="button" className="hover:text-black">Unique stays</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-4 gap-x-6 pt-6 text-xs">
          <div>
            <div className="font-semibold text-gray-900">Canmore</div>
            <div className="text-gray-500">Pet-friendly rentals</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Benalmádena</div>
            <div className="text-gray-500">Flat rentals</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Marbella</div>
            <div className="text-gray-500">Villa rentals</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Mijas</div>
            <div className="text-gray-500">House rentals</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Prescott</div>
            <div className="text-gray-500">Cabin rentals</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Scottsdale</div>
            <div className="text-gray-500">Mansion rentals</div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1120px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-3">Support</h4>
          <ul className="space-y-2.5 text-xs text-gray-600">
            <li><a href="#help" className="hover:underline">Help Centre</a></li>
            <li><a href="#aircover" className="hover:underline">AirCover</a></li>
            <li><a href="#anti-discrimination" className="hover:underline">Anti-discrimination</a></li>
            <li><a href="#disability" className="hover:underline">Disability support</a></li>
            <li><a href="#cancellation" className="hover:underline">Cancellation options</a></li>
            <li><a href="#report" className="hover:underline">Report neighbourhood concern</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3">Hosting</h4>
          <ul className="space-y-2.5 text-xs text-gray-600">
            <li><a href="#airbnb-your-home" className="hover:underline">Airbnb your home</a></li>
            <li><a href="#aircover-hosts" className="hover:underline">AirCover for Hosts</a></li>
            <li><a href="#hosting-resources" className="hover:underline">Hosting resources</a></li>
            <li><a href="#community-forum" className="hover:underline">Community forum</a></li>
            <li><a href="#hosting-responsibly" className="hover:underline">Hosting responsibly</a></li>
            <li><a href="#join-class" className="hover:underline">Join a free Hosting class</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3">Airbnb</h4>
          <ul className="space-y-2.5 text-xs text-gray-600">
            <li><a href="#newsroom" className="hover:underline">Newsroom</a></li>
            <li><a href="#new-features" className="hover:underline">New features</a></li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
            <li><a href="#investors" className="hover:underline">Investors</a></li>
            <li><a href="#gift-cards" className="hover:underline">Gift cards</a></li>
            <li><a href="#emergency-stays" className="hover:underline">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Currency Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1120px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#privacy" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#terms" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#sitemap" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#company-details" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold text-gray-800">
            <button type="button" className="flex items-center gap-2 hover:underline">
              <Globe className="w-4 h-4" />
              <span>English (IN)</span>
            </button>
            <button type="button" className="flex items-center gap-1 hover:underline">
              <span>₹ INR</span>
            </button>
            <div className="flex items-center gap-4 text-xs font-bold text-gray-700">
              <span className="hover:text-black cursor-pointer">FB</span>
              <span className="hover:text-black cursor-pointer">X</span>
              <span className="hover:text-black cursor-pointer">IG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
