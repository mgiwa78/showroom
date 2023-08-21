import Link from "next/link";
import React from "react";

const MainMobileNavigation = () => {
  return (
    <div
      className="sidenav sidenav-landing canvas-sidebar bg-white show"
      id="landingMenu"
    >
      <div className="canvas-overlay"></div>
      <div className="pt-5 card border-0 h-100">
        <div className="d-flex align-items-center mb-10 card-header border-0 py-0 pl-8 pr-7 bg-transparent">
          <a href="index.html" className="d-block w-52px">
            <img src="images/logo.svg" alt="Furnitor" />
          </a>
          <span className="canvas-close d-inline-block text-right fs-24 ml-auto lh-1 text-primary">
            <i className="fal fa-times"></i>
          </span>
        </div>
        <div className="overflow-y-auto canvas-menu pl-8 pr-7 card-body py-0">
          <ul className="navbar-nav hover-menu main-menu px-0 mx-lg-n4">
            <li
              id="navbar-demos"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-item py-2 py-lg-5 px-0 px-lg-4"
            >
              <a className="nav-link p-0" href="#what_is_showroom">
                What is Showroom
              </a>
            </li>
            <li
              id="navbar-shops"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-item py-2 py-lg-5 px-0 px-lg-4"
            >
              <a className="nav-link p-0" href="#features">
                Features
              </a>
            </li>
            <li
              id="navbar-pages"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-item py-2 py-lg-5 px-0 px-lg-4"
            >
              <a className="nav-link p-0" href="#pages">
                About
              </a>
            </li>
            <li
              id="navbar-pages"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-item py-2 py-lg-5 px-0 px-lg-4"
            >
              <a className="nav-link p-0" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <a className="btn btn-primary btn-lg" href="#register">
            Register
          </a>
        </div>
        <div className="card-footer bg-transparent border-0 mt-auto pl-8 pr-7 pb-0 pt-8">
          <ul className="list-inline d-flex align-items-center mb-3">
            <li className="list-inline-item mr-4">
              <a href="#" className="fs-20 lh-1">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li className="list-inline-item mr-4">
              <a href="#" className="fs-20 lh-1">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item mr-4">
              <a href="#" className="fs-20 lh-1">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fs-20 lh-1">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <p className="mb-0 text-gray">
            © 2023 Showroom.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainMobileNavigation;
