import React from 'react';

const Contact = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contáctenos</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
            Estamos aquí para ayudarle con cualquier pregunta que pueda tener sobre nuestra colección de arte religioso. Ya sea que esté buscando pinturas específicas, esculturas o trabajos personalizados, no dude en ponerse en contacto con nosotros.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Atención al Cliente</h2>
            <p className="text-gray-600 mb-4">
            Para preguntas sobre nuestros productos o asistencia con su pedido, contáctenos en:
            </p>
            <ul className="text-gray-600 space-y-2 mb-8">
            <li>
                <strong>Correo electrónico:</strong>{' '}
                <a
                href="mailto:luzadrianauchimalargo@gmail.com"
                className="text-blue-600 hover:underline"
                >
                luzadrianauchimalargo@gmail.com
                </a>
            </li>
            <li>
                <strong>Teléfono:</strong> <a href="tel:+573006882557" className="text-blue-600 hover:underline">+57 300 688 2557</a>
            </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Visite Nuestro Taller</h2>
            <p className="text-gray-600 mb-4">
            Nuestro taller está abierto a visitantes que deseen ver nuestra colección de arte en persona o discutir trabajos religiosos personalizados. Programe una cita o visítenos en:
            </p>
            <p className="text-gray-600 mb-8">
            <strong>Dirección:</strong> Cl. 66a #55A-51, La Candelaria, Medellín, La Candelaria.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Síganos</h2>
            <p className="text-gray-600 mb-4">
            Manténgase conectado con nosotros en las redes sociales para recibir actualizaciones sobre nuevas llegadas, exposiciones y ofertas especiales:
            </p>
            <ul className="text-gray-600 space-y-2">
            <li>
                <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                >
                Instagram
                </a>
            </li>
            <li>
                <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                >
                Facebook
                </a>
            </li>
            <li>
                <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                >
                Twitter
                </a>
            </li>
            </ul>
        </div>
        </section>
    );
};

export default Contact;
