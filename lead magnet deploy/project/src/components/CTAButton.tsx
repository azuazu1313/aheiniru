import React from 'react';

interface CTAButtonProps {
  text: string;
  className?: string;
  scrollToTop?: boolean;
}

const CTAButton = ({ text, className = '', scrollToTop = false }: CTAButtonProps) => {
  const handleClick = () => {
    if (scrollToTop) {
      const formElement = document.querySelector('form');
      if (formElement) {
        const formPosition = formElement.getBoundingClientRect().top + window.scrollY - 165;
        window.scrollTo({ top: formPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`
        bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg
        transition-all duration-300 ease-out
        hover:bg-[#E5C100] hover:transform hover:scale-105 hover:shadow-lg
        active:scale-95
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default CTAButton;