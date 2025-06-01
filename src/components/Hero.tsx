import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg" 
          alt="Elegant dresses" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
          <span className="block">Elegance for Every</span>
          <span className="block text-[#D4AF37]">Special Occasion</span>
        </h1>
        
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Discover our exquisite collection of designer outfits available for rent. 
          Make your special day unforgettable without breaking the bank.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/catalog"
            className="px-6 py-3 bg-[#800020] text-white font-medium rounded-md hover:bg-[#D4AF37] transition-colors duration-300 transform hover:scale-105"
          >
            Browse Collection
          </Link>
          <Link
            to="/booking"
            className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#800020] transition-colors duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </section>
  );
};

export default Hero;