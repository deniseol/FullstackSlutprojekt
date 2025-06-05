import { useState } from 'react';
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <header>
        <div className="fixed-top">
          <nav className="navbar navbar-light navbar-expand-lg navbar-custom">
            <div className="container-fluid">
              {/* Vänster sida - Logo */}
              <a className="navbar-brand align-self-center" style={{color: '#ffc739'}} href="/" >
              <img 
            src="/src/assets/tophat-logo.svg" 
            alt="Logo" 
            width="30" 
            height="30" 
            className="me-2"
          />
                OBSCURE HATS
              </a>
              
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
                    <a className="nav-link active" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Cart</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                      Menu
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Categories</a>
                      <a className="dropdown-item" href="#">Products</a>
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