import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const NavLinks = ({ className }) => {
  const context = useContext(ShoppingCartContext);

  const links = [
    { path: "/", label: "All", category: "" },
    { path: "/Cuadros", label: "Cuadros", category: "Cuadros" },
    { path: "/Esculturas", label: "Esculturas", category: "Esculturas" },
    { path: "/Artesanias", label: "Artesanias", category: "Artesanias" },
    { path: "/Toys", label: "Toys", category: "Toys" },
    { path: "/Others", label: "Others", category: "jewelery" },
  ];

  return (
    <ul className={`${className} items-center space-x-4`}>
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className="text-black hover:text-blue-500"
            onClick={() => context.setSearchCategory(link.category)}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
