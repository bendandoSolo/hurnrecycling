import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Menu</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/clients">Clients</Link>
              </li>
              <li>
                <Link href="/environment">Environment</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Services</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link href="/municipal-waste">Municipal Waste</Link>
              </li>
              <li>
                <Link href="/dry-mixed">Dry Mixed Recycling</Link>
              </li>
              <li>
                <Link href="/glass">Glass</Link>
              </li>
              <li>
                <Link href="/office-paper">Office Paper Recycling</Link>
              </li>
              <li>
                <Link href="/bottle-cans">Plastic Bottles & Cans</Link>
              </li>
              <li>
                <Link href="/card-packaging">Cardboard & Packaging</Link>
              </li>
              <li>
                <Link href="/confidential-waste">Confidential Waste</Link>
              </li>
              <li>
                <Link href="/electrical">Electrical Equipment</Link>
              </li>
              <li>
                <Link href="/office-furniture">Office Furniture</Link>
              </li>
              <li>
                <Link href="/general-waste">General Waste Disposal</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>
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
                <a
                  href="https://www.facebook.com/Hurnrecycling"
                  target="_blank"
                  alt="Hurne Recycling Facebook Page"
                >
                  <img
                    src="/images/facebook.png"
                    className="hover"
                    style={{ width: "32px", height: "32px", marginTop: "6px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0"></div>
        </div>
      </div>
      <div className="text-center p-1">
        <a
          href="https://bendando.com"
          target="_blank"
          alt="bendando website creaters"
          className="hover"
          style={{fontSize: '12px'}}
        >
          created by Bendando
        </a>
      </div>
    </footer>
  );
};

export default Footer;
