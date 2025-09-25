export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'beans' | 'machines' | 'accessories';
  inStock: boolean;
  rating: number;
  reviewCount: number;
  features?: string[];
  specifications?: Record<string, string>;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  sortBy?: 'popularity' | 'price-low' | 'price-high' | 'rating' | 'newest';
  inStock?: boolean;
}