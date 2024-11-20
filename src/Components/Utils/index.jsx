export const handleFunction = (date, products, totalPrice, totalProducts) => {
    const orders = {
      date: date,
      products: products,
      totalPrice: totalPrice,
      totalProducts: totalProducts
    };
    return orders;
  };


// Guardar usuario en localStorage
export const saveUser = (account) => {
  localStorage.setItem('account', JSON.stringify(account));
};

// Obtener usuario de localStorage
export const getUser = () => {
  const account = localStorage.getItem('account');
  return account ? JSON.parse(account) : null;
};

// Guardar estado de sesión
export const setAuthState = (isAuthenticated) => {
  localStorage.setItem('sign-out', JSON.stringify(!isAuthenticated));
};

// Obtener estado de sesión
export const isAuthenticated = () => {
  const signOut = JSON.parse(localStorage.getItem('sign-out'));
  return !signOut;
};

// Cerrar sesión
export const signOut = () => {
  setAuthState(false);
};
