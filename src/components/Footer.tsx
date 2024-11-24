import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import icon from '/icon-3.png';

export function Footer() {
  return (
    <footer className="bg-black/80 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={icon} alt="MIO Marketing" className="w-6 h-6" />
              <span className="text-lg font-display font-bold tracking-widest">MIO Marketing</span>
            </div>
            <p className="text-gray-400 font-light">Transforming talented artists into global sensations</p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-purple-400 transition font-light">Services</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition font-light">Pricing</a></li>
              <li><a href="#success" className="hover:text-purple-400 transition font-light">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition font-light">Contact</a></li>
            </ul>
          </div>
          <div id="contact">
            <h4 className="font-display font-bold mb-4 tracking-wider">CONTACT</h4>
            <ul className="space-y-2 text-gray-400 font-light">
              <li>makeitoutmarketing@gmail.com</li>
              <li>+1 (302) 359-1710</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/miomarketingg/" className="text-gray-400 hover:text-purple-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-light">
          <p>&copy; {new Date().getFullYear()} Make It Out. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}