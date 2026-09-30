import React from 'react';
import { Star, ShieldCheck, Award, MessageSquare } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

export const HostSection: React.FC = () => {
  return (
    <div className="py-10 border-t border-gray-200 space-y-8">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Meet your host</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Host Profile Card */}
        <div className="bg-[#F0EFE9]/40 border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center shadow-sm">
          <div className="relative mb-3">
            <img
              src={LISTING_DATA.host.avatar}
              alt={LISTING_DATA.host.name}
              className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white"
            />
            <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-1 rounded-full shadow">
              <Award className="w-4 h-4 fill-white" />
            </div>
          </div>

          <h4 className="text-2xl font-extrabold text-gray-900">{LISTING_DATA.host.name}</h4>
          <p className="text-gray-600 text-sm font-medium mt-1">Superhost</p>

          <div className="flex items-center justify-center gap-6 mt-6 w-full border-t border-gray-200/80 pt-6">
            <div>
              <div className="text-xl font-bold text-gray-900">{LISTING_DATA.host.reviews}</div>
              <div className="text-xs text-gray-500 font-medium">Reviews</div>
            </div>
            <div className="border-l border-gray-300 pl-6">
              <div className="text-xl font-bold text-gray-900 flex items-center justify-center gap-1">
                {LISTING_DATA.host.rating} <Star className="w-3.5 h-3.5 fill-black text-black" />
              </div>
              <div className="text-xs text-gray-500 font-medium">Rating</div>
            </div>
            <div className="border-l border-gray-300 pl-6">
              <div className="text-xl font-bold text-gray-900">{LISTING_DATA.host.yearsHosting}</div>
              <div className="text-xs text-gray-500 font-medium">Years hosting</div>
            </div>
          </div>
        </div>

        {/* Host Details & Co-hosts */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-3">Co-Hosts</h4>
            <div className="flex items-center gap-6">
              {LISTING_DATA.host.coHosts.map((coHost, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img
                    src={coHost.avatar}
                    alt={coHost.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{coHost.name}</div>
                    <div className="text-xs text-gray-500">{coHost.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-base text-gray-900">Host details</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <div>Response rate: <span className="font-semibold text-gray-900">{LISTING_DATA.host.responseRate}</span></div>
              <div>Responds: <span className="font-semibold text-gray-900">{LISTING_DATA.host.responseTime}</span></div>
            </div>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            {LISTING_DATA.host.bio}
          </p>

          <div>
            <button
              type="button"
              className="border border-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 active:scale-95 transition-all text-gray-900 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message Host</span>
            </button>
          </div>

          <div className="flex items-center gap-3 pt-2 text-xs text-gray-500 border-t border-gray-100">
            <ShieldCheck className="w-5 h-5 text-[#FF385C] flex-shrink-0" />
            <span>
              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
