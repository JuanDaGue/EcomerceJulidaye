import { useState } from 'react'
import Layout from '../../Components/Layout'
import { getUser } from '../../Components/Utils';

function MyAccount () {
  const account = getUser();
  return (
    <>
      <Layout>
       
        <section className="bg-gray-50 py-12 px-6"> 
        <div className=" p-6 border-b border-gray-200">  
            <div className="p-6">
          <h2 className="text-2xl mb-4">My Account</h2>
          <p><strong>Name:</strong> {account.name}</p>
          <p><strong>Email:</strong> {account.email}</p>
        </div> 
    </div> 
    </section>
      </Layout>
    </>
  )
}

export default MyAccount