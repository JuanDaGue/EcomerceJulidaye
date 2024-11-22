// src/api/categories.js

const apiUrl = 'https://express-4c46.onrender.com/api/v1';

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${apiUrl}/categories`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
