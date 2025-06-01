import React from 'react';
import BookingForm from '../components/BookingForm';
import FAQSection from '../components/FAQSection';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-[#800020] mb-2">Book Your Outfit</h1>
        <p className="text-gray-600 mb-8">
          Fill out the form below to request a booking for your special occasion.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          
          {/* Booking Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#800020] mb-4">Rental Process</h2>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Submit a Request</h3>
                    <p className="text-gray-600 mt-1">
                      Fill out the booking form with your details and preferences.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Confirmation</h3>
                    <p className="text-gray-600 mt-1">
                      We'll contact you within 24 hours to confirm availability and details.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Visit for Fitting</h3>
                    <p className="text-gray-600 mt-1">
                      Schedule a fitting session at our store to ensure the perfect fit.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Pickup & Return</h3>
                    <p className="text-gray-600 mt-1">
                      Collect your outfit before your event and return it within the agreed timeframe.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-bold text-[#800020] mb-4">Rental Terms</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#D4AF37] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Standard rental period is 3 days.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#D4AF37] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Security deposit (30-50% of outfit value) is required.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#D4AF37] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Basic alterations are included in the rental price.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#D4AF37] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Cancellations made 48+ hours before pickup receive a full refund.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#D4AF37] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Late returns incur an additional day's rental fee.</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  Have questions about our rental process? Check our FAQs or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;