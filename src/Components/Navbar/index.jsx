import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from '../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { isAuthenticated, signOut } from '../Utils'; // Import authentication and signOut logic
import { Link } from 'react-router-dom';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  // Handle sign out
  const handleSignOut = () => {
    const confirmed = window.confirm('Are you sure you want to proceed?');
    if (confirmed) {
      signOut();
      window.location.href = '/SignIn'; // Redirect to Sign In page after signing out
    } 
  };

  const name = () => {
    if(localStorage?.account){
      return JSON.parse(localStorage.account).email
    }
    else{
      return 'noUser@ShoppingBagIcon.com'
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-30 top-0 w-full py-10 px-8 bg-white shadow-md text-sm font-light">
      <ul className="flex items-center space-x-4">
        <li className="font-bold text-lg">
          <NavLink to='/shopi' className="hover:text-blue-700">
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className="text-black hover:text-blue-500" onClick={() => context.setSearchCategory('')}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/Cuadros' className="text-black hover:text-blue-500" onClick={() => context.setSearchCategory('Cuadros')}>
            Cuadros
          </NavLink>
        </li>
        <li>
          <NavLink to='Esculturas' className="text-black hover:text-blue-500" onClick={() => context.setSearchCategory('Esculturas')}>
            Esculturas
          </NavLink>
        </li>
        <li>
          <NavLink to='/Artesanias' className="text-black hover:text-blue-500" onClick={() => context.setSearchCategory('Artesanias')}>
            Artesanias
          </NavLink>
        </li>
        <li>
          <NavLink to='/Toys' className="text-black hover:text-blue-500" onClick={() => context.setSearchCategory('Toys')}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/Others' className="text-black hover:text-blue-500" onClick={() => context.setSearchCategory('jewelery')}>
            Others
          </NavLink>
        </li>
      </ul>
      
      {/* Logo in the middle of the Navbar */}
      <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
        <Link to="/shopi">
          <img src="/Asimplelogo.png" alt="Logo" className="h-20 object-contain" />
        </Link>
      </div>

      <ul className="flex items-center space-x-4">
        {/* If the user is authenticated, show the My Orders and My Account links */}
        {isAuthenticated() ? (
          <>
            <li className="text-gray-700">{name()}</li>
            <li>
              <NavLink to='/MyOrders' className="text-black hover:text-blue-500">
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to='/MyAccount' className="text-black hover:text-blue-500">
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
          // If the user is not authenticated, show the Sign In and Sign Up links
          <>
            <li>
              <NavLink to='/SignIn' className="text-black hover:text-blue-500">
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to='/SignUp' className="text-black hover:text-blue-500">
                Sign Up
              </NavLink>
            </li>
          </>
        )}
        <li className="relative">
          <NavLink className="hover:text-blue-500">
            <FontAwesomeIcon icon={faCartPlus} />
          </NavLink>
          {/* Shopping Cart Icon with item count */}
          <span className="absolute top-0 right-0 left-7 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {context.cartProducts.length}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
