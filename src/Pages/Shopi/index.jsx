import React from 'react';
import Header from './components/Header';
import Collage from './components/Collage';
import Comments from './components/Comments';
import SocialMedia from './components/SocialMedia';
import SpecialOffers from './components/SpecialOffers';
import Footer from './components/Footer';
function EcommerceCard() { 


    return (
        <div>
          <Header />
          <Collage />
          <Comments />
          <SocialMedia />
          <SpecialOffers />
          <Footer />
        </div>
      );
}

export default EcommerceCard;
