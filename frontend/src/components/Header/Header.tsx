import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useCart();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <header>
        <div className="fixed-top">
          <nav className="navbar navbar-light navbar-expand-lg navbar-custom">
            <div className="container-fluid">
              {/* Vänster sida - Logo */}
              <Link className="navbar-brand align-self-center" style={{color: '#ffc739'}} to="/" >
                <img 
                  src="/src/assets/tophat-logo.svg" 
                  alt="Logo" 
                  width="30" 
                  height="30" 
                  className="me-2"
                />
                OBSCURE HATS
              </Link>
              
              {/* Hamburgarmeny-knapp */}
              <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Höger sida - Meny */}
              <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      🛒 Cart ({cart.length})
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                      Menu
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link className="dropdown-item" to="/categories">Categories</Link>
                      <Link className="dropdown-item" to="/products">Products</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
}