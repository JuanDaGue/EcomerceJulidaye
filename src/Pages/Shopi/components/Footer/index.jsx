import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm">&copy; 2024 E-commerce Platform. Contact: David.Guerrero@udea.edu.co</p>
        </div>
        <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
