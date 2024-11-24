import React from 'react';
import icon from '/icon-3.png';


export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 pr-8">
          <img src={icon} alt="MIO Marketing" className="w-8 h-8" />
          <span className="text-xl heading-style font-bold tracking-widest">MIO Marketing</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-wider pr-8">
          <a href="#services" className="hover:text-purple-400 transition">SERVICES</a>
          <a href="#pricing" className="hover:text-purple-400 transition">PRICING</a>
          <a href="#success" className="hover:text-purple-400 transition">SUCCESS STORIES</a>
          <a href="#contact" className="hover:text-purple-400 transition">CONTACT</a>
        </div>
        <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition text-sm tracking-wider pr-8">
          GET STARTED
        </button>
      </div>
    </nav>
  );
}