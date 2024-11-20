import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { handleFunction } from '../Utils';

function OrdersCar({ items }) {
    const context = useContext(ShoppingCartContext);

    const totalQuantity = (elements) => {
        return elements.totalProducts.reduce((sum, product) => sum + product.quantity, 0);
    };
    //totalQuantity(items)
    return (
        <div className="shopping-cart bg-white shadow-lg rounded-lg p-6 w-80 max-w-full overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Orders with s</h2>
            <ul className="space-y-6">
  {items.map((item, index) => (
    <li key={index} className="flex items-center justify-between bg-white p-4 shadow-lg rounded-lg">
      <Link to={`/MyOrders/${index}`} className="flex-1">
        {/* Date and Order Details */}
        <div className="border-t border-gray-200 pt-4">
          {/* Order Date */}
          <h2 className="text-sm font-bold text-white bg-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200">
            {new Date(item.date).toLocaleDateString()}
          </h2>

          {/* Total Price and Items */}
          <div className="mt-2 flex justify-between w-100">
            <p className="text-lg font-semibold text-gray-800">
              Total: <span className="font-bold text-green-600">${item.totalPrice}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Items: <span className="font-bold">{totalQuantity(item)}</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  ))}
</ul>

        </div>
    );
}

export default OrdersCar;
