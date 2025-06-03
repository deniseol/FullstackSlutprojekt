import React from 'react';
import Form from '../form/Form.tsx';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="cart-container">
      <h2>Checkout</h2>
      
      {/* Här visas Form-komponenten */}
      <Form />
    </div>
  );
};

export default Checkout;