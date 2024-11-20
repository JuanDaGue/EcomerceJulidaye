import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import  {handleFunction} from '../Utils'
function OrderCar({ items, onRemove }) {
    const context = useContext(ShoppingCartContext);
    const [quantities, setQuantities] = useState([]);
    
    useEffect(() => {
        if(!onRemove){
            setQuantities(context.order.slice(-1)[0].totalProducts)
        }
        else{
            setQuantities(items.map(item => ({ id: item.id, quantity: 1 })));
            
        }
        
    }, [items],quantities);
    
    const handleQuantityChange = (id, delta) => {
        if(onRemove){
        setQuantities(quantities.map(q => 
            q.id === id ? { ...q, quantity: Math.max(1, q.quantity + delta) } : q
        ));}
    };

    
    const total = items.reduce((acc, item) => {
        const quantity = quantities.find(q => q.id === item.id)?.quantity || 1;
        return acc + item.price * quantity;
    }, 0);
 
    // console.log("function",context.order)
    // console.log("function2",items)
    const addorder=()=>{
        const ordersCar=handleFunction(new Date(), items, total.toFixed(2), quantities)
        context.setOrder([...context.order,ordersCar])
        context.setCartProducts([])
    }
    return (
        <div className="shopping-cart bg-white shadow-lg rounded-lg p-6 w-full max-w-md overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h2>
            <ul className="space-y-4">
                {items.map((item, index) => {
                    let quantity = quantities.find(q => q.id === item.id)?.quantity || 1;
                    return (
                        <li key={index} className="flex items-center justify-between space-x-4 py-4 border-b border-gray-200">
    {/* Product Image */}
    <img src={item.image?.match(/https?:\/\/[^\s"]+/g)} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />

    {/* Product Details */}
    <div className="flex-1 flex flex-col space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="text-green-600 font-bold">${item.price}</p>
        
        {/* Quantity Section with Label */}
        <div className="flex items-center space-x-2">
            <label className="text-gray-700 font-medium">Quantity:</label>
            <button 
                className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 px-2 py-1 rounded"
                onClick={() => handleQuantityChange(item.id, -1)}
            >
                -
            </button>
            <span className="px-3 py-1 border rounded bg-white">{quantity}</span>
            <button 
                className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 px-2 py-1 rounded"
                onClick={() => handleQuantityChange(item.id, 1)}
            >
                +
            </button>
        </div>
    </div>

    {/* Remove Button */}
    <button
        className={onRemove ? "text-red-500 hover:text-red-700 transition-colors duration-200 px-3 py-2 rounded-lg bg-white shadow" : "hidden"}
        onClick={() => onRemove(item.id)}
    >
        ✖️
    </button>
</li>

                    );
                })}
            </ul>
            <div className={` ${items.length>0 ? 'mt-6 border-t border-gray-200  w' : 'hidden'}`  }>
                <p className="text-lg font-semibold text-gray-800">Total: ${total.toFixed(2)}</p>
                <Link to='/MyOrders/Last'>
                    <button className={onRemove?"mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-bold shadow-md hover:bg-blue-600 transition-colors duration-200":"hidden"}
                    onClick={addorder }>
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default OrderCar;
