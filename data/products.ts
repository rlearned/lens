import { Product } from '@/types';

export const products: Product[] = [
  // Beverages
  {
    id: 'coca-cola',
    name: 'Coca-Cola Classic',
    brand: 'Coca-Cola',
    category: 'beverage',
    nutrition: {
      calories: 140,
      sugar_g: 39,
      sodium_mg: 45,
      protein_g: 0,
      fiber_g: 0,
      servingSize: '12 fl oz (355ml)',
    },
    imagePlaceholder: 'Red can of Coca-Cola Classic',
  },
  {
    id: 'pepsi',
    name: 'Pepsi',
    brand: 'PepsiCo',
    category: 'beverage',
    nutrition: {
      calories: 150,
      sugar_g: 41,
      sodium_mg: 30,
      protein_g: 0,
      fiber_g: 0,
      servingSize: '12 fl oz (355ml)',
    },
    imagePlaceholder: 'Blue can of Pepsi',
  },
  {
    id: 'red-bull',
    name: 'Red Bull Energy Drink',
    brand: 'Red Bull',
    category: 'beverage',
    nutrition: {
      calories: 110,
      sugar_g: 27,
      sodium_mg: 105,
      protein_g: 0,
      fiber_g: 0,
      servingSize: '8.4 fl oz (250ml)',
    },
    imagePlaceholder: 'Silver and blue Red Bull can',
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice (Not From Concentrate)',
    brand: 'Tropicana',
    category: 'beverage',
    nutrition: {
      calories: 110,
      sugar_g: 22,
      sodium_mg: 0,
      protein_g: 2,
      fiber_g: 0,
      servingSize: '8 fl oz (240ml)',
    },
    imagePlaceholder: 'Carton of orange juice',
  },

  // Snacks
  {
    id: 'lays-classic',
    name: "Lay's Classic Potato Chips",
    brand: "Lay's",
    category: 'snack',
    nutrition: {
      calories: 160,
      sugar_g: 1,
      sodium_mg: 170,
      protein_g: 2,
      fiber_g: 1,
      servingSize: '1 oz (28g)',
    },
    imagePlaceholder: 'Yellow bag of Lay\'s Classic chips',
  },
  {
    id: 'doritos',
    name: 'Doritos Nacho Cheese',
    brand: 'Doritos',
    category: 'snack',
    nutrition: {
      calories: 150,
      sugar_g: 1,
      sodium_mg: 210,
      protein_g: 2,
      fiber_g: 1,
      servingSize: '1 oz (28g)',
    },
    imagePlaceholder: 'Red bag of Doritos Nacho Cheese',
  },
  {
    id: 'oreos',
    name: 'Oreo Cookies',
    brand: 'Nabisco',
    category: 'snack',
    nutrition: {
      calories: 160,
      sugar_g: 14,
      sodium_mg: 135,
      protein_g: 2,
      fiber_g: 1,
      servingSize: '3 cookies (34g)',
    },
    imagePlaceholder: 'Blue package of Oreo cookies',
  },
  {
    id: 'granola-bar',
    name: 'Nature Valley Oats & Honey',
    brand: 'Nature Valley',
    category: 'snack',
    nutrition: {
      calories: 190,
      sugar_g: 11,
      sodium_mg: 160,
      protein_g: 4,
      fiber_g: 2,
      servingSize: '2 bars (42g)',
    },
    imagePlaceholder: 'Green box of Nature Valley granola bars',
  },

  // Meals
  {
    id: 'cup-noodles',
    name: 'Cup Noodles Chicken',
    brand: 'Nissin',
    category: 'meal',
    nutrition: {
      calories: 290,
      sugar_g: 2,
      sodium_mg: 1180,
      protein_g: 6,
      fiber_g: 2,
      servingSize: '1 container (64g)',
    },
    imagePlaceholder: 'Red cup of instant noodles',
  },
  {
    id: 'ramen',
    name: 'Maruchan Ramen Noodle Soup',
    brand: 'Maruchan',
    category: 'meal',
    nutrition: {
      calories: 380,
      sugar_g: 1,
      sodium_mg: 1560,
      protein_g: 8,
      fiber_g: 2,
      servingSize: '1 package (85g)',
    },
    imagePlaceholder: 'Orange package of ramen noodles',
  },
  {
    id: 'campbells-soup',
    name: "Campbell's Chicken Noodle Soup",
    brand: "Campbell's",
    category: 'meal',
    nutrition: {
      calories: 60,
      sugar_g: 1,
      sodium_mg: 890,
      protein_g: 3,
      fiber_g: 1,
      servingSize: '1 cup (240ml)',
    },
    imagePlaceholder: 'Red and white Campbell\'s soup can',
  },

  // Condiments
  {
    id: 'ketchup',
    name: 'Heinz Tomato Ketchup',
    brand: 'Heinz',
    category: 'condiment',
    nutrition: {
      calories: 20,
      sugar_g: 4,
      sodium_mg: 160,
      protein_g: 0,
      fiber_g: 0,
      servingSize: '1 tbsp (17g)',
    },
    imagePlaceholder: 'Red Heinz ketchup bottle',
  },
  {
    id: 'soy-sauce',
    name: 'Kikkoman Soy Sauce',
    brand: 'Kikkoman',
    category: 'condiment',
    nutrition: {
      calories: 10,
      sugar_g: 0,
      sodium_mg: 920,
      protein_g: 1,
      fiber_g: 0,
      servingSize: '1 tbsp (15ml)',
    },
    imagePlaceholder: 'Dark bottle of Kikkoman soy sauce',
  },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

// Helper function to get products by category
export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}
