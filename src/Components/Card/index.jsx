import { ShoppingCartContext } from '../../Context';
import React, { useState, useEffect, useContext } from 'react';
import './styles.css'
import  {handleFunction} from '../Utils'
//cartProducts, setCartProducts
function Card({data}) {
    const context=useContext(ShoppingCartContext);
    const showProduct = (Detail) => {
        if(context.setOpenModal(false)){
            context.setOpenModal(state => !state);
            context.setProductShow(Detail);
        }
        else{
            context.setOpenModal(true);

            context.setProductShow(Detail);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      };
      const [isInCart, setIsInCart] = useState(false);

      useEffect(() => {
          // Check if the product is already in the cart
          const productExists = context.cartProducts.some(product => product.id === data.id);
          setIsInCart(productExists);
      }, [context.cartProducts, data.id]);
  
      const appcart = (event, data) => {
          event.stopPropagation();
          
          const productExists = context.cartProducts.some(product => product.id === data.id);
          
          if (!productExists) {
              context.setCount(context.count + 1);
              context.setCartProducts([...context.cartProducts, data]);
          }
          
          context.openCheckoutSideMenu();
          context.setOpenModal(false);
          
          // Update the state
          setIsInCart(productExists);
      };
      const addorder=(event,data)=>{
        event.stopPropagation();
        let orders=handleFunction(new Date(), data, data.price , 1)
        context.setOrder([...context.order],orders)
        //console.log(context.order)
    }
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 h-100 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
        onClick={() => showProduct(data)}>
            <figure className="relative">
                <img 
                    src = {data.image.match(/https?:\/\/[^\s"]+/g)}
 
                    alt={data.title} 
                    className="w-full h-60 object-cover" 
                />
                <span className="absolute top-2 right-2 bg-yellow-500 text-white rounded-full px-2 py-1 text-xs">
                    New
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-25 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button
            className={`px-4 py-2 rounded-md text-sm font-bold shadow-md ${isInCart ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
            onClick={(event) => appcart(event, data)}
        >
            {isInCart?  'In Cart': 'Add to Cart'}
        </button>
                </div>
                <p className="absolute bottom-0 left-0 text-lg font-semibold text-gray-800 rounded-lg m-2 px-2 py-0.5 bg-slate-100/60 bg-opacity-200">
                    {data.name}
                </p>
            </figure>
            <div className="p-4">

                <p className="text-gray-500 ">
                   {data.title}
                </p>
                <div className="mt-2 flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">${data.price}</span>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 z-10"
                    onClick={(event) => appcart(event, data)}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
