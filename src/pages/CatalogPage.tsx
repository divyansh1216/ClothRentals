import React, { useState, useEffect } from 'react';
import { dresses } from '../data/dresses';
import DressCard from '../components/DressCard';
import CategoryFilter from '../components/CategoryFilter';
import { Search } from 'lucide-react';

const CatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDresses, setFilteredDresses] = useState(dresses);
  
  useEffect(() => {
    let result = dresses;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(dress => dress.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        dress => 
          dress.name.toLowerCase().includes(query) || 
          dress.description.toLowerCase().includes(query) ||
          dress.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredDresses(result);
  }, [selectedCategory, searchQuery]);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold text-[#800020] mb-2">Our Collection</h1>
        <p className="text-gray-600 mb-8">Find the perfect outfit for your special occasion</p>
        
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search outfits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <CategoryFilter 
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-[#800020]" />
                    <span className="ml-2 text-gray-600">Under ₹1000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-[#800020]" />
                    <span className="ml-2 text-gray-600">₹1000 - ₹2000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-[#800020]" />
                    <span className="ml-2 text-gray-600">₹2000 - ₹3000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-[#800020]" />
                    <span className="ml-2 text-gray-600">Above ₹3000</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', 'Free Size'].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:border-[#800020] hover:text-[#800020] transition-colors duration-300"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            {filteredDresses.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-xl font-medium text-gray-900 mb-2">No outfits found</h2>
                <p className="text-gray-600 mb-4">
                  We couldn't find any outfits matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-[#800020] text-white rounded-md hover:bg-[#D4AF37] transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <p className="mb-4 text-gray-600">Showing {filteredDresses.length} outfits</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDresses.map(dress => (
                    <DressCard key={dress.id} dress={dress} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;