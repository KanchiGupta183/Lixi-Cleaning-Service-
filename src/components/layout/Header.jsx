import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from "react-router-dom";
import './headmenu.css';


function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    navigate("/");
  }


  return (
    <div >

      {/* <div className="loader">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="spinner">
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
            </div>
          </div>
        </div>
      </div> */}
      <Navbar bg="light" expand="lg" className="nav-design">

        <Container  >
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle-design" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>

              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <NavLink to='/services'>Services</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <NavLink to='/servicesdetails'>Service Details</NavLink>
                </NavDropdown.Item>

              </NavDropdown>

              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <NavLink to='/team'>Team</NavLink>
                </NavDropdown.Item>
          
                <NavDropdown.Item href="#action/3.1">
                  <NavLink to='/testimonials'>Testimonials</NavLink>
                </NavDropdown.Item>
             
                <NavDropdown.Item href="#action/3.1">
                  <NavLink to='/terms'>Terms And Conditions</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/contact">Contact</NavLink>

            </Nav>
            <div style={{ color: 'white' }}>
              <span>New</span>&nbsp;&nbsp;<span>Name</span>
            </div>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <div className="navbar-area two fixed-top">
        <div className="mobile-nav">
          <Link to="/" className="logo">
            <img src="assets/img/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link to="/" className="navbar-brand">
                <img src="assets/img/logo.png" alt="Logo" />
              </Link>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <NavbarCollapse id="basic-navbar-nav ">

                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="#abc" className="nav-link dropdown-toggle">
                        Pages <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/team" className="nav-link">
                            Team
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/testimonials" className="nav-link">
                            Testimonials
                          </Link>
                        </li>
                      
                        <li className="nav-item">
                          <Link to="/terms" className="nav-link">
                            Terms &amp; Conditions
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="#abc" className="nav-link dropdown-toggle">
                        Services <i className="bx bx-chevron-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/services" className="nav-link">
                            Services
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/servicedetails" className="nav-link">
                            Service Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                 
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>


                  </ul>
                  <div style={{ color: 'white' }}>
                    <span>New</span>&nbsp;&nbsp;<span>Name</span>
                  </div>
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="whitesmoke"
                    >
                      <span  style={{ color: 'whitesmoke',fontSize:"large" }}>Account</span>

                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <Link to='/login'>
                        <MenuItem className="nav-link">Login</MenuItem>

                      </Link>
                      <Link to='/register'>
                        <MenuItem className="nav-link">SignUp</MenuItem>

                      </Link>
                    
                        <MenuItem className="nav-link" onClick={logOut}>Log Out</MenuItem>


                    </Menu>
                  </div>

                  <div className="side-nav">
                    <a href="#abc">Book A Schedule</a>
                  </div>
                </NavbarCollapse>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
