export interface Testimonial {
  name: string;
  location: string;
  text: string;
  destination: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Amara K.",
    location: "Nairobi, Kenya",
    text: "Our Serengeti trip was absolutely magical. From the balloon safari to the Maasai village visit — every moment was perfectly curated. Will definitely book again!",
    destination: "Serengeti Safari",
    rating: 5,
  },
  {
    name: "David O.",
    location: "London, UK",
    text: "As a diaspora traveler, I was nervous about planning a trip to Lagos. SafariSoul made it seamless — the food tour alone was worth the entire trip!",
    destination: "Lagos City Break",
    rating: 5,
  },
  {
    name: "Fatima B.",
    location: "Accra, Ghana",
    text: "Zanzibar was a dream come true. Crystal clear waters, the most amazing seafood, and Stone Town was absolutely fascinating. Thank you for the perfect honeymoon!",
    destination: "Zanzibar Explorer",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "Toronto, Canada",
    text: "The Cape Town & Winelands package exceeded all expectations. Table Mountain at sunrise, wine tasting in Stellenbosch — unforgettable experiences beautifully organized.",
    destination: "Cape Town & Winelands",
    rating: 5,
  },
];
