//import { useState } from 'react'
import Layout from '../../Components/Layout'
import { useContext } from 'react'

import { ShoppingCartContext } from '../../Context';

import OrdersCar from '../../Components/OrdersCar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
function MyOrders() {


    const context = useContext(ShoppingCartContext);
    const onCancel = () => { context.setIsCheckoutSideMenuOpen(false) };
    const removeItem = (id) => {
      context.setCartProducts(context.cartProducts.filter(item => item.id !== id));
    };
   
    return (
      <>
<Layout>
  <section className="bg-gray-50 py-3 px-8 ">
    <div className="container mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 text-center mx-auto">
          My Orders
        </h2>
      </div>

      {/* Orders List */}
      <div className="mt-10">
        {context.order[0] ? (
          <OrdersCar items={context.order} />
        ) : (
          <p className="text-center text-gray-600 text-lg">
            You have no orders at the moment.
          </p>
        )}
      </div>
    </div>
  </section>
</Layout>

      </>
    )
  
 
  
}

export default MyOrders
