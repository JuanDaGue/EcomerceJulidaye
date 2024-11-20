import { useContext } from 'react'

import { ShoppingCartContext } from '../../Context';
import './styles.css'
import OrderCar from '../OrderCar';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const onCancel = () => { context.setIsCheckoutSideMenuOpen(false) };
  const removeItem = (id) => {
    context.setCartProducts(context.cartProducts.filter(item => item.id !== id));
  };
  return  (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 top-0 h-full w-80 border-l border-gray-300 shadow-lg rounded-l-lg bg-white transition-transform duration-300 ease-in-out`}>
        <div className='flex justify-between items-center p-6 border-b border-gray-200 relative'>
            <h2 className='font-medium text-xl text-gray-800'>My Order</h2>
            <button className='text-gray-500 hover:text-gray-800 transition-colors duration-200 absolute top-4 right-3' onClick={onCancel}>✖️</button>
        </div>
        {/* Add your content here */}
        <OrderCar items={context.cartProducts} onRemove={removeItem}/>
    </aside>
);
}

export default CheckoutSideMenu
