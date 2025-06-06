import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  // Group products by id and count quantity
  const productMap = new Map<number, typeof cart[0] & { quantity: number }>();
  cart.forEach(item => {
    if (productMap.has(item.id)) {
      productMap.get(item.id)!.quantity += 1;
    } else {
      productMap.set(item.id, { ...item, quantity: 1 });
    }
  });
  const uniqueProducts = Array.from(productMap.values());
  const total = uniqueProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
      <h2>Your Cart</h2>
      {uniqueProducts.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {uniqueProducts.map((item) => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img
                src={item.bild_url}
                alt={item.name}
                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div>
                <div>{item.name}</div>
                <div>
                  {/* ${item.price} × {item.quantity} = */} <b>${(item.price * item.quantity).toFixed(2)}</b>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p><b>Total: ${total.toFixed(2)}</b></p>
    </div>
  );
};

export default Cart;
