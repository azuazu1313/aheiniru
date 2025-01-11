import React from 'react';
import { Gift } from 'lucide-react';
import CTAButton from './CTAButton';

const BonusSection = () => {
  const bonuses = [
    {
      title: "Winning Ad Copy Blueprint",
      description: "Master the art of creating ads that turn views into loyal customers and skyrocketing profits!",
      value: "$297 Value"
    },
    {
      title: "Customer Connection Playbook",
      description: "Discover proven strategies to build offers your customers can't resist.",
      value: "$497 Value"
    },
    {
      title: "The Ultimate Follow-Up Formula",
      description: "Close more sales and boost your revenue with converting templates for emails, DMs, and more.",
      value: "$597 Value"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Here's Everything You're Getting
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover How These Powerful and Complete Systems Can Transform Your Business More Than Anything You've Tried Before...
        </p>

        <div className="max-w-7xl mx-auto px-0 mb-16">
          <img 
            src="https://i.imgur.com/Sq7sBBC.png" 
            alt="7 Money Models Cover" 
            className="w-full h-auto shadow-1xl rounded-lg transform hover:scale-1 transition-transform duration-300"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="flex items-center gap-4 bg-white/5 rounded-lg p-6">
              <Gift className="w-8 h-8 text-[#FFD700] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">{bonus.title}</h3>
                <p className="text-gray-400">{bonus.description}</p>
              </div>
              <span className="text-[#FFD700] font-bold ml-auto">{bonus.value}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton 
            text="Send Me The System for FREE Now!" 
            scrollToTop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default BonusSection;