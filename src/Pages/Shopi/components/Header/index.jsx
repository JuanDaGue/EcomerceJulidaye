import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import custom CSS file for background image

const Header = () => {
  return (
    <header className="relative flex flex-col items-center justify-center min-h-screen text-white mt-20 overflow-hidden">
      {/* Background image with a gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-500 opacity-30 z-10"></div>
      <div className="header-bg absolute inset-0 z-0"></div> {/* Background image container */}

      <div className="relative z-20 text-center px-4 lg:px-8">
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-md text-black">
        BIENVENIDOS A JULIDAYE
        </h1>
        <p className="mt-2 text-lg lg:text-2xl font-light max-w-3xl mx-auto text-white drop-shadow-sm">
          
        "Descubre la belleza de nuestros productos artesanales, cuidadosamente elaborados a mano con pasión y dedicación."
        </p>
        <Link to="/" className="mt-6 inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black transition duration-300 ease-in-out rounded-lg text-lg lg:text-xl font-semibold shadow-lg">
        BIENVENIDO
        </Link>
      </div>
    </header>
  );
};

export default Header;
