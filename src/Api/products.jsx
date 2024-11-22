// src/api/products.js

const apiUrl = 'https://express-4c46.onrender.com/api/v1';

export const fetchProducts = async (priceMax) => {
    try {
        const response = await fetch(`${apiUrl}/products?price_max=${priceMax}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
