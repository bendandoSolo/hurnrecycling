import { useEffect } from "react";
import Link from "next/link";

const Navbar3 = () => {
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
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div class="container">
        <Link href="/">
          <img src="\images\logo-transparent.png"></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
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
            <li class="nav-item">
              <a class="nav-link" href="#">
                Clients
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Environment
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
