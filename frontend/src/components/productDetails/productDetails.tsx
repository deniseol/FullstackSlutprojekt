import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Product } from '../types/Product';

import { useCart } from '../../context/CartContext';
import './ProductDetails.css'; // Assuming you have a CSS file for styles

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5050/api/products/${id}`);
        const data: Product = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };


    fetchProduct();
  }, [id]);


  if (loading) return <div>Loading product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;


  return (
    <div className="product-details-page">
      <h2>{product.name}</h2>
      <img src={product.bild_url} alt={product.name} />
           {/* Här visas beskrivningen - bara på produktsidan! */}
     {product.description && (
       <div className="product-description">
         <p>{product.description}</p>
       </div>
     )}

     <p>Price: ${product.price.toFixed(2)}</p>
     <p>In stock: {product.amount}</p>

     <button className='addCartButton'
       disabled={product.amount <= 0}
       onClick={() => addToCart(product)}
     >
       {product.amount > 0 ? 'Add to Cart' : 'Out of Stock'}
     </button>
   </div>
 );
};


export default ProductDetails;
