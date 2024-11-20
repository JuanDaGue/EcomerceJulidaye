import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../../../Context';

const SpecialOffers = () => {
  const { categories } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryPath) => {
    navigate(categoryPath);
  };

  const categoryPaths = {
    'Cuadros y pinturas': '/Cuadros',
    'Esculturas': '/Esculturas',
    'Artesanias y manualidades': '/Artesanias',
    // Add other categories and their paths here if needed
  };

  return (
    <section className="py-12">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Ofertas Especiales</h2>
        <p className="mt-4 text-white">Descubre nuestras categorias de los mejores productos</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {categories.map(category => (
          <div key={category.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{category.name}</h3>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => handleCategoryClick(categoryPaths[category.name] || '/')}
            >
              Observa nuestra galería
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
