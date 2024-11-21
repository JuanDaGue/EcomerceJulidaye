import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center fixed z-30 top-0 w-full py-4 px-6 bg-white shadow-md text-sm font-light">
      {/* Left navigation links */}
      <NavLinks className="hidden md:flex" />

      {/* Logo */}
      <Logo />

      {/* User menu for desktop */}
      <UserMenu className="hidden md:flex" />

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-black hover:text-blue-500 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Mobile menu */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
