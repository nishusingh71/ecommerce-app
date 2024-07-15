import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div
        id="spinner"
        className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
      <div className="container-fluid fixed-top px-0">
        <div className="container px-0">
          <div className="topbar">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-8">
                <div className="topbar-info d-flex flex-wrap">
                  <a href="#" className="text-light me-4">
                    <i className="fas fa-envelope text-white me-2"></i>
                    Example@gmail.com
                  </a>
                  <a href="#" className="text-light">
                    <i className="fas fa-phone-alt text-white me-2"></i>
                    +01234567890
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="topbar-icon d-flex align-items-center justify-content-end">
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-light bg-light navbar-expand-xl">
            <a href="index.html" className="navbar-brand ms-3">
              <h1 className="text-primary display-5">Environs</h1>
            </a>
            <button
              className="navbar-toggler py-2 px-3 me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-light"
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto">
                <NavLink to="/" className="nav-item nav-link ">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  About
                </NavLink>
                <NavLink to="/services" className="nav-item nav-link">
                  Services
                </NavLink>
                <NavLink to="/causes" className="nav-item nav-link">
                  Causes
                </NavLink>
                <NavLink to="/events" className="nav-item nav-link">
                  Events
                </NavLink>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <NavLink to="/blog" className="dropdown-item">
                      Blog
                    </NavLink>
                    <NavLink to="/gallery" className="dropdown-item">
                      Gallery
                    </NavLink>
                    <NavLink to="/volunteers" className="dropdown-item">
                      Volunteers
                    </NavLink>
                    <NavLink to="/donation" className="dropdown-item">
                      Donation
                    </NavLink>
                    <NavLink to="/error" className="dropdown-item">
                      404 Error
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
              <div
                className="d-flex align-items-center flex-nowrap pt-xl-0"
                style={{ marginLeft: "15px" }}
              >
                <a
                  href=""
                  className="btn-hover-bg btn btn-primary text-white py-2 px-4 me-3"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
