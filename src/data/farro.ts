import videoAsset from "@/assets/farro-world.mp4.asset.json";
import webmAsset from "@/assets/farro-world.webm.asset.json";
import posterAsset from "@/assets/farro-poster.jpg.asset.json";

export const farro = {
  name: "FARRO",
  tagline: "A world built around flavour.",
  locality: "KOREGAON PARK · PUNE",
  address: "357/1, Shop 1/2, Ground Floor, Lane 6, Meera Nagar, Koregaon Park, Pune",
  addressLines: [
    "357/1, Shop 1/2",
    "Ground Floor, Lane 6",
    "Meera Nagar, Koregaon Park",
    "Pune",
  ],
  phone: "+91 96993 63706",
  phoneHref: "tel:+919699363706",
  cuisines: [
    "Modern Indian",
    "Mediterranean",
    "Italian",
    "Desserts",
    "Alcoholic Beverages",
    "Bar Food",
  ],
  rating: "4.7",
  ratingCount: "710",
  averageCost: "₹3,500 for two",
  openingTime: "Opens at 7 PM",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Farro, 357/1 Shop 1/2, Lane 6, Meera Nagar, Koregaon Park, Pune",
    ),
  reservationUrl: "#reservation-url",
  instagramUrl: "#instagram-url",
  menuUrl: "#menu-url",
  videoUrl: videoAsset.url,
  videoWebmUrl: webmAsset.url,
  posterUrl: posterAsset.url,
} as const;

export const dishes = [
  {
    name: "[Signature Dish 01]",
    description: "[Dish Description]",
    price: "[Price]",
  },
  {
    name: "[Signature Dish 02]",
    description: "[Dish Description]",
    price: "[Price]",
  },
  {
    name: "[Signature Dish 03]",
    description: "[Dish Description]",
    price: "[Price]",
  },
  {
    name: "[Signature Dish 04]",
    description: "[Dish Description]",
    price: "[Price]",
  },
] as const;
