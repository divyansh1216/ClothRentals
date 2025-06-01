import React from 'react';
import { Link } from 'react-router-dom';
import { Dress } from '../types';

interface DressCardProps {
  dress: Dress;
}

const DressCard: React.FC<DressCardProps> = ({ dress }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden h-72">
        <img 
          src={dress.imageUrl} 
          alt={dress.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        {dress.isFeatured && (
          <div className="absolute top-2 right-2 bg-[#D4AF37] text-white px-2 py-1 text-xs rounded">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm mb-2">{dress.description.substring(0, 80)}...</p>
          <Link 
            to={`/dress/${dress.id}`}
            className="inline-block bg-[#800020] hover:bg-[#D4AF37] text-white px-3 py-1 rounded text-sm transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{dress.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[#800020] font-bold">₹{dress.price}/day</span>
          <span className="text-sm text-gray-500 capitalize">{dress.category}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {dress.sizes.map((size) => (
            <span key={size} className="inline-block bg-gray-100 px-2 py-1 text-xs rounded">
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DressCard;