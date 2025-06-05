//import React from 'react';
import './Form.css';


const Form = () => {
  return (
    <form className="form-container">
      <h3>Your Information</h3>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="Fname">First Name:*</label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Lname">Last Name:*</label>
          <input
            type="text"
            id="Lname"
            name="Lname"
            required
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail Address:*</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number:*</label>
        <input
          type="tel"
          id="phone"
          name="nr"
          required
          className="form-input"
        />
      </div>

      <h3>Address Information</h3>

      <div className="form-group">
        <label htmlFor="address">Street Address:*</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="co">C/O (Optional):</label>
        <input
          type="text"
          id="co"
          name="co"
          className="form-input"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="postcode">Postcode:*</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="area">Area:*</label>
          <input
            type="text"
            id="area"
            name="area"
            required
            className="form-input"
          />
        </div>
      </div>

      <button type="submit" className="submit-button">Proceed To Checkout</button>
    </form>
  );
};

export default Form;

/* export default function Form() {
    return (
        <form className="form">
            <h2>Your Information</h2>
            <div className="form-group">
                <label htmlFor="Firstname">First Name:</label>
                <input type="text" id="Fname" name="Fname" required />
            </div>
            <div className="form-group">
                <label htmlFor="Lastname">Last Name:</label>
                <input type="text" id="Lname" name="Lname" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail adress:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <textarea id="phone" name="nr" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}; */
