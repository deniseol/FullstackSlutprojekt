import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart, removeAllFromCart } = useCart();

  // Group products by id and count quantity
  const productMap = new Map<number, typeof cart[0] & { quantity: number }>();
  cart.forEach(item => {
    if (productMap.has(item.id)) {
      productMap.get(item.id)!.quantity += 1;
    } else {
      productMap.set(item.id, { ...item, quantity: 1 });
    }
  });
  const uniqueProducts = Array.from(productMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const total = uniqueProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="cart-container" id="cart-container">
      <h2 id="cart-title">Your Cart</h2>
      {uniqueProducts.length === 0 ? (
        <div className="empty-cart" id="empty-cart" style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img id="bagimg" src="/src/assets/Bag.png" alt="Empty cart" />
          <p className="empty-cart-text" id="empty-cart-text">Cart is empty.</p>
        </div>
      ) : (
        <ul className="cart-list" id="cart-list">
          {uniqueProducts.map((item) => (
            <li
              key={item.id}
              className="cart-item"
              id={`cart-item-${item.id}`}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}
            >
              <img
                src={item.bild_url}
                alt={item.name}
                className="product-img"
                id={`cart-img-${item.id}`}
                /* style={{ width: '10vw', height: '100%', objectFit: 'cover', borderRadius: '8px' }} */
              />
              <div className="cart-item-info" id={`cart-item-info-${item.id}`}>
                <div className="cart-product-name" id={`cart-product-name-${item.id}`}>{item.name}</div>
                <div className="cart-product-price" id={`cart-product-price-${item.id}`}>
                  <b>${(item.price * item.quantity).toFixed(2)}</b>
                </div>
                <div className="btn-container" id={`btn-container-${item.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button className="btn btn-minus" id={`btn-minus-${item.id}`} onClick={() => removeFromCart(item.id)}>-</button>
                  <span className="cart-quantity" id={`cart-quantity-${item.id}`}>{item.quantity}</span>
                  <button className="btn btn-plus" id={`btn-plus-${item.id}`} onClick={() => addToCart(item)}>+</button>
                  <button
                    className="btn btn-remove"
                    id={`btn-remove-${item.id}`}
                    onClick={() => removeAllFromCart(item.id)}
                    style={{ marginLeft: '1rem', color: 'red' }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="price-total" id="cart-total"><b>Total: ${total.toFixed(2)}</b></p>
    </div>
  );
};

export default Cart;
