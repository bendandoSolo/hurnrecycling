import React from "react";

const Footer = () => {
  return (
    <footer className="text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
              <li>
                <a href="#!">Clients</a>
              </li>
              <li>
                <a href="#!">Environment</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Services</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!">Office Paper</a>
              </li>
              <li>
                <a href="#!">Cardboard & Packaging</a>
              </li>
              <li>
                <a href="#!">Plastic Bottles & Cans</a>
              </li>
              <li>
                <a href="#!">Confidential Waste</a>
              </li>
              <li>
                <a href="#!">Electrical Equipment</a>
              </li>
              <li>
                <a href="#!">General Waste</a>
              </li>
              <li>
                <a href="#!">Glass</a>
              </li>
              <li>
                <a href="#!">Office Furniture</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>Hurn Recycling Ltd</li>
              <li>The Salterns, 2 Sandy Close</li>
              <li>Poole</li>
              <li>Dorset</li>
              <hr />
              <li>
                <a href="#!">
                  01202 257 530 <i className="fas fa-phone"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  info@hurnrecycling.com <i className="fas fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  Follow us on Facebook{" "}
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0"></div>
        </div>
      </div>
      <div className="text-center p-3 copyright">
        © 2021 Copyright:
        <a href="https://mdbootstrap.com/">bendando ltd</a>
      </div>
    </footer>
  );
};

export default Footer;
