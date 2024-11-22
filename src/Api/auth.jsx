const apiUrl = 'https://express-4c46.onrender.com/api/v1';

export const createUser = async (user) => {
    try {
        const response = await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        });
        return await response.json();
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/users/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
};
