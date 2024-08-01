import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Reset form after 3 seconds
  };

  return (
    <section className='w-full lg:min-h-screen overflow-auto  bg-[#1A1A1E] text-white flex flex-col'>
      <div className='p-10'>
        <button 
          onClick={() => navigate(-1)} 
          className="hover:text-[#6556CD] flex items-center gap-2 text-base sm:text-lg"
        >
          <i className="ri-arrow-left-line"></i> Back
        </button>
      </div>

      <div className="flex-grow py-8 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading mb-4 bg-[#6556CD] text-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase">
              Contact Us
            </h2>
            <p className="font-heading mt-2 lg:text-2xl text-lg leading-8 font-semibold tracking-tight sm:text-4xl">
              We’d Love to Hear from You
            </p>
            <p className="mt-4 max-w-2xl  text-sm lg:text-lg mx-auto">
              Whether you have questions, feedback, or need assistance, reach out to us and we’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="bg-[#2D2D2D] rounded-lg p-6 flex-1 min-w-0">
              <h3 className="lg:text-xl text-lg font-semibold mb-4">Contact Information</h3>
              <p className="mb-4 flex items-center">
                <i className="ri-map-pin-line text-xl mr-2"></i>
                123 Movie Lane, Bollywood, Mumbai, India
              </p>
              <p className="mb-4 flex items-center">
                <i className="ri-phone-line text-xl mr-2"></i>
                +91 123-4567
              </p>
              <p className="mb-4 flex items-center">
                <i className="ri-mail-line text-xl mr-2"></i>
                support@movieverse.com
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-white">
                  <i className="ri-twitter-line text-2xl"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:text-white">
                  <i className="ri-facebook-line text-2xl"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#C13584] hover:text-white">
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
              </div>
            </div>

            <div className="bg-[#2D2D2D] rounded-lg p-6 flex-1 min-w-0">
              {submitted ? (
                <div className="text-center">
                  <p className="text-2xl font-semibold mt-8 mb-4">Thank you for your message!</p>
                  <p className="text-lg">
                    We appreciate you reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full p-3 bg-[#1A1A1E] border border-gray-600 rounded-lg text-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full p-3 bg-[#1A1A1E] border border-gray-600 rounded-lg text-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="block w-full p-3 bg-[#1A1A1E] border border-gray-600 rounded-lg text-gray-300"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#6556CD] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a40a5]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
