import React, { useState } from 'react';
import { BookingFormData } from '../types';

interface BookingFormProps {
  dressId?: string;
  dressName?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ dressId, dressName }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    dressId: dressId || '',
    dressName: dressName || '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          dressId: dressId || '',
          dressName: dressName || '',
          eventDate: '',
          eventType: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-serif font-semibold text-[#800020] mb-4">
        {dressName ? `Book "${dressName}"` : 'Book Your Outfit'}
      </h2>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
          <h3 className="font-medium text-green-800">Booking Request Sent!</h3>
          <p className="mt-2">Thank you for your booking request. We'll contact you shortly to confirm availability and details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventDate" className="block text-gray-700 mb-1">Event Date</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-gray-700 mb-1">Event Type</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              >
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Engagement">Engagement</option>
                <option value="Reception">Reception</option>
                <option value="Sangeet">Sangeet</option>
                <option value="Party">Party</option>
                <option value="Photoshoot">Photoshoot</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1">Additional Information</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors duration-300 ${
              isSubmitting ? 'bg-gray-400' : 'bg-[#800020] hover:bg-[#D4AF37]'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
          </button>
          
          <p className="text-sm text-gray-500 mt-2">
            * We'll contact you within 24 hours to confirm availability and details.
          </p>
        </form>
      )}
    </div>
  );
};

export default BookingForm;