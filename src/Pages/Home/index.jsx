import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import Detail from '../../Components/Detail'
import { ShoppingCartContext } from '../../Context';
import ProductModal from '../../Components/ProductModal';


function Home() {
  const { openModal } = useContext(ShoppingCartContext);

  console.log(openModal)
  const context = useContext(ShoppingCartContext);
  const render=(item) =>{
    
      if(item>0){ return (
        context.itemsf?.map(item => (

          <Card key={item.id} data={item} />
        )
      ))
      }
      else{
       return(<div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 flex justify-center items-center h-64">
        <p className="text-center text-gray-500 font-semibold text-lg bg-gray-100 py-4 px-6 rounded-md shadow-sm">
          Results not was found
        </p>
      </div>
      )
      }
  }
  return (
          <Layout>
    
        <section className="py-12 px-6">
        <div className="container mx-auto flex flex-col items-center justify-between">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{window.location.href.split('/').pop()} Items</h2>
    
    <input
      type="text"
      placeholder="Search a product"
      className="w-full max-w-md p-3 border border-gray-300 rounded-md shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 mb-8"
      onChange={(event)=>{context.setSearchItem( event.target.value)} }
    />
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {render(context.itemsf?.length)}

    </div>
      </div>
    </section>
    {openModal && (
        <ProductModal>
            <Detail/>
        </ProductModal>
      )}
      </Layout>
      )
}

export default Home
