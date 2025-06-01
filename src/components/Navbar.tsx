import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-[#800020]" />
            <div className="ml-2">
              <h1 className="text-xl font-serif font-bold text-[#800020]">Nakshatra</h1>
              <p className="text-xs text-gray-600 -mt-1">Boutique & Rentals</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300">
              About
            </Link>
            <Link to="/catalog" className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300">
              Catalog
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300">
              Contact
            </Link>
            <Link
              to="/booking"
              className="bg-[#800020] text-white px-4 py-2 rounded hover:bg-[#D4AF37] transition-colors duration-300"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/catalog"
                className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Catalog
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-[#D4AF37] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className="bg-[#800020] text-white px-4 py-2 rounded text-center hover:bg-[#D4AF37] transition-colors duration-300"
                onClick={toggleMenu}
              >
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;