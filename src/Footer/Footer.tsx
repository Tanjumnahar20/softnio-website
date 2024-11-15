import React from 'react';
import footermg from '../assets/images/footerimg.png';
import { FaSquareFacebook, FaSquareTwitter, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="relative py-8 text-white bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                               url(${footermg})`
            }}
            >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Opening Hours */}
          <div className="p-4">
            <i className="far fa-clock text-2xl text-yellow-400 mb-2"></i>
            <h3 className="text-lg font-semibold mb-2">OPENING HOURS</h3>
            <p className="text-gray-300">Monday - Sunday</p>
            <p className="text-gray-300">9:00 AM to 11:30 PM</p>
          </div>

          {/* Let's Talk */}
          <div className="p-4">
            <i className="fas fa-phone-alt text-2xl text-yellow-400 mb-2"></i>
            <h3 className="text-lg font-semibold mb-2">LET'S TALK</h3>
            <p className="text-gray-300">Phone: 1-800-222-4545</p>
            <p className="text-gray-300">Fax: 1-800-222-4545</p>
          </div>

          {/* Book a Table */}
          <div className="p-4">
            <i className="far fa-envelope text-2xl text-yellow-400 mb-2"></i>
            <h3 className="text-lg font-semibold mb-2">BOOK A TABLE</h3>
            <p className="text-gray-300">Email: demo@website.com</p>
            <p className="text-gray-300">Support: support@website.com</p>
          </div>

          {/* Address */}
          <div className="p-4">
            <i className="fas fa-map-marker-alt text-2xl text-yellow-400 mb-2"></i>
            <h3 className="text-lg font-semibold mb-2">OUR ADDRESS</h3>
            <p className="text-gray-300">123 Street New York City, United</p>
            <p className="text-gray-300">States Of America</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <div className="flex justify-center space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 border border-white">
              <FaSquareFacebook />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 border border-white">
              <FaSquareTwitter />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 border border-white">
              <FaSquareInstagram />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 border border-white">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-300 text-sm">
            © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
