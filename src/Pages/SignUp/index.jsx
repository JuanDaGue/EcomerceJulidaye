import React, { useState } from 'react';
import { saveUser, setAuthState } from '../../Components/Utils';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(form);
    setAuthState(true);
    navigate('/MyAccount');
  };

  const handleSignOut = () => {
    setAuthState(false);
    alert('You have successfully signed out!');
    navigate('/');  // Redirect to homepage or login
  };

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input 
            name="name" 
            type="text" 
            placeholder="Name" 
            value={form.name} 
            onChange={handleChange}
            className="block mb-4 p-2 border"
          />
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

        {/* Sign Out Button */}
        <button onClick={handleSignOut} className="mt-4 bg-red-500 text-white p-2 rounded">
          Sign Out
        </button>
      </div>
    </Layout>
  );
};

export default SignUp;
