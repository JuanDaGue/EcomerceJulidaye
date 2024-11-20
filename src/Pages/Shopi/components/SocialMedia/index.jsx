import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
const SocialMedia = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Follow Us</h2>
        <p className="mt-4 text-gray-600">Stay updated with our latest offers and products on social media</p>
      </div>
      <div className="flex justify-center space-x-6 mt-8">
        <a href="#" className="text-3xl text-[#4267B2] hover:text-[#365899]" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-3xl text-[#1DA1F2] hover:text-[#0d95e8]" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-3xl text-[#C13584] hover:text-[#a62d72]" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-3xl text-[#0A66C2] hover:text-[#004182]" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
