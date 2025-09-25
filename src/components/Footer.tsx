import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="container section-padding">
        <div className="grid grid-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <Coffee className="w-8 h-8" />
              Sammelo
            </Link>
            <p className="text-cream opacity-90">
              Premium coffee beans, professional equipment, and accessories for the perfect cup every time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-coffee-medium rounded-full hover:bg-coffee-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-coffee-medium rounded-full hover:bg-coffee-light transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-coffee-medium rounded-full hover:bg-coffee-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-cream opacity-90 hover:opacity-100 transition-opacity">All Products</Link></li>
              <li><Link to="/products?category=beans" className="text-cream opacity-90 hover:opacity-100 transition-opacity">Coffee Beans</Link></li>
              <li><Link to="/products?category=machines" className="text-cream opacity-90 hover:opacity-100 transition-opacity">Machines</Link></li>
              <li><Link to="/products?category=accessories" className="text-cream opacity-90 hover:opacity-100 transition-opacity">Accessories</Link></li>
              <li><Link to="/blog" className="text-cream opacity-90 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-cream opacity-90 hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><a href="#" className="text-cream opacity-90 hover:opacity-100 transition-opacity">Shipping Info</a></li>
              <li><a href="#" className="text-cream opacity-90 hover:opacity-100 transition-opacity">Returns</a></li>
              <li><a href="#" className="text-cream opacity-90 hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="text-cream opacity-90 hover:opacity-100 transition-opacity">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent-gold" />
                <span className="text-cream opacity-90">123 Coffee Street, Bean City, BC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-gold" />
                <span className="text-cream opacity-90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-gold" />
                <span className="text-cream opacity-90">hello@sammelo.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-medium mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream opacity-75">
            © 2024 Sammelo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream opacity-75 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-cream opacity-75 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="text-cream opacity-75 hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;