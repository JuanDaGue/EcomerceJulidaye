// src/context/ShoppingCartContext.js

import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../Api/products';
import { fetchCategories } from '../Api/categories';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [productShow, setProductShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const [items, setItems] = useState([]);
  const [itemsf, setItemsf] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchItem, setSearchItem] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(10000000);
        setItems(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    loadProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    setItemsf(filterByTitleAndCategory(items, searchItem, searchCategory));
  }, [items, searchItem, searchCategory]);

  const filterByTitleAndCategory = (items, searchItem, searchCategory) => {
    return items?.filter(item => 
      item.name.toLowerCase().includes(searchItem.toLowerCase()) && 
      item.category?.name.toLowerCase().includes(searchCategory.toLowerCase())
    );
  };

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openModal,
      setOpenModal,
      productShow,
      setProductShow,
      isCheckoutSideMenuOpen,
      setIsCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      cartProducts,
      setCartProducts,
      order,
      setOrder,
      items,
      setItems,
      searchItem,
      setSearchItem,
      itemsf,
      setItemsf,
      searchCategory,
      setSearchCategory,
      categories,
      setCategories
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
