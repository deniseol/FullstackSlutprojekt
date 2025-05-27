import './Header.css';

export default function Header() {
    return (
      <header>
        <h1>Min E-handel</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div className="fixed-top">
          <nav className="navbar navbar-light navbar-expand-lg navbar-custom">
            <div className="container-fluid">
              {/* Vänster sida - Logo */}
              <a className="navbar-brand align-self-center" style={{color: '#ffc739'}} href="#">
                OBSCURE HATS
              </a>
              
              {/* Hamburgarmeny-knapp */}
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDropdown"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Höger sida - Meny */}
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto"> {/* ms-auto skjuter till höger */}
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