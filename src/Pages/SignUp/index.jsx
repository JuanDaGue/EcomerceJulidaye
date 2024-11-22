// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { createUser } from '../../Api/auth';

const SignUp = () => {
  const [form, setForm] = useState({ email: '', password: '', role: 'customer' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createUser(form);
      if (data.id) {
        setMessage('User created successfully! Redirecting to My Account...');
        navigate('/MyAccount');
      } else {
        setMessage('User creation failed: ' + data.message);
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl mb-4">Sign Up</h2>
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

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
        </form>

        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </Layout>
  );
};

export default SignUp;
