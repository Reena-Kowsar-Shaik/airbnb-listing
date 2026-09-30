export type PhotoCategory = 'all' | 'living' | 'jacuzzi' | 'bedroom' | 'kitchen' | 'bathroom' | 'exterior';

export interface PhotoItem {
  id: number;
  url: string;
  category: PhotoCategory;
  categoryTitle: string;
  caption: string;
  isHero?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  date: string;
  tenure: string;
  rating: number;
  content: string;
  tags?: string[];
}

export interface AmenityItem {
  name: string;
  category: string;
  iconName: string;
  available: boolean;
  subtext?: string;
}

export const LISTING_DATA: {
  id: string;
  title: string;
  type: string;
  subtitle: string;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  nightlyPrice: number;
  defaultNights: number;
  defaultDates: { checkIn: string; checkOut: string };
  cleaningFee: number;
  serviceFee: number;
  discountPercentage: number;
  host: {
    name: string;
    avatar: string;
    yearsHosting: number;
    isSuperhost: boolean;
    rating: number;
    reviews: number;
    responseRate: string;
    responseTime: string;
    bio: string;
    coHosts: { name: string; role: string; avatar: string }[];
  };
  highlights: { icon: string; title: string; description: string }[];
  description: { short: string; full: string[] };
  photos: PhotoItem[];
  sleepingArrangements: { room: string; bed: string; image: string }[];
  amenities: AmenityItem[];
  ratingsBreakdown: {
    overall: number;
    cleanliness: number;
    accuracy: number;
    checkIn: number;
    communication: number;
    location: number;
    value: number;
    distribution: { stars: number; percentage: number }[];
  };
  reviewTags: { name: string; count: number; emoji: string }[];
  reviews: ReviewItem[];
  houseRules: { title: string; icon: string }[];
  safetyRules: { title: string; icon: string }[];
  cancellationPolicy: { summary: string; details: string };
  moreStays: {
    id: string;
    title: string;
    location: string;
    image: string;
    price: number;
    rating: number;
    dates: string;
  }[];
} = {
  id: "mirashya-ug10-candolim",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment in Candolim, India",
  subtitle: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: 4.95,
  reviewCount: 19,
  isGuestFavorite: true,
  nightlyPrice: 5699,
  defaultNights: 5,
  defaultDates: {
    checkIn: "2026-10-18",
    checkOut: "2026-10-23"
  },
  cleaningFee: 1500,
  serviceFee: 3890,
  discountPercentage: 10,
  host: {
    name: "Mirashya Homes",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 2,
    isSuperhost: true,
    rating: 4.95,
    reviews: 19,
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "Mirashya Homes specializes in curated luxury boutique apartments across North Goa. We believe in providing pristine, comfort-first stays with top-notch amenities, private jacuzzis, and 24/7 dedicated guest support.",
    coHosts: [
      { name: "Nitish", role: "Co-host", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
      { name: "Pooja", role: "Co-host", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" }
    ]
  },
  highlights: [
    {
      icon: "Flame",
      title: "Outdoor entertainment",
      description: "The pool and alfresco dining are great for summer trips."
    },
    {
      icon: "Wind",
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan."
    },
    {
      icon: "DoorClosed",
      title: "Self check-in",
      description: "You can check in with the building staff."
    }
  ],
  description: {
    short: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's the ideal escape for couples, small families, or digital nomads seeking luxury and convenience in North Goa.",
    full: [
      "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's the ideal escape for couples, small families, or digital nomads seeking luxury and convenience in North Goa.",
      "The Space:",
      "🛋️ Living Area: Airy and vibrant, complete with comfortable designer sofa, ambient lighting, high-speed Wi-Fi, and 55-inch 4K Smart TV with Netflix & OTT streaming.",
      "🛁 Private Jacuzzi & Patio: Step out into your private enclosed courtyard terrace featuring a heated multi-jet hydromassage Jacuzzi tub surrounded by lush tropical greenery and warm mood wall sconces.",
      "🛏️ Master Bedroom: Plush King-size bed with premium orthopaedic mattress, crisp 400-thread Egyptian cotton linens, wardrobe storage, bedside lamps, and serene courtyard views.",
      "🍳 Fully Equipped Kitchen: Induction cooktop, microwave, refrigerator, electric kettle, cookware, dinnerware, and complimentary tea/coffee supplies.",
      "🏊‍♂️ Building Amenities: Gated community with 24/7 security, elevator access, shared outdoor swimming pool, and dedicated free covered car parking."
    ]
  },
  photos: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
      category: "living",
      categoryTitle: "Living Area & Jacuzzi Lounge",
      caption: "Private terrace lounge with designer woven seating, accent wall lights, and integrated jacuzzi tub",
      isHero: true
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      category: "living",
      categoryTitle: "Living Area",
      caption: "Spacious seating arrangement with contemporary grey stone accent wall and ambient lighting",
      isHero: true
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      category: "jacuzzi",
      categoryTitle: "Private Jacuzzi",
      caption: "Built-in luxury hydrotherapy jacuzzi with teakwood decking and adjustable jets",
      isHero: true
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      category: "bedroom",
      categoryTitle: "Master Bedroom",
      caption: "Air-conditioned master bedroom with plush queen bed, custom wardrobe, and full-length mirror",
      isHero: true
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      category: "exterior",
      categoryTitle: "Exterior & Complex",
      caption: "Amor De Goa complex view with terracotta tiled rooftops and lush palm surroundings",
      isHero: true
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      category: "living",
      categoryTitle: "Living & Dining Area",
      caption: "Open-plan dining area with 4-seater wooden dining table, yellow accent wall, and vintage armoire",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      category: "kitchen",
      categoryTitle: "Kitchen",
      caption: "Modern kitchenette with induction stove, refrigerator, microwave, and electric kettle",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
      category: "bathroom",
      categoryTitle: "Bathroom",
      caption: "Sparkling modern bathroom with glass shower cubicle, hot water geyser, and fresh towels",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      category: "exterior",
      categoryTitle: "Swimming Pool",
      caption: "Sparkling clean outdoor swimming pool for apartment residents and guests",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      category: "jacuzzi",
      categoryTitle: "Evening Jacuzzi View",
      caption: "Atmospheric evening ambiance with warm spotlights over the Jacuzzi tub",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      category: "bedroom",
      categoryTitle: "Bedroom Side Angle",
      caption: "Cozy reading corner with bedside hanging lamp and large sunlit window",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      category: "living",
      categoryTitle: "Living Room Sofa",
      caption: "Plush leatherette couch with handwoven ethnic cushions and coffee table",
    }
  ],
  sleepingArrangements: [
    {
      room: "Bedroom",
      bed: "1 double bed",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
    },
    {
      room: "Living room",
      bed: "1 sofa",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  amenities: [
    { name: "Kitchen", category: "Kitchen & dining", iconName: "Utensils", available: true, subtext: "Space where guests can cook their own meals" },
    { name: "Wifi", category: "Internet & office", iconName: "Wifi", available: true, subtext: "High-speed 100 Mbps fiber connection" },
    { name: "Dedicated workspace", category: "Internet & office", iconName: "Laptop", available: true, subtext: "Desk with comfortable chair & charging outlets" },
    { name: "Free parking on premises", category: "Parking & facilities", iconName: "Car", available: true, subtext: "Dedicated reserved parking slot inside the gated complex" },
    { name: "Pool", category: "Outdoor", iconName: "Waves", available: true, subtext: "Shared outdoor pool open year-round" },
    { name: "Hot tub", category: "Bathroom", iconName: "Bath", available: true, subtext: "Private hydromassage jacuzzi in the patio" },
    { name: "Pets allowed", category: "Services", iconName: "Dog", available: true, subtext: "Assistance animals are always allowed" },
    { name: "Exterior security cameras on property", category: "Home safety", iconName: "Cctv", available: true, subtext: "CCTV covering common entrances and parking" },
    { name: "Air conditioning", category: "Heating & cooling", iconName: "Wind", available: true, subtext: "Split inverter ACs in bedroom and living room" },
    { name: "Ceiling fan", category: "Heating & cooling", iconName: "Fan", available: true },
    { name: "55\" HDTV with Netflix", category: "Entertainment", iconName: "Tv", available: true },
    { name: "Microwave", category: "Kitchen & dining", iconName: "Microwave", available: true },
    { name: "Refrigerator", category: "Kitchen & dining", iconName: "Refrigerator", available: true },
    { name: "Hot water geyser", category: "Bathroom", iconName: "ShowerHead", available: true },
    { name: "Iron & ironing board", category: "Bedroom & laundry", iconName: "Shirt", available: true },
    { name: "Hair dryer", category: "Bathroom", iconName: "Wind", available: true },
    { name: "Private patio / terrace", category: "Outdoor", iconName: "Sun", available: true },
    { name: "Elevator", category: "Parking & facilities", iconName: "Building2", available: true },
    { name: "Carbon monoxide alarm", category: "Home safety", iconName: "AlertTriangle", available: false, subtext: "Not reported. Check with host." },
    { name: "Smoke alarm", category: "Home safety", iconName: "BellOff", available: false, subtext: "Not reported. Check with host." }
  ],
  ratingsBreakdown: {
    overall: 4.95,
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 5.0,
    location: 4.8,
    value: 4.8,
    distribution: [
      { stars: 5, percentage: 95 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 0 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 }
    ]
  },
  reviewTags: [
    { name: "Comfort", count: 6, emoji: "🛋" },
    { name: "Accuracy", count: 5, emoji: "✅" },
    { name: "Hot tub", count: 5, emoji: "🪵" },
    { name: "Condition", count: 4, emoji: "💌" },
    { name: "Hospitality", count: 8, emoji: "🎁" },
    { name: "Cleanliness", count: 4, emoji: "🧴" },
    { name: "Amenities", count: 2, emoji: "🪮" }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Amit",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
      date: "1 week ago",
      tenure: "2 months on Airbnb",
      rating: 5,
      content: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."
    },
    {
      id: "rev-2",
      author: "Aheesh",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
      date: "2 weeks ago",
      tenure: "3 years on Airbnb",
      rating: 5,
      content: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again."
    },
    {
      id: "rev-3",
      author: "Samiksha",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      date: "May 2026",
      tenure: "8 months on Airbnb",
      rating: 5,
      content: "the host nitish was really great help"
    },
    {
      id: "rev-4",
      author: "Vedant",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80",
      date: "May 2026",
      tenure: "4 years on Airbnb",
      rating: 5,
      content: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. The jacuzzi was a game-changer after a long day."
    },
    {
      id: "rev-5",
      author: "Vaibhav S",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      date: "April 2026",
      tenure: "1 year on Airbnb",
      rating: 5,
      content: "Great stay! The private jacuzzi was heavenly after a long day exploring Candolim beach. Sparkling clean and super peaceful surroundings."
    },
    {
      id: "rev-6",
      author: "Mohd",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
      date: "March 2026",
      tenure: "6 months on Airbnb",
      rating: 5,
      content: "Exceptional hospitality by Mirashya Homes. Prompt communication, seamless check-in, and all amenities in top-notch condition. Will definitely book again!"
    }
  ],
  houseRules: [
    { title: "Check-in after 2:00 pm", icon: "Clock" },
    { title: "Checkout before 11:00 am", icon: "Clock" },
    { title: "3 guests maximum", icon: "Users" }
  ],
  safetyRules: [
    { title: "Carbon monoxide alarm not reported", icon: "AlertCircle" },
    { title: "Smoke alarm not reported", icon: "AlertCircle" },
    { title: "Exterior security cameras on property", icon: "Cctv" }
  ],
  cancellationPolicy: {
    summary: "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
    details: "Review this host's full policy for details."
  },
  moreStays: [
    {
      id: "stay-1",
      title: "Beautiful Studio with a view to die for",
      location: "Candolim, Goa",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
      price: 4200,
      rating: 4.88,
      dates: "20-25 Oct"
    },
    {
      id: "stay-2",
      title: "NAQAB - 1bhk with private pool",
      location: "Candolim, Goa",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      price: 6800,
      rating: 4.96,
      dates: "18-23 Oct"
    },
    {
      id: "stay-3",
      title: "Greentique Luxury Flat with plunge pool, Calangute",
      location: "Calangute, Goa",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
      price: 5490,
      rating: 4.91,
      dates: "19-24 Oct"
    },
    {
      id: "stay-4",
      title: "The Tropical Studio | 5 mins to Beach",
      location: "Candolim, Goa",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
      price: 3900,
      rating: 4.85,
      dates: "22-27 Oct"
    },
    {
      id: "stay-5",
      title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
      location: "Calangute, Goa",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
      price: 7200,
      rating: 4.98,
      dates: "18-23 Oct"
    }
  ]
};
