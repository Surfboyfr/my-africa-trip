import destZanzibar from "@/assets/dest-zanzibar.jpg";
import destSerengeti from "@/assets/dest-serengeti.jpg";
import destCapetown from "@/assets/dest-capetown.jpg";
import destMarrakech from "@/assets/dest-marrakech.jpg";
import destVictoriaFalls from "@/assets/dest-victoria-falls.jpg";
import destLagos from "@/assets/dest-lagos.jpg";

export interface Package {
  id: string;
  name: string;
  duration: string;
  price: number;
  currency: string;
  included: string[];
  excluded: string[];
  highlights: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  bestTime: string;
  itinerary: string[];
  packages: Package[];
}

export const destinations: Destination[] = [
  {
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    tagline: "Turquoise waters & spice island magic",
    description:
      "A tropical paradise off the coast of Tanzania, Zanzibar enchants with pristine white-sand beaches, crystal-clear waters, and the historic Stone Town — a UNESCO World Heritage Site. Explore spice plantations, snorkel with dolphins, and unwind in luxury beachfront lodges.",
    image: destZanzibar,
    category: "Beach",
    bestTime: "June – October",
    itinerary: [
      "Day 1: Arrive in Stone Town, guided heritage walking tour",
      "Day 2: Spice plantation tour & cooking class",
      "Day 3: Transfer to beach resort, free afternoon",
      "Day 4: Snorkeling at Mnemba Atoll",
      "Day 5: Departure",
    ],
    packages: [
      {
        id: "zan-3",
        name: "Zanzibar Getaway",
        duration: "3 Days / 2 Nights",
        price: 650,
        currency: "USD",
        included: ["Boutique hotel", "Breakfast daily", "Stone Town tour", "Airport transfers"],
        excluded: ["International flights", "Visa fees", "Travel insurance"],
        highlights: ["Stone Town heritage walk", "Sunset dhow cruise"],
      },
      {
        id: "zan-5",
        name: "Zanzibar Explorer",
        duration: "5 Days / 4 Nights",
        price: 1200,
        currency: "USD",
        included: ["Beach resort", "All meals", "Snorkeling trip", "Spice tour", "Airport transfers"],
        excluded: ["International flights", "Visa fees", "Travel insurance", "Personal expenses"],
        highlights: ["Mnemba Atoll snorkeling", "Spice plantation", "Stone Town", "Sunset cruise"],
      },
    ],
  },
  {
    id: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    tagline: "Witness the greatest wildlife show on earth",
    description:
      "The Serengeti is home to the Great Migration — over two million wildebeest, zebras, and gazelles crossing vast plains. Experience world-class safari lodges, breathtaking sunsets, and encounters with the Big Five.",
    image: destSerengeti,
    category: "Safari",
    bestTime: "June – October",
    itinerary: [
      "Day 1: Arrive Arusha, overnight at lodge",
      "Day 2: Drive to Serengeti, afternoon game drive",
      "Day 3: Full-day game drive",
      "Day 4: Morning balloon safari, afternoon game drive",
      "Day 5: Ngorongoro Crater day trip",
      "Day 6: Departure",
    ],
    packages: [
      {
        id: "ser-4",
        name: "Serengeti Safari Classic",
        duration: "4 Days / 3 Nights",
        price: 1800,
        currency: "USD",
        included: ["Safari lodge", "All meals", "Game drives", "Park fees", "Transport from Arusha"],
        excluded: ["International flights", "Visa fees", "Tips", "Travel insurance"],
        highlights: ["Big Five game drives", "Sunrise on the savanna", "Maasai cultural visit"],
      },
      {
        id: "ser-6",
        name: "Serengeti & Ngorongoro Premium",
        duration: "6 Days / 5 Nights",
        price: 3200,
        currency: "USD",
        included: ["Luxury tented camp", "All meals & drinks", "Balloon safari", "All game drives", "Ngorongoro Crater", "Airport transfers"],
        excluded: ["International flights", "Visa fees", "Travel insurance"],
        highlights: ["Hot air balloon", "Ngorongoro Crater", "Great Migration viewing", "Luxury camping"],
      },
    ],
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    tagline: "Where mountains meet the ocean",
    description:
      "Cape Town dazzles with Table Mountain's iconic silhouette, vibrant neighborhoods like Bo-Kaap, world-class wine regions, and stunning coastal drives. A city where adventure meets culture at every turn.",
    image: destCapetown,
    category: "City",
    bestTime: "November – March",
    itinerary: [
      "Day 1: Table Mountain cable car & city orientation",
      "Day 2: Cape Peninsula & Cape of Good Hope drive",
      "Day 3: Winelands day trip (Stellenbosch & Franschhoek)",
      "Day 4: Bo-Kaap, V&A Waterfront & Robben Island",
      "Day 5: Departure",
    ],
    packages: [
      {
        id: "ct-3",
        name: "Cape Town Highlights",
        duration: "3 Days / 2 Nights",
        price: 750,
        currency: "USD",
        included: ["4-star hotel", "Breakfast", "Table Mountain ticket", "Cape Peninsula tour", "Airport transfers"],
        excluded: ["Flights", "Visa fees", "Lunches & dinners", "Travel insurance"],
        highlights: ["Table Mountain", "Cape of Good Hope", "Bo-Kaap walking tour"],
      },
      {
        id: "ct-5",
        name: "Cape Town & Winelands",
        duration: "5 Days / 4 Nights",
        price: 1400,
        currency: "USD",
        included: ["Boutique hotel", "Breakfast daily", "All tours", "Wine tastings", "Airport transfers"],
        excluded: ["Flights", "Visa fees", "Travel insurance"],
        highlights: ["Stellenbosch wines", "Robben Island", "Chapman's Peak Drive", "V&A Waterfront"],
      },
    ],
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    tagline: "A feast for the senses",
    description:
      "Lose yourself in the labyrinthine souks, savor tagine under starlit riads, and marvel at intricate Islamic architecture. Marrakech is a sensory explosion of color, flavor, and culture.",
    image: destMarrakech,
    category: "Cultural",
    bestTime: "March – May, September – November",
    itinerary: [
      "Day 1: Arrive, check into riad, Jemaa el-Fnaa square",
      "Day 2: Medina walking tour, souks & palaces",
      "Day 3: Day trip to Atlas Mountains & Berber village",
      "Day 4: Cooking class & hammam spa",
      "Day 5: Departure",
    ],
    packages: [
      {
        id: "mar-3",
        name: "Marrakech Medina",
        duration: "3 Days / 2 Nights",
        price: 550,
        currency: "USD",
        included: ["Traditional riad", "Breakfast", "Medina guided tour", "Airport transfers"],
        excluded: ["Flights", "Visa fees", "Lunches & dinners"],
        highlights: ["Jemaa el-Fnaa", "Bahia Palace", "Souk shopping"],
      },
      {
        id: "mar-5",
        name: "Marrakech & Atlas Mountains",
        duration: "5 Days / 4 Nights",
        price: 1050,
        currency: "USD",
        included: ["Riad stay", "All breakfasts", "Atlas day trip", "Cooking class", "Hammam", "Airport transfers"],
        excluded: ["Flights", "Visa fees", "Travel insurance"],
        highlights: ["Atlas Mountains trek", "Berber village lunch", "Moroccan cooking", "Traditional hammam"],
      },
    ],
  },
  {
    id: "victoria-falls",
    name: "Victoria Falls",
    country: "Zimbabwe / Zambia",
    tagline: "The smoke that thunders",
    description:
      "One of the Seven Natural Wonders, Victoria Falls is a breathtaking curtain of water spanning over a kilometer. The surrounding area offers bungee jumping, white-water rafting, sunset cruises, and wildlife encounters.",
    image: destVictoriaFalls,
    category: "Adventure",
    bestTime: "February – May",
    itinerary: [
      "Day 1: Arrive, guided falls tour",
      "Day 2: White-water rafting on the Zambezi",
      "Day 3: Chobe National Park day trip",
      "Day 4: Sunset cruise & bungee (optional)",
      "Day 5: Departure",
    ],
    packages: [
      {
        id: "vf-3",
        name: "Victoria Falls Adventure",
        duration: "3 Days / 2 Nights",
        price: 800,
        currency: "USD",
        included: ["Lodge", "Breakfast", "Falls tour", "Sunset cruise", "Airport transfers"],
        excluded: ["Flights", "Visa fees", "Activity add-ons"],
        highlights: ["Guided falls walk", "Zambezi sunset cruise", "Rainforest walk"],
      },
    ],
  },
  {
    id: "lagos",
    name: "Lagos",
    country: "Nigeria",
    tagline: "Africa's city that never sleeps",
    description:
      "Lagos pulses with energy — from its booming art scene and Afrobeats nightlife to its legendary street food and beachfront vibes. Experience the heart of West Africa's cultural capital.",
    image: destLagos,
    category: "City",
    bestTime: "November – March",
    itinerary: [
      "Day 1: Arrive, Lekki & Victoria Island tour",
      "Day 2: Nike Art Gallery, local food tour",
      "Day 3: Elegushi Beach & nightlife",
    ],
    packages: [
      {
        id: "lag-3",
        name: "Lagos City Break",
        duration: "3 Days / 2 Nights",
        price: 500,
        currency: "USD",
        included: ["Hotel", "Breakfast", "City tour", "Food tour", "Airport transfers"],
        excluded: ["Flights", "Visa fees", "Nightlife expenses"],
        highlights: ["Art galleries", "Street food tour", "Beach day", "Afrobeats nightlife"],
      },
    ],
  },
];
