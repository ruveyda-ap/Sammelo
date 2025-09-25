import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold text-coffee-dark mb-4">Product Not Found</h1>
        <Link to="/products" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="fade-in">
      {/* Breadcrumb */}
      <div className="bg-beige py-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-text-medium hover:text-coffee-dark">Home</Link>
            <span className="text-text-light">/</span>
            <Link to="/products" className="text-text-medium hover:text-coffee-dark">Products</Link>
            <span className="text-text-light">/</span>
            <span className="text-coffee-dark font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-beige">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-coffee-dark' : 'border-border-light'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-coffee-dark mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-accent-gold fill-current'
                          : 'text-border-light'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-text-medium">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-coffee-dark">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-text-light line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-coffee-dark text-white px-2 py-1 rounded text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-text-medium leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="font-semibold text-coffee-dark mb-2">Key Features</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-medium">
                      <span className="w-1.5 h-1.5 bg-coffee-medium rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium text-coffee-dark">Quantity:</label>
                <div className="flex items-center border border-border-light rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-beige"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-border-light">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-beige"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 btn-primary ${
                    !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button className="btn-outline p-3">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="btn-outline p-3">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-light">
              <div className="text-center space-y-2">
                <Truck className="w-6 h-6 text-coffee-medium mx-auto" />
                <div className="text-sm">
                  <div className="font-medium">Free Shipping</div>
                  <div className="text-text-light">On orders over $50</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <Shield className="w-6 h-6 text-coffee-medium mx-auto" />
                <div className="text-sm">
                  <div className="font-medium">Quality Guarantee</div>
                  <div className="text-text-light">30-day return</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <RotateCcw className="w-6 h-6 text-coffee-medium mx-auto" />
                <div className="text-sm">
                  <div className="font-medium">Easy Returns</div>
                  <div className="text-text-light">Hassle-free process</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-coffee-dark mb-6">Specifications</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border-light last:border-b-0">
                    <span className="font-medium text-coffee-dark">{key}:</span>
                    <span className="text-text-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-coffee-dark mb-6">Related Products</h2>
            <div className="grid grid-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="card">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-coffee-dark mb-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-coffee-dark">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent-gold fill-current" />
                        <span className="text-sm text-text-light">
                          {relatedProduct.rating}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;