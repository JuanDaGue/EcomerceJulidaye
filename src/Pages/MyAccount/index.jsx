// src/pages/MyAccount.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { getUserById } from '../../Api/auth';
import { setAuthState } from '../../Components/Utils';

function MyAccount() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        const userId = 1; // Replace with logic to get the correct user ID, if necessary
        try {
          user = await getUserById(userId);
          localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      }
      if (user) {
        setAccount(user);
      } else {
        navigate('/signin'); // Redirect to sign-in if no user is found
      }
    };

    fetchUser();
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('user'); // Remove user info from local storage
    setAuthState(false);
    alert('You have successfully signed out!');
    navigate('/'); // Redirect to homepage or login
  };

  if (!account) return <Layout><div>Loading...</div></Layout>;

  return (
    <Layout>
      <section className="bg-gray-50 py-12 px-6">
        <div className="p-6 border-b border-gray-200">
          <div className="p-6">
            <h2 className="text-2xl mb-4">My Account</h2>
            <p><strong>Name:</strong> {account.email.split('@')[0]}</p>
            <p><strong>Email:</strong> {account.email}</p>
            <button 
              onClick={handleSignOut} 
              className="mt-4 bg-red-500 text-white p-2 rounded">
              Sign Out
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default MyAccount;
