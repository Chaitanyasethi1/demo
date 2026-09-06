import React from 'react';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-6 py-2 rounded-full font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    secondary: "bg-earth text-gray-900 hover:bg-earth-dark",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
