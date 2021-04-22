import React, { useState, useEffect } from "react";


const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log(currentScrollY);
            //could use useRef to change the classValue.
            //should use callback 
            if (window.pageYOffset > 20) {
                document.querySelector("nav").classList.add("top-nav-collapse");
              } else {
                document.querySelector("nav").classList.remove("top-nav-collapse");
              }
              
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return(
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
          <div className="container">
      
            
            <a className="navbar-brand" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
              <strong>MDB</strong>
            </a>
      
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <i className="fas fa-bars"></i>
            </button>

            {/* <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button> */}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
              
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank">Free
                    download</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free tutorials</a>
                </li>
              </ul>
      
             
              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <a href="https://www.facebook.com/mdbootstrap" className="nav-link" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/MDBootstrap" className="nav-link" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link border border-light rounded"
                    target="_blank">
                    <i className="fab fa-github mr-2"></i>MDB GitHub
                  </a>
                </li>
              </ul>
      
            </div>
      
          </div>
        </nav>
        
    )
}

export default Navbar;