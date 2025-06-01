import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/faq';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center text-[#800020] mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none ${
                  openIndex === index ? 'bg-[#800020] text-white' : 'bg-white text-gray-800 hover:bg-gray-50'
                } transition-colors duration-300`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;