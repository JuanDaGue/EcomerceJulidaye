import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from '../Home';
import MyOrders from '../MyOrders';
import MyOrder from '../MyOrder';
import MyAccount from '../MyAccount';
import SignIn from '../SignIn';  // Corrected "SingIn" to "SignIn"
import SignUp from '../SignUp';  // Corrected "SingUp" to "SignUp"
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import EcommerceCard from '../Shopi';
import { isAuthenticated } from '../../Components/Utils'; // Import the authentication utility
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import Politicas from '../Politics';
import Footer from '../Shopi/components/Footer';

// Component to handle protected routes
const ProtectedRoute = ({ element }) => {
  if (isAuthenticated()) {
    return element;
  } else {
    return <SignIn />;
  }
};

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/MyAccount', element: <ProtectedRoute element={<MyAccount />} /> },
    { path: '/MyOrder', element: <ProtectedRoute element={<MyOrder />} /> },
    { path: '/MyOrders', element: <ProtectedRoute element={<MyOrders />} /> },
    { path: '/MyOrders/Last', element: <ProtectedRoute element={<MyOrder />} /> },
    { path: '/MyOrders/:id', element: <ProtectedRoute element={<MyOrder />} /> },
    { path: '/SignIn', element: <SignIn /> }, // Corrected "SingIn" to "SignIn"
    { path: '/SignUp', element: <SignUp /> }, // Added SignUp route
    { path: '/Cuadros', element: <Home /> },
    { path: '/Esculturas', element: <Home /> },
    { path: '/Artesanias', element: <Home /> },
    { path: '/Toys', element: <Home /> },
    { path: '/Others', element: <Home /> },
    { path: '/Shopi', element: <EcommerceCard /> },
    { path: '/*', element: <NotFound /> },
    {path: '/aboutus', element:<AboutUs/>},
    {path: '/contact', element:<Contact/>},
    {path: '/politics', element:<Politicas/>},
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
        <Footer/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
