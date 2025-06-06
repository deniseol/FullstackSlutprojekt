import React, { useState } from 'react';

import './AdminForm.css';
const AdminForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [bild_url, setBildUrl] = useState('');
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const product = {
      id: Number(id),
      name,
      price: Number(price),
      amount: Number(amount),
      bild_url,
      description,
    };

    try {
      const response = await fetch('http://localhost:5050/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        setMessage('Produkt tillagd!');
        setId('');
        setName('');
        setPrice('');
        setBildUrl('');
        setDescription('');
        setAmount('');
      } else {
        setMessage('Något gick fel!');
      }
    } catch (error) {
        console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Lägg till produkt</h2>
      <div>
        <label>ID:</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} required />
      </div>
      <div>
        <label>Namn:</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Pris:</label>
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Bild-URL:</label>
        <input value={bild_url} onChange={e => setBildUrl(e.target.value)} required />
      </div>
      <div>
        <label>Antal:</label>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
      </div>
      <div>
        <label>Beskrivning:</label>
        <input value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button type="submit">Lägg till</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default AdminForm;
