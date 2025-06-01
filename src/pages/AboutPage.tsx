import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-[#800020] mb-8">About Nakshatra</h1>
        
        {/* Our Story */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg" 
                  alt="Boutique interior" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-serif font-bold text-[#800020] mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Nakshatra Boutique & Rentals was founded in 2018 with a simple vision: to make high-quality designer outfits accessible to everyone for their special occasions. 
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small collection has now grown into a comprehensive range of traditional and contemporary outfits catering to various occasions and preferences.
                </p>
                <p className="text-gray-600">
                  Our name "Nakshatra" (meaning 'constellation' in Sanskrit) represents our belief that everyone deserves to shine bright like a star on their special day, regardless of budget constraints.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif font-bold text-[#800020] mb-6 text-center">Our Mission</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 text-lg mb-8">
                "To provide high-quality, designer outfits at affordable rental prices, making luxury fashion accessible to all while promoting sustainable fashion choices."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-4">
                  <div className="h-16 w-16 rounded-full bg-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-xl mb-2">Quality</h3>
                  <p className="text-gray-600">Providing pristine, well-maintained designer outfits that look brand new.</p>
                </div>
                <div className="p-4">
                  <div className="h-16 w-16 rounded-full bg-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-xl mb-2">Affordability</h3>
                  <p className="text-gray-600">Making luxury fashion accessible through our rental model.</p>
                </div>
                <div className="p-4">
                  <div className="h-16 w-16 rounded-full bg-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-xl mb-2">Sustainability</h3>
                  <p className="text-gray-600">Promoting eco-friendly fashion choices through our rental service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-[#800020] mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg" 
                alt="Founder" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Anjali Sharma</h3>
                <p className="text-[#D4AF37] mb-4">Founder & Creative Director</p>
                <p className="text-gray-600">
                  With over 15 years of experience in fashion design, Anjali brings her expertise and creative vision to Nakshatra.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg" 
                alt="Co-founder" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Rahul Kapoor</h3>
                <p className="text-[#D4AF37] mb-4">Co-founder & Operations Head</p>
                <p className="text-gray-600">
                  Rahul manages the business operations, ensuring smooth functioning and exceptional customer service.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg" 
                alt="Stylist" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Priya Malhotra</h3>
                <p className="text-[#D4AF37] mb-4">Lead Stylist</p>
                <p className="text-gray-600">
                  Priya helps our customers find the perfect outfit and accessories for their specific occasion and body type.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-[#800020] mb-8">What Our Customers Say</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block h-20 w-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                    alt="Customer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <blockquote className="text-xl italic text-gray-600 mb-4">
                  "I rented a lehenga for my sister's wedding and received countless compliments. The quality was impeccable, and the entire process was smooth. I'll definitely be coming back for future events!"
                </blockquote>
                <cite className="font-medium text-gray-900 block">— Meera Patel, Delhi</cite>
              </div>
              
              <div className="flex justify-center space-x-2">
                <button className="w-3 h-3 rounded-full bg-[#800020]"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;