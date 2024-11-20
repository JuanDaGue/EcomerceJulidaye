import { useState } from 'react'
import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import OrderCar from '../../Components/OrderCar';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const indexUrl =()=>{
    const indexOrder = window.location.href.split('/').pop();
//    console.log(indexOrder);
    if(indexOrder.search(/last/img)>-1){
      return context.order.slice(-1)[0].products
    }
    else{
      return context.order[indexOrder].products 
    }
  }

  return (
    <>
      <Layout>
 
         <section className="bg-gray-50 py-12 px-6">
         <div className="container mx-auto">
         <div className='flex justify-between items-center p-6 border-b border-gray-200 relative'>
            <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>My Order</h2>
            <Link to='/MyOrders'>
                    <button className='text-gray-500 hover:text-gray-800 transition-colors duration-200 absolute top-0 right-3' ><FontAwesomeIcon icon={faArrowUpRightFromSquare} fade /></button>
                  </Link>
        </div>
        {context.order[0] &&
        <OrderCar items={indexUrl()}/> }
        </div>
        </section>
      </Layout>
    </>
  )
}
export default MyOrder
