import { ShoppingCartContext } from '../../../../Context';
import React, { useContext, useEffect, useState } from 'react';

const Collage = () => {
  const context = useContext(ShoppingCartContext);
  const [randomNumbers, setRandomNumbers] = useState([]);
  //console.log(context.items)
  // Close the checkout side menu immediately
  useEffect(() => {
    context.setIsCheckoutSideMenuOpen(false);
  }, [context]);

  // Function to generate random numbers
  function getRandomNumbers(count, min, max) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

  // Set random numbers once context.items is available
  useEffect(() => {
    if (context.items && context.items.length > 4) {
      const numbers = getRandomNumbers(4, 1, context.items.length - 2);
      setRandomNumbers(numbers);
    }
  }, [context.items]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Featured Products
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Discover our most popular products selected just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 lg:px-12">
        {context.items &&
          randomNumbers.map((element, index) => (
            <div key={index} className="relative group">
              <img
                src={context.items[element].image}
                alt={"Product " + element}
                className="w-full h-64 object-cover rounded-lg shadow-lg transform transition duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">
                    {context.items[element].name}
                  </h3>
                  <p className="text-sm font-light">
                    ${context.items[element].price}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Collage;
