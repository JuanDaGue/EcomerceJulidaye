import React, { useState } from 'react';
import { getUser, setAuthState } from '../../Components/Utils';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout'

function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();  // Usa useNavigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = getUser();
    if (account && account.email === form.email && account.password === form.password) {
      setAuthState(true);
      navigate('/MyAccount');  // Redirige usando navigate
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <>
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
    </div>     
      </Layout>
    </>
  )
}

export default SignIn

