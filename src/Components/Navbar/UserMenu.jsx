import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { isAuthenticated, signOut } from "../Utils";

const UserMenu = ({ className }) => {
  const handleSignOut = () => {
    const confirmed = window.confirm("Are you sure you want to proceed?");
    if (confirmed) {
      signOut();
      window.location.href = "/SignIn"; // Redirect to Sign In page after signing out
    }
  };

  return (
    <ul className={`${className} items-center space-x-4`}>
      {isAuthenticated() ? (
        <>
          <li>
            <NavLink to="/MyOrders" className="text-black hover:text-blue-500">
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyAccount" className="text-black hover:text-blue-500">
              My Account
            </NavLink>
          </li>
          <li>
            <button onClick={handleSignOut} className="text-black hover:text-blue-500">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/SignIn" className="text-black hover:text-blue-500">
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/SignUp" className="text-black hover:text-blue-500">
              Sign Up
            </NavLink>
          </li>
        </>
      )}
      <li className="relative">
        <NavLink className="hover:text-blue-500">
          <FontAwesomeIcon icon={faCartPlus} />
        </NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
