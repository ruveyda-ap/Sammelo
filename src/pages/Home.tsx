import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Award, Truck, Shield } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-coffee-dark to-coffee-medium text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative z-10 section-padding">
          <div className="grid grid-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Perfect Coffee,
                <span className="text-accent-gold"> Every Time</span>
              </h1>
              <p className="text-xl text-cream opacity-90 leading-relaxed">
                Discover premium coffee beans, professional equipment, and accessories 
                that transform your daily ritual into an extraordinary experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary text-lg px-8 py-4">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-coffee-dark">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium coffee setup"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-gold text-coffee-dark p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Coffee className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Premium Quality</div>
                    <div className="text-sm">Since 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">
              Why Choose Sammelo?
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              We're committed to delivering exceptional coffee experiences through quality, 
              expertise, and outstanding service.
            </p>
          </div>
          
          <div className="grid grid-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark">Premium Quality</h3>
              <p className="text-text-medium">
                Hand-selected beans from the world's finest coffee regions, roasted to perfection.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mx-auto">
                <Coffee className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark">Expert Curation</h3>
              <p className="text-text-medium">
                Our coffee experts carefully select and test every product we offer.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark">Fast Shipping</h3>
              <p className="text-text-medium">
                Free shipping on orders over $50. Fresh coffee delivered to your door.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-dark">Satisfaction Guarantee</h3>
              <p className="text-text-medium">
                Not happy with your purchase? We'll make it right with our 30-day guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-text-medium max-w-2xl mx-auto">
              Discover our most popular coffee beans, machines, and accessories 
              loved by coffee enthusiasts worldwide.
            </p>
          </div>
          
          <div className="grid grid-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products" className="btn-primary text-lg px-8 py-4">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-coffee-dark text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Stay Updated
            </h2>
            <p className="text-xl text-cream opacity-90">
              Get the latest coffee tips, new product announcements, and exclusive offers 
              delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-coffee-dark"
                required
              />
              <button type="submit" className="btn-primary bg-accent-gold text-coffee-dark hover:bg-yellow-400">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-cream opacity-75">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;