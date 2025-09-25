import { Product } from '../types';

export const products: Product[] = [
  // Coffee Beans
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    description: 'A bright and floral single-origin coffee with notes of citrus and tea-like qualities. Grown at high altitude in the birthplace of coffee.',
    price: 24.99,
    originalPrice: 29.99,
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'beans',
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    features: ['Single Origin', 'Light Roast', 'Floral Notes', 'High Altitude'],
    specifications: {
      'Origin': 'Ethiopia, Yirgacheffe',
      'Roast Level': 'Light',
      'Processing': 'Washed',
      'Altitude': '1,700-2,200m',
      'Weight': '340g'
    },
    tags: ['premium', 'single-origin', 'light-roast']
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    description: 'Rich and well-balanced coffee with chocolate and caramel notes. A classic medium roast that delivers consistent quality.',
    price: 22.99,
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'beans',
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
    features: ['Medium Roast', 'Chocolate Notes', 'Well-Balanced', 'Classic'],
    specifications: {
      'Origin': 'Colombia',
      'Roast Level': 'Medium',
      'Processing': 'Washed',
      'Altitude': '1,200-1,800m',
      'Weight': '340g'
    },
    tags: ['classic', 'medium-roast', 'balanced']
  },
  {
    id: '3',
    name: 'Brazilian Santos',
    description: 'Full-bodied dark roast with rich, nutty flavors and low acidity. Perfect for espresso and French press brewing.',
    price: 21.99,
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'beans',
    inStock: true,
    rating: 4.4,
    reviewCount: 156,
    features: ['Dark Roast', 'Full Body', 'Low Acidity', 'Nutty'],
    specifications: {
      'Origin': 'Brazil, Santos',
      'Roast Level': 'Dark',
      'Processing': 'Natural',
      'Altitude': '800-1,200m',
      'Weight': '340g'
    },
    tags: ['dark-roast', 'espresso', 'full-body']
  },

  // Coffee Machines
  {
    id: '4',
    name: 'Sammelo Pro Espresso Machine',
    description: 'Professional-grade espresso machine with dual boiler system, PID temperature control, and commercial-quality components.',
    price: 1299.99,
    originalPrice: 1499.99,
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'machines',
    inStock: true,
    rating: 4.9,
    reviewCount: 43,
    features: ['Dual Boiler', 'PID Control', 'Pre-infusion', 'Commercial Grade'],
    specifications: {
      'Boiler Capacity': '1.4L + 0.6L',
      'Pump Pressure': '15 bar',
      'Power': '1400W',
      'Dimensions': '43 x 33 x 40 cm',
      'Weight': '18kg'
    },
    tags: ['professional', 'dual-boiler', 'premium']
  },
  {
    id: '5',
    name: 'Sammelo Drip Coffee Maker',
    description: 'Precision drip coffee maker with temperature control, bloom function, and thermal carafe for perfect extraction.',
    price: 299.99,
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'machines',
    inStock: true,
    rating: 4.7,
    reviewCount: 78,
    features: ['Temperature Control', 'Bloom Function', 'Thermal Carafe', 'Programmable'],
    specifications: {
      'Capacity': '10 cups',
      'Power': '1200W',
      'Carafe': 'Thermal Stainless Steel',
      'Dimensions': '35 x 20 x 40 cm',
      'Weight': '4.5kg'
    },
    tags: ['drip', 'thermal', 'programmable']
  },
  {
    id: '6',
    name: 'Sammelo Burr Grinder',
    description: 'Precision burr grinder with 40 grind settings, timer function, and anti-static technology for consistent results.',
    price: 199.99,
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'machines',
    inStock: false,
    rating: 4.8,
    reviewCount: 92,
    features: ['40 Grind Settings', 'Timer Function', 'Anti-Static', 'Burr Grinding'],
    specifications: {
      'Grind Settings': '40',
      'Hopper Capacity': '340g',
      'Power': '110W',
      'Dimensions': '16 x 13 x 35 cm',
      'Weight': '4.2kg'
    },
    tags: ['burr', 'precision', 'timer']
  },

  // Accessories
  {
    id: '7',
    name: 'Sammelo Pour Over Set',
    description: 'Complete pour-over brewing set including ceramic dripper, glass carafe, and premium filters for manual brewing.',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    inStock: true,
    rating: 4.6,
    reviewCount: 134,
    features: ['Ceramic Dripper', 'Glass Carafe', 'Premium Filters', 'Complete Set'],
    specifications: {
      'Dripper Material': 'Ceramic',
      'Carafe Material': 'Borosilicate Glass',
      'Capacity': '600ml',
      'Filters Included': '100 pieces',
      'Dimensions': '15 x 15 x 20 cm'
    },
    tags: ['pour-over', 'manual', 'ceramic']
  },
  {
    id: '8',
    name: 'Sammelo French Press',
    description: 'Premium stainless steel French press with double-wall insulation and precision mesh filter for full-bodied coffee.',
    price: 49.99,
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    inStock: true,
    rating: 4.5,
    reviewCount: 87,
    features: ['Stainless Steel', 'Double-Wall', 'Precision Filter', 'Heat Retention'],
    specifications: {
      'Material': 'Stainless Steel',
      'Capacity': '1L',
      'Insulation': 'Double-Wall',
      'Filter': '4-Level Filtration',
      'Dimensions': '17 x 11 x 22 cm'
    },
    tags: ['french-press', 'stainless-steel', 'insulated']
  },
  {
    id: '9',
    name: 'Sammelo Coffee Scale',
    description: 'Precision digital scale with timer function, perfect for pour-over brewing and espresso dosing.',
    price: 39.99,
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    features: ['0.1g Precision', 'Built-in Timer', 'Auto-off', 'Compact Design'],
    specifications: {
      'Accuracy': '0.1g',
      'Capacity': '2kg',
      'Timer': 'Built-in',
      'Display': 'LED',
      'Dimensions': '16 x 13 x 2 cm'
    },
    tags: ['scale', 'precision', 'timer']
  }
];