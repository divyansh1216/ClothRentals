import React from 'react';
import { Link } from 'react-router-dom';
import { dresses } from '../data/dresses';
import DressCard from './DressCard';

const FeaturedDresses: React.FC = () => {
  const featuredDresses = dresses.filter(dress => dress.isFeatured);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#800020]">Featured Collection</h2>
            <p className="text-gray-600 mt-2">Our most popular and trending outfits</p>
          </div>
          <Link 
            to="/catalog" 
            className="mt-4 md:mt-0 inline-block px-6 py-2 border-2 border-[#800020] text-[#800020] font-medium rounded-md hover:bg-[#800020] hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDresses.map(dress => (
            <DressCard key={dress.id} dress={dress} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDresses;