import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const NavLinks = ({ className }) => {
  const context = useContext(ShoppingCartContext);

  const links = [
    { path: "/", label: "Galeria", category: "" },
    { path: "/Cuadros", label: "Cuadros", category: "Cuadros" },
    { path: "/Esculturas", label: "Esculturas", category: "Esculturas" },
    { path: "/Artesanias", label: "Artesanias", category: "Artesanias" },
    { path: "/Toys", label: "Juegos", category: "Toys" },
    { path: "/Others", label: "Otros", category: "jewelery" },
  ];

  return (
    <ul className={`${className} items-center space-x-4`}>
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={link.path === "/" ? "font-bold text-blue-500 hover:text-blue-700" : "text-black hover:text-blue-500"}
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
