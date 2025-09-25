import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div className="card group cursor-pointer">
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-2 left-2 bg-coffee-dark text-white px-2 py-1 rounded text-sm font-medium">
              Sale
            </div>
          )}
          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-text-light text-white px-2 py-1 rounded text-sm font-medium">
              Out of Stock
            </div>
          )}
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-4 h-4 text-text-medium hover:text-coffee-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-coffee-dark group-hover:text-coffee-medium transition-colors">
            {product.name}
          </h3>
          
          <p className="text-text-medium text-sm line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-accent-gold fill-current'
                      : 'text-border-light'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-text-light">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-coffee-dark">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-text-light line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full btn-primary mt-4 ${
              !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;