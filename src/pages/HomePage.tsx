import React from 'react';
import Hero from '../components/Hero';
import FeaturedDresses from '../components/FeaturedDresses';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-serif font-bold text-[#800020] mb-4">
                Welcome to Nakshatra Boutique & Rentals
              </h2>
              <p className="text-gray-600 mb-6">
                At Nakshatra, we believe that everyone deserves to wear designer outfits for their special occasions without the hefty price tag. Our boutique offers a wide range of premium dresses available for rent, ensuring you look stunning without breaking the bank.
              </p>
              <p className="text-gray-600 mb-6">
                From traditional sarees and lehengas to modern gowns and anarkalis, our collection caters to all your fashion needs. Each piece is carefully selected for quality, design, and elegance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-[#D4AF37]">200+</h3>
                  <p className="text-gray-600">Outfits</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-[#D4AF37]">5000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg" 
                alt="Boutique collection" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg" 
                alt="Designer outfits" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg" 
                alt="Special occasion dresses" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg" 
                alt="Wedding collection" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#800020] mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Browse & Select</h3>
              <p className="text-gray-600">
                Explore our collection online or visit our store to find the perfect outfit for your occasion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Book & Try</h3>
              <p className="text-gray-600">
                Reserve your outfit by filling out our booking form. Visit us for a fitting session.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Wear & Return</h3>
              <p className="text-gray-600">
                Enjoy your special occasion looking fabulous. Return the outfit in good condition afterward.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedDresses />
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default HomePage;