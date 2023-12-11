import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" expand="lg" variant="dark">
      <div className="container">
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="navbar-nav">
            <Nav.Item>
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/auth">
                Authentication
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/user-details">
                User Details
              </Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
