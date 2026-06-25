import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCalculator } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand text-gradient" to="/">
          <FaCalculator className="me-2" />
          ClearQuote
        </Link>
        <button
          className="navbar-toggler border-0"
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
          <ul className="navbar-nav ms-auto gap-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/" className="btn btn-primary ms-lg-4 mt-3 mt-lg-0">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
