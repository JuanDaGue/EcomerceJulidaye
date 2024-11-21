import { createContext, useState, useEffect, useContext } from "react";

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
    const fetchItems = async () => {
      try {
        const resp = await fetch('https://express-4c46.onrender.com/api/v1/products?price_max=10000000');
        const data = await resp.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://express-4c46.onrender.com/api/v1/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchItems();
    fetchCategories();
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
  console.log(openModal)
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
