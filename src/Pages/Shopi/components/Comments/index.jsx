import React, { useState, useEffect } from 'react';

const phrases = [
  "El amor no mira con los ojos, sino con el alma, y por eso pintan al ciego Cupido con vendas.",
  "La paz no se puede mantener por la fuerza; solo se puede lograr con el entendimiento.",
  "Dios no te da lo que deseas, sino lo que necesitas para cumplir tu propósito.",
  "Ama a tu prójimo como a ti mismo; pero primero, asegúrate de amarte a ti mismo.",
  "La fe no hace las cosas fáciles, hace que sean posibles.",
  "Donde hay amor, hay vida, y donde hay vida, hay esperanza.",
  "La paciencia y el tiempo hacen más que la fuerza o la violencia.",
  "La paz interior viene cuando dejamos de buscarla afuera y nos enfocamos en nuestro interior.",
  "Dios no cierra ninguna puerta sin abrir otra con mayor bendición.",
  "El amor es la única fuerza capaz de transformar a un enemigo en amigo."
];

const Proverbios = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prevPhrase => (prevPhrase + 1) % phrases.length);
    }, 10000); // Cambiar frase cada 10 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold drop-shadow-lg">Artesanías y manualidades enfocadas en el espíritu</h2>
        <p className="mt-4 text-2xl italic text-white">El arte nos invita a detenernos, reflexionar y conectar con la belleza que nos rodea.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform transition-transform duration-500 hover:scale-105 relative">
          <p className="text-xl font-semibold text-gray-800 mb-4">
            {phrases[currentPhrase]}
          </p>
          <div className="flex justify-center mt-4">
            <div className="animate-bounce bg-blue-600 rounded-full w-4 h-4"></div>
          </div>
          <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-t from-blue-600 via-transparent to-transparent rounded-lg transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Proverbios;
