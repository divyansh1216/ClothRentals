import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  occasion: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: 'Nakshatra made my sister\'s wedding so special! The lehenga I rented was absolutely stunning and fit perfectly. The staff was incredibly helpful in finding the perfect outfit for me.',
    occasion: 'Wedding'
  },
  {
    id: 2,
    name: 'Aisha Khan',
    text: 'I was worried about finding the right outfit for my engagement ceremony, but Nakshatra made it stress-free. Their collection is amazing, and I received so many compliments!',
    occasion: 'Engagement'
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    text: 'My wife and I rented matching outfits for a family function. The quality was exceptional, and the rental process was smooth and professional. Highly recommended!',
    occasion: 'Family Function'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-[#800020] mb-12">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#800020] flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-[#D4AF37]">{testimonial.occasion}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;