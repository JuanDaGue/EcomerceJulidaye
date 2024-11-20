import Detail from "../Detail";
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './modal.css';
const ProductModal = ({children}) => {
  return ReactDOM.createPortal(<div className="Modalclass py-24 px-6 z-100">{children} </div>,document.getElementById('modal'));
   
  };
  
  export default ProductModal;
