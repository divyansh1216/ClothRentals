import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dresses } from '../data/dresses';
import BookingForm from '../components/BookingForm';
import { Dress } from '../types';
import { CheckCircle, Clock, ArrowLeft } from 'lucide-react';

const DressDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [dress, setDress] = useState<Dress | null>(null);
  const [selectedImage, setSelectedImage] = useState('');
  
  useEffect(() => {
    const foundDress = dresses.find(d => d.id === id);
    if (foundDress) {
      setDress(foundDress);
      setSelectedImage(foundDress.imageUrl);
    }
  }, [id]);
  
  if (!dress) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-2">Outfit Not Found</h2>
          <p className="text-gray-600 mb-4">
            We couldn't find the outfit you're looking for.
          </p>
          <Link
            to="/catalog"
            className="px-4 py-2 bg-[#800020] text-white rounded-md hover:bg-[#D4AF37] transition-colors duration-300 inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }
  
  // Get related dresses (same category)
  const relatedDresses = dresses
    .filter(d => d.category === dress.category && d.id !== dress.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          to="/catalog"
          className="inline-flex items-center text-gray-600 hover:text-[#800020] mb-6 transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Catalog
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Gallery */}
            <div className="lg:w-1/2 p-6">
              <div className="mb-4 h-96 overflow-hidden rounded-lg">
                <img 
                  src={selectedImage} 
                  alt={dress.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedImage(dress.imageUrl)}
                  className={`h-20 w-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                    selectedImage === dress.imageUrl ? 'border-[#800020]' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={dress.imageUrl} 
                    alt={dress.name} 
                    className="h-full w-full object-cover object-center"
                  />
                </button>
                {/* Additional image buttons would go here */}
              </div>
            </div>
            
            {/* Details */}
            <div className="lg:w-1/2 p-6 border-t lg:border-t-0 lg:border-l border-gray-200">
              <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{dress.name}</h1>
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-[#800020]">₹{dress.price}/day</span>
                  <span className="ml-2 text-sm text-gray-500">(Security deposit applicable)</span>
                </div>
                <p className="text-gray-600 mb-6">{dress.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-2">Available Sizes</h2>
                    <div className="flex flex-wrap gap-2">
                      {dress.sizes.map((size) => (
                        <span key={size} className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-2">Colors</h2>
                    <div className="flex flex-wrap gap-2">
                      {dress.colors.map((color) => (
                        <span key={color} className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-2">Category</h2>
                    <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                      {dress.category}
                    </span>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-2">Availability</h2>
                    {dress.isAvailable ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Available for Rent</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-600">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>Currently Unavailable</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <BookingForm dressId={dress.id} dressName={dress.name} />
            </div>
          </div>
        </div>
        
        {/* Related Items */}
        {relatedDresses.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-[#800020] mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDresses.map((relatedDress) => (
                <Link 
                  key={relatedDress.id} 
                  to={`/dress/${relatedDress.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-72 overflow-hidden">
                    <img 
                      src={relatedDress.imageUrl} 
                      alt={relatedDress.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{relatedDress.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[#800020] font-bold">₹{relatedDress.price}/day</span>
                      <span className="text-sm text-gray-500">{relatedDress.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DressDetailsPage;