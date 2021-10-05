import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-lg-start pt-5">
      <div className="container p-4 ">
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
                <Link href="/services/municipal-waste">Municipal Waste</Link>
              </li>
              <li>
                <Link href="/services/dry_mixed_recycling">Dry Mixed Recycling</Link>
              </li>
              <li>
                <Link href="/services/cardboard_and_paper">Cardboard & Paper Recycling</Link>
              </li>
              <li>
                <Link href="/services/glass">Glass Recycling</Link>
              </li>
              <li>
                <Link href="/services/food">Food Recycling</Link>
              </li>
              <li>
                <Link href="/services/polystyrene_collection">Polystyrene Collection</Link>
              </li>
              <li>
                <Link href="/services/man_and_van_clearance">Man & Van Clearance</Link>
              </li>
              <li>
                <Link href="/services/waste_electrical_and_electronic_equipment">WEE Waste Collection</Link>
              </li>
              <li>
                <Link href="/services/office_clearance">Office Clearance</Link>
              </li>
              <li>
                <Link href="/services/confidential_waste">Confidential Waste Collection</Link>
              </li>
              <li>
                <Link href="/services/event_waste_management">Event Waste Management</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled mb-0">
            <li>Hurn Recycling Ltd</li>
                <li>Unit 10-11</li>
                <li>Stepnell Reach</li>
                <li>541 Blandford Road</li>
                <li>Poole</li>
                <li>Dorset</li>
                <li>BH16 5BW</li>
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
