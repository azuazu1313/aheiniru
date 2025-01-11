import React from 'react';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Repeat, 
  Bot, 
  CheckCircle 
} from 'lucide-react';
import CTAButton from './CTAButton';

const FeaturesSection = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#FFD700]" />,
      title: "Boost Conversions",
      description: "Proven tactics to turn visitors into loyal customers"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-[#FFD700]" />,
      title: "Recover Lost Sales",
      description: "Strategies to reclaim abandoned carts with ease"
    },
    {
      icon: <Users className="w-8 h-8 text-[#FFD700]" />,
      title: "Personalize Engagement",
      description: "Automate customer interactions for maximum impact"
    },
    {
      icon: <Repeat className="w-8 h-8 text-[#FFD700]" />,
      title: "Increase Lifetime Value",
      description: "Retain customers and increase profitability"
    },
    {
      icon: <Bot className="w-8 h-8 text-[#FFD700]" />,
      title: "Scale with AI",
      description: "Leverage the power of AI to save time and drive results"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#FFD700]" />,
      title: "Real-World Success",
      description: "See examples of brands that grew with these methods"
    }
  ];

  return (
    <div className="bg-[#1a1a1a] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Here's What You'll Learn in the 7 Money Models
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover proven strategies and frameworks that have helped countless e-commerce brands scale to six figures and beyond
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/30 rounded-lg p-6 backdrop-blur-lg border border-gray-800">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton text="Send It To Me Now!" className="w-full md:w-auto" scrollToTop={true} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;