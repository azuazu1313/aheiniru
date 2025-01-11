import React, { useState } from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: ''
  });

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Debug: Log form data (replace this with an API call)
    console.log('Form submitted:', formData);

    fetch('https://hook.eu2.make.com/h4tmkr21t3oepwhc61iiupspqvui9njy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
      });
  };

  // JSX for the Hero Section
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a1a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 pt-20 pb-32 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
 <h1 className="text-4xl md:text-6xl font-bold mb-6">
  Unlock the <span className="text-[#FFD700]">7 Money Models</span> to Scale Your E-Commerce Brand to{' '}
  <motion.span
    className="text-[#FFD700]"
    style={{ display: 'inline-block' }} // Ensures it's treated as inline
    animate={{ scale: [1, 1.006, 1], opacity: [1, 0.9, 1], color: ['#FFD700', '#FFC700', '#FFD700'],
    textShadow: [
      '0px 0px 2px #FFD700',
      '0px 0px 4px #FFC700',
      '0px 0px 2px #FFD700'
    ] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
  >
    $100,000/Month!
  </motion.span>
</h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Get actionable strategies, proven frameworks, and expert guidance to recover sales, boost conversions, and engage customers with ease. All in one FREE guide!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <div className="relative w-64 md:w-80">
            <div className="absolute inset-0 bg-[#FFD700] blur-md opacity-5 transform" />
            <img 
              src="https://i.imgur.com/XH7yZsZ.png"
              alt="7 Money Models Book"
              className="relative z-10 w-full h-auto rounded-2g shadow-3.5xl transform"
            />
          </div>
          
          <div className="w-full md:w-96">
            <form
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl"
              onSubmit={handleSubmit} // Attach form submit handler
            >
              <div className="space-y-4">
                <input
                  type="text"
                  name="firstName" // Add name for tracking
                  placeholder="First Name"
                  value={formData.firstName} // Controlled input
                  onChange={handleInputChange} // Handle input changes
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] text-white"
                  required
                />
                <input
                  type="email"
                  name="email" // Add name for tracking
                  placeholder="Email Address"
                  value={formData.email} // Controlled input
                  onChange={handleInputChange} // Handle input changes
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] text-white"
                  required
                />
                <input
                  type="tel"
                  name="phone" // Add name for tracking
                  placeholder="Phone Number"
                  value={formData.phone} // Controlled input
                  onChange={handleInputChange} // Handle input changes
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] text-white"
                />
                <CTAButton 
                  text="Send Me the 7 Money Models Now!" 
                  className="w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
