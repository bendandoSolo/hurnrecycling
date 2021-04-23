import React, { useEffect } from "react";
import Link from "next/link";

const Navbar2 = () => {
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
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link  dropdown-toggle"
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
                <Link href="/clients">
                  <a className="nav-link" href="#">
                    Clients
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/environment">
                  <a className="nav-link" href="#">
                    Environment
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </Link>
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
