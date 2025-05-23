import { NavLink } from "react-router-dom";
import './Header.css';


 const Header = () => {
 

  return (
    <section className="header">
 <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
        Blog<span>Tem</span>

        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </NavLink>
            <ul class="dropdown-menu">
            <li><NavLink class="dropdown-item" to="blog">Blog Grid</NavLink></li>
           
          </ul>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li> */}
            
          </ul>
        </div>
      </div>
    </nav>
    </section>
   
  );
};

export default Header;

