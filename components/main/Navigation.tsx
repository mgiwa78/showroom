import Link from "next/link";
import React from "react";

const MainNavigationBar = () => {
  return (
    <header className="main-header navbar-light header-sticky header-sticky-smart header-mobile-lg header-landing position-absolute fixed-top">
      <div className="sticky-area-wrap" style={{ height: "83.5625px" }}>
        <div className="sticky-area">
          <div className="container container-xxl">
            <nav className="navbar navbar-expand-xl p-0 d-block">
              <div className="d-none d-xl-flex align-items-center">
                <a className="navbar-brand py-0" href="index.html">
                  <img src="images/logo.svg" alt="Furnitor" />
                </a>
                <div
                  className="d-flex justify-content-end mr-8 ml-auto"
                  id="landingMenu"
                >
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
                      id="navbar-demos"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item py-2 py-lg-5 px-0 px-lg-4"
                    >
                      <a className="nav-link p-0" href="#features">
                        Features
                      </a>
                    </li>
                    <li
                      id="navbar-shops"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-item py-2 py-lg-5 px-0 px-lg-4"
                    >
                      <a className="nav-link p-0" href="/vendors">
                        Our Vendors
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
                </div>
                <a className="btn btn-primary btn-lg" href="#register">
                  Register
                </a>
              </div>
              <div className="d-flex align-items-center d-xl-none py-3">
                <button
                  className="navbar-toggler border-0 px-0 canvas-toggle"
                  type="button"
                  data-canvas="true"
                  data-canvas-options='{"container":".sidenav-landing"}'
                >
                  <span className="fs-24 toggle-icon"></span>
                </button>
                <div className="mx-auto">
                  <a
                    className="navbar-brand d-inline-block mr-0"
                    href="index.html"
                  >
                    <img src="images/logo.svg" alt="Furnitor" />
                  </a>
                </div>
                <a
                  className="text-primary fs-24"
                  title="Purchase Furnitor"
                  href="#"
                >
                  <i className="far fa-shopping-basket"></i>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigationBar;
