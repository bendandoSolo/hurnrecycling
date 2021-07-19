import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar2 = () => {
  const [navToggle, setNavToggle] = useState(false);

  function navStatus() {
    setNavToggle(!navToggle);
  }

  useEffect(() => {
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
            <img src="\images\logo.png"></img>
          </Link>

          <button
            onClick={navStatus}
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="open-nav-btn"
          >
            <i className={navToggle ? "fas fa-times" : "fas fa-bars"}></i>
          </button>

          <div
            className={navToggle ? "nav-full-menu active" : "nav-full-menu"}
            id="nav-full-menu"
          >
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
                    <Link href="/municipal-waste">
                      <a className="dropdown-item">Municipal Waste</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dry-mixed">
                      <a className="dropdown-item">Dry Mixed Recycling</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/glass">
                      <a className="dropdown-item">Glass</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/office-paper">
                      <a className="dropdown-item">Office Paper Recycling</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bottle-cans">
                      <a className="dropdown-item">Plastic Bottles & Cans</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/card-packaging">
                      <a className="dropdown-item">
                        Cardboard & Packaging Recycling
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/confidential-waste">
                      <a className="dropdown-item">Confidential Waste</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/electrical">
                      <a className="dropdown-item">
                        Electrical Equipment Disposal
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/office-furniture">
                      <a className="dropdown-item">Office Furniture</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/general-waste">
                      <a className="dropdown-item">General Waste Disposal</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/clients">
                  Clients
                </a>
              </li> */}
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
                <a href="tel:+14123815500">
                  <button type="button" className="btn btn-success btn-lg">
                    CALL 01202 257 530 <i className="fas fa-phone ps-2"></i>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
