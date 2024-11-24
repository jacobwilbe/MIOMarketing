import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <div className={`relative bg-purple-900/20 rounded-2xl p-8 backdrop-blur-sm ${isPopular ? 'border-2 border-purple-500' : ''}`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm tracking-wider">
          MOST POPULAR
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4 tracking-wider">{title.toUpperCase()}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-400 font-light">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <span className="text-gray-300 font-light">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-full font-semibold transition tracking-wider ${
        isPopular 
          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
          : 'border border-purple-600 hover:bg-purple-600/20'
      }`}>
        GET STARTED
      </button>
    </div>
  );
}