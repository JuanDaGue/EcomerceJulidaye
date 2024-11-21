import React from "react";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const MobileMenu = ({ onClose }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-md z-20">
      <ul className="flex flex-col items-center space-y-4 py-4">
        <NavLinks />
        <UserMenu />
        <button onClick={onClose} className="text-red-500 hover:underline mt-4">
          Close Menu
        </button>
      </ul>
    </div>
  );
};

export default MobileMenu;
