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
                <Link href="/">Office Paper</Link>
              </li>
              <li>
                <Link href="/">Cardboard & Packaging</Link>
              </li>
              <li>
                <Link href="/">Plastic Bottles & Cans</Link>
              </li>
              <li>
                <Link href="/">Confidential Waste</Link>
              </li>
              <li>
                <Link href="/">Electrical Equipment</Link>
              </li>
              <li>
                <Link href="/">General Waste</Link>
              </li>
              <li>
                <Link href="/">Glass</Link>
              </li>
              <li>
                <Link href="/">Office Furniture</Link>
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
                <a href="https://www.facebook.com/Hurnrecycling" target="_blank" alt="Hurne Recycling Facebook Page">
                   <img src="/images/facebook.png" className="hover" style={{width: '32px', height: '32px', marginTop: '6px'}}/>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0"></div>
        </div>
      </div>
      <div className="text-center p-3 ">
        <a href="https://bendando.com" target="_blank" alt="bendando website creaters" className="hover"> created by Bendando</a>
      </div>
    </footer>
  );
};

export default Footer;
