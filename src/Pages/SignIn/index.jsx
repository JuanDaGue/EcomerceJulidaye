// src/pages/SignIn.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { loginUser, getUserById } from '../../Api/auth';
import { setAuthState } from '../../Components/Utils';

function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginPayload = {
        username: form.email,
        password: form.password,
      };
      const data = await loginUser(loginPayload);
      console.log('Full login response:', data);

      if (data.user.id) {
        setAuthState(true);
        // Fetch user info by ID
        const userInfo = await getUserById(data.user.id);
        console.log('Full user info response:', userInfo);

        // Save user info in local storage
        localStorage.setItem('user', JSON.stringify(userInfo));
        navigate('/MyAccount');
      } else {
        setMessage('Login failed: ' + data.message);
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
      console.error('Error details:', error);
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            value={form.email} 
            onChange={handleChange}
            className="block mb-4 p-2 border"
          />
          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            value={form.password} 
            onChange={handleChange}
            className="block mb-4 p-2 border"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Log In</button>
        </form>

        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </Layout>
  );
}

export default SignIn;
