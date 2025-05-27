//rickard example
import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: { target: { name: Text; value: number; }; }) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', formData);
      alert('Formuläret skickades!');
      setFormData({ name: '', email: '' }); // Töm formuläret
    } catch (error) {
      console.error('Fel vid POST:', error);
    }
  };

  return (
<form onSubmit={handleSubmit}>
<input
        name="name"
        placeholder="Namn"
        value={formData.name}
        onChange={handleChange}
      />
<input
        name="email"
        placeholder="E-post"
        value={formData.email}
        onChange={handleChange}
      />
<button type="submit">Skicka</button>
</form>
  );
}

export default Form;
