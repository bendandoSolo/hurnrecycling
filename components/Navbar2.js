import React, { useEffect } from "react";
import Link from "next/link";

const Navbar2 = () => {
  useEffect(() => {
    let navOpenBtn = document.getElementById("open-nav-btn");
    let navCloseBtn = document.getElementById("close-nav-btn");
    let fullScreenNavMenu = document.getElementById("nav-full-menu");
    // let navLinks = Array.from(document.querySelectorAll(".nav-link"));
    let openNav = false;
    navOpenBtn.addEventListener("click", () => {
      openNav = true;
      fullScreenNavMenu.classList.add("nav-mob");
      if (openNav) {
        fullScreenNavMenu.style.cssText =
          "display: flex; animation: fade-in 0.3s both;";
      }
    });
    navCloseBtn.addEventListener("click", () => {
      openNav = false;
      fullScreenNavMenu.classList.remove("nav-mob");
      if (!openNav) {
        fullScreenNavMenu.style.cssText = "display: none;";
      }
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // console.log(currentScrollY);
      //could use useRef to change the classValue.
      //should use callback
      if (window.pageYOffset > 20) {
        document.querySelector("nav").classList.add("top-nav-collapse");
      } else {
        document.querySelector("nav").classList.remove("top-nav-collapse");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <Link href="/">
            <img
              src="\images\logo-transparent.png" /*style={{width: "100%", height: "50vh"}}*/
            ></img>
            {/* <a className="navbar-brand" href="#">Hurn Recycling Logo</a> */}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="open-nav-btn"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="nav-full-menu" id="nav-full-menu">
            <i className="far fa-window-close" id="close-nav-btn"></i>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/services"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Office Recycling
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Plastic Bottles & Cans
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cardboard & Packaging Recycling
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Confidential Waste
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/electrical">
                      Electrical Equipment Disposal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Glass
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Office Furniture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      General Waste Disposal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cardboard & Packaging Recycling
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/clients">
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/environment">
                  Environment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li
                className="nav-item"
                style={{ marginLeft: "20px", marginTop: "1px" }}
              >
                <button type="button" className="btn btn-success btn-lg">
                  CALL 01202 257 530 <i className="fas fa-phone"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
