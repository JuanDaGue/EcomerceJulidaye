import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { isAuthenticated, signOut } from "../Utils";
import { ShoppingCartContext } from '../../Context';

const UserMenu = ({ className }) => {
  const context = useContext(ShoppingCartContext);

  const handleSignOut = () => {
    const confirmed = window.confirm("¿Estás seguro de que quieres proceder?");
    if (confirmed) {
      signOut();
      window.location.href = "/SignIn"; // Redirigir a la página de inicio de sesión después de cerrar sesión
    }
  };

  const toggleCart = () => {
    context.setIsCheckoutSideMenuOpen(!context.isCheckoutSideMenuOpen);
  };

  return (
    <ul className={`${className} items-center space-x-4`}>
      {isAuthenticated() ? (
        <>
          <li>
            <NavLink to="/MyOrders" className="text-black hover:text-blue-500">
              Mis Pedidos
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyAccount" className="text-black hover:text-blue-500">
              Mi Cuenta
            </NavLink>
          </li>
          <li>
            <button onClick={handleSignOut} className="text-black hover:text-blue-500">
              Cerrar Sesión
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/SignIn" className="text-black hover:text-blue-500">
              Iniciar Sesión
            </NavLink>
          </li>
          <li>
            <NavLink to="/SignUp" className="text-black hover:text-blue-500">
              Registrarse
            </NavLink>
          </li>
        </>
      )}
      <li className="relative">
        <NavLink onClick={toggleCart} className="hover:text-blue-500">
          <FontAwesomeIcon icon={faCartPlus} />
        </NavLink>
        {/* Shopping Cart Icon with item count */}
        <span className="absolute top-0 right-0 left-5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {context.cartProducts.length}
        </span>
      </li>
    </ul>
  );
};

export default UserMenu;
