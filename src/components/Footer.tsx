import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-[#D4AF37]">Nakshatra</h3>
            <p className="text-gray-300 mb-4">
              Elevate your style with our premium collection of designer dresses for rent. 
              Perfect for weddings, parties, and special occasions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  Dress Catalog
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-[#D4AF37]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">
                  123 Fashion Street, Luxury Lane<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#D4AF37]" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#D4AF37]" />
                <a href="mailto:info@nakshatra.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
                  info@nakshatra.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Nakshatra Boutique & Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;