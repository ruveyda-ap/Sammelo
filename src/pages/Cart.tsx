import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, total, itemCount, updateQuantity, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center fade-in">
        <div className="max-w-md mx-auto space-y-6">
          <ShoppingBag className="w-24 h-24 text-text-light mx-auto" />
          <h1 className="text-3xl font-bold text-coffee-dark">Your Cart is Empty</h1>
          <p className="text-text-medium">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="bg-beige py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-coffee-dark mb-4">
              Shopping Cart
            </h1>
            <p className="text-xl text-text-medium">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-coffee-dark">Cart Items</h2>
              <button
                onClick={clearCart}
                className="text-text-medium hover:text-error transition-colors"
              >
                Clear Cart
              </button>
            </div>

            {items.map((item) => (
              <div key={item.product.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-coffee-dark">
                          <Link 
                            to={`/product/${item.product.id}`}
                            className="hover:text-coffee-medium transition-colors"
                          >
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-text-medium text-sm line-clamp-2">
                          {item.product.description}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-text-light hover:text-error transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-text-medium">Quantity:</span>
                        <div className="flex items-center border border-border-light rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-beige transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-1 border-x border-border-light min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-beige transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-coffee-dark">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-sm text-text-light">
                          ${item.product.price.toFixed(2)} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold text-coffee-dark mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-text-medium">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-medium">Shipping</span>
                  <span className="font-medium">
                    {total >= 50 ? 'Free' : '$9.99'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-medium">Tax</span>
                  <span className="font-medium">${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-border-light pt-4">
                  <div className="flex justify-between text-lg font-bold text-coffee-dark">
                    <span>Total</span>
                    <span>
                      ${(total + (total >= 50 ? 0 : 9.99) + (total * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {total < 50 && (
                <div className="bg-beige p-4 rounded-lg mb-6">
                  <p className="text-sm text-coffee-dark">
                    Add <strong>${(50 - total).toFixed(2)}</strong> more for free shipping!
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <Link to="/checkout" className="w-full btn-primary text-center">
                  Proceed to Checkout
                </Link>
                <Link to="/products" className="w-full btn-outline text-center">
                  <ArrowLeft className="w-4 h-4" />
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-border-light">
                <h3 className="font-medium text-coffee-dark mb-3">We Accept</h3>
                <div className="flex gap-2">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-orange-400 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-800 to-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    AMEX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;