import React, { useState, useEffect, useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './styles.css';

function Detail() {
  const context = useContext(ShoppingCartContext);
  const { setOpenModal, productShow } = useContext(ShoppingCartContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productExists = context.cartProducts.some(product => product.id === productShow.id);
    setIsInCart(productExists);
  }, [context.cartProducts, productShow.id]);

  const appcart = (event, data) => {
    event.stopPropagation();

    const productExists = context.cartProducts.some(product => product.id === data.id);

    if (!productExists) {
      context.setCount(context.count + 1);
      context.setCartProducts([...context.cartProducts, data]);
    }

    context.openCheckoutSideMenu();
    context.setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <aside className="detail">
      <div className="card">
        <Zoom>
          <img
            src={productShow.image.match(/https?:\/\/[^\s"]+/g)[0]}
            alt={productShow.title}
            className="product-image"
          />
        </Zoom>
        <div className="card-content">
          <h2 className="card-title">{productShow.title}</h2>
          <p className="card-description">{productShow.description}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xl font-bold text-green-600">${productShow.price}</span>
            <button
              className="bg-blue-500 text-white m-3 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 z-1"
              onClick={(event) => appcart(event, productShow)}
            >
              Lo Quiero
            </button>
          </div>
          <div className="card-buttons">
            <button className="close-btn" onClick={onCancel}>✖️</button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Detail;
