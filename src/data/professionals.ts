import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import port1 from "@/assets/port1.jpg";
import port2 from "@/assets/port2.jpg";
import port3 from "@/assets/port3.jpg";
import port4 from "@/assets/port4.jpg";

export type Professional = {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  reviews: number;
  startsFrom: number;
  responseTime: string;
  available48h: boolean;
  bio: string;
  image: string;
  portfolio: string[];
};

export const professionals: Professional[] = [
  {
    id: "elena-rossi",
    name: "Elena Rossi",
    role: "Model",
    location: "Antwerp, BE",
    rating: 4.9,
    reviews: 128,
    startsFrom: 850,
    responseTime: "under 2h",
    available48h: true,
    bio: "Editorial and runway model with eight years working between Milan, Paris and New York. Known for a quiet, sculptural presence and a clean editorial range.",
    image: p1,
    portfolio: [port1, port3, port4, port2],
  },
  {
    id: "marco-bianchi",
    name: "Marco Bianchi",
    role: "Photographer",
    location: "Brussels, BE",
    rating: 4.8,
    reviews: 94,
    startsFrom: 1400,
    responseTime: "under 4h",
    available48h: true,
    bio: "Fashion and product photographer crafting tactile, light-led campaigns for emerging luxury houses.",
    image: p2,
    portfolio: [port4, port1, port2, port3],
  },
  {
    id: "sofia-leone",
    name: "Sofia Leone",
    role: "Makeup Artist",
    location: "Antwerp, BE",
    rating: 5.0,
    reviews: 76,
    startsFrom: 620,
    responseTime: "under 6h",
    available48h: false,
    bio: "Beauty artist specialising in skin-first editorial looks. Regular contributor to Vogue Italia and Numéro.",
    image: p3,
    portfolio: [port2, port3, port1, port4],
  },
  {
    id: "luca-conti",
    name: "Luca Conti",
    role: "Stylist",
    location: "Leuven, BE",
    rating: 4.7,
    reviews: 53,
    startsFrom: 980,
    responseTime: "under 8h",
    available48h: true,
    bio: "Wardrobe stylist for ready-to-wear lookbooks and campaign editorials. Archive-driven approach.",
    image: p4,
    portfolio: [port1, port4, port3, port2],
  },
  {
    id: "amelia-grant",
    name: "Amelia Grant",
    role: "Influencer",
    location: "Ghent, BE",
    rating: 4.9,
    reviews: 211,
    startsFrom: 2200,
    responseTime: "under 1h",
    available48h: true,
    bio: "Lifestyle creator and brand voice with 480k engaged followers across fashion and travel verticals.",
    image: p5,
    portfolio: [port3, port2, port4, port1],
  },
  {
    id: "noah-keller",
    name: "Noah Keller",
    role: "Model",
    location: "Leuven, BE",
    rating: 4.8,
    reviews: 67,
    startsFrom: 740,
    responseTime: "under 3h",
    available48h: false,
    bio: "Sculptural menswear model represented internationally. Strong editorial and campaign book.",
    image: p6,
    portfolio: [port4, port2, port1, port3],
  },
];
