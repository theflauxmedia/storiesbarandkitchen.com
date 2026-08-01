/**
 * Curated signature-dish photography from public/assets/_shared/food.
 * Used on the Home page dish strip and the Food & Drinks page.
 */

export type Dish = {
  name: string;
  category:
    | "Small Plates & Starters"
    | "Indian Favourites"
    | "Asian Selection"
    | "Continental Selection"
    | "Main Courses"
    | "Desserts";
  veg: boolean;
  image: string;
};

const base = "/assets/_shared/food";

export const dishes: Dish[] = [
  {
    name: "Chargrilled Chicken Wings",
    category: "Small Plates & Starters",
    veg: false,
    image: `${base}/chargrilled-chicken-wings.webp`,
  },
  {
    name: "Chilli Garlic Wings",
    category: "Small Plates & Starters",
    veg: false,
    image: `${base}/chilli-garlic-wings.webp`,
  },
  {
    name: "Honey Chilli Potatoes",
    category: "Small Plates & Starters",
    veg: true,
    image: `${base}/honey-chilli-potatoes.webp`,
  },
  {
    name: "Sriracha Baby Corn",
    category: "Small Plates & Starters",
    veg: true,
    image: `${base}/sriracha-baby-corn.webp`,
  },
  {
    name: "Tea Stall Egg Bonda",
    category: "Small Plates & Starters",
    veg: false,
    image: `${base}/tea-stall-egg-bonda.webp`,
  },
  {
    name: "Masala Stuffed Boiled Egg",
    category: "Small Plates & Starters",
    veg: false,
    image: `${base}/masala-stuffed-boiled-egg.webp`,
  },
  {
    name: "Peri Peri Chicken Lollypop",
    category: "Small Plates & Starters",
    veg: false,
    image: `${base}/peri-peri-lollypop.webp`,
  },
  {
    name: "Crispy Fried Chicken Lollypop",
    category: "Small Plates & Starters",
    veg: false,
    image: `${base}/deep-fried-lollypop.webp`,
  },
  {
    name: "Dahi Masala Chicken Tikka",
    category: "Indian Favourites",
    veg: false,
    image: `${base}/dahi-masala-chicken-tikka.webp`,
  },
  {
    name: "Dahi Masala Paneer Tikka",
    category: "Indian Favourites",
    veg: true,
    image: `${base}/dahi-masala-paneer-tikka.webp`,
  },
  {
    name: "Pahadi Chicken Tikka",
    category: "Indian Favourites",
    veg: false,
    image: `${base}/pahadi-chicken-tikka.webp`,
  },
  {
    name: "Red Marinated Paneer Tikka",
    category: "Indian Favourites",
    veg: true,
    image: `${base}/red-marinated-paneer-tikka.webp`,
  },
  {
    name: "Naked Masala Fish Tikka",
    category: "Indian Favourites",
    veg: false,
    image: `${base}/naked-masala-fish-tikka.webp`,
  },
  {
    name: "Donne Chicken Biryani",
    category: "Main Courses",
    veg: false,
    image: `${base}/donne-chicken-biryani.webp`,
  },
  {
    name: "Hyderabadi Chicken Dum Biryani",
    category: "Main Courses",
    veg: false,
    image: `${base}/hyderabadi-chicken-dum-biryani.webp`,
  },
  {
    name: "Koli Keema Gojju with Parota",
    category: "Main Courses",
    veg: false,
    image: `${base}/koli-keema-gojju-parota.webp`,
  },
  {
    name: "Johnson Mutton Rassa",
    category: "Main Courses",
    veg: false,
    image: `${base}/johnson-mutton-rassa.webp`,
  },
  {
    name: "Sticky Basil Chicken",
    category: "Asian Selection",
    veg: false,
    image: `${base}/sticky-basil-chicken.webp`,
  },
  {
    name: "Thai Basil Fried Rice",
    category: "Asian Selection",
    veg: true,
    image: `${base}/thai-basil-fried-rice.webp`,
  },
  {
    name: "Schezwan Chicken Noodles",
    category: "Asian Selection",
    veg: false,
    image: `${base}/schezwan-chicken-noodles.webp`,
  },
  {
    name: "Tangra Chilli Mushroom",
    category: "Asian Selection",
    veg: true,
    image: `${base}/tangra-chilli-mushroom.webp`,
  },
  {
    name: "Pesto Spaghetti",
    category: "Continental Selection",
    veg: true,
    image: `${base}/pesto-spaghetti.webp`,
  },
  {
    name: "Pink Sauce Pasta Penne",
    category: "Continental Selection",
    veg: true,
    image: `${base}/pink-sauce-pasta.webp`,
  },
  {
    name: "Peni Rasmalai with Rabri",
    category: "Desserts",
    veg: true,
    image: `${base}/rasmalai-rabri.webp`,
  },
];

export const dishCategories = [
  "Small Plates & Starters",
  "Indian Favourites",
  "Asian Selection",
  "Continental Selection",
  "Main Courses",
  "Desserts",
] as const;
