import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm">&copy; 2024 E-commerce Platform. Contacto: luzadrianauchimalargo@gmail.com</p>
        </div>
        <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-4">
          <Link to="/aboutus" className="text-gray-400 hover:text-white transition-colors duration-300">
            Sobre Nosotros
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
            Contáctenos
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/politics" className="text-gray-400 hover:text-white transition-colors duration-300">
            Políticas
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
