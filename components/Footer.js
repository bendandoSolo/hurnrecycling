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
              {/* <li>
                <Link href="/clients">Clients</Link>
              </li> */}
              <li>
                <Link href="/environment">Environment</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy"><a target="_blank">Privacy Policy</a></Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Services</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link href="/services/general_waste">General Waste</Link>
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
                <Link href="/services/food">Food Waste</Link>
              </li>
              <li>
                <Link href="/services/polystyrene_collection">Polystyrene Collection</Link>
              </li>
              <li>
                <Link href="/services/man_and_van_clearance">Man & Van Clearance</Link>
              </li>
              <li>
                <Link href="/services/waste_electrical_and_electronic_equipment">WEEE Waste Collection</Link>
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
                <li>452 Bournemouth International Airport</li>
                <li>Christchurch</li>
                <li>Dorset</li>
                <li>BH23 6NW</li>
              <hr />
              <li>
                <a href="tel:+441202257530"><i className="fas fa-phone" style={{paddingRight: '6px'}}/>
                  01202 257 530 (option 2 sales) 
                </a>
              </li>
              <li>
                <a href="mailto:sales@hurnrecycling.com?subject=Enquiry from Hurn Recycling Website" ><i className="fas fa-envelope" style={{paddingRight: '6px'}}/>
                  sales@hurnrecycling.com 
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.facebook.com/Hurnrecycling"
                  target="_blank"
                  alt="Hurne Recycling Facebook Page"
                  style={{marginLeft: '-5px'}}
                >
                  <img
                    src="/images/facebook.png"
                    className="hover"
                    style={{ width: "26px", height: "26px", marginRight: "4px" }}
                  />
                  Follow us on Facebook
                </a>
              </li> */}
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
          style={{fontSize: '16px'}}
        >
          Website by Bendando
        </a>
      </div>
    </footer>
  );
};

export default Footer;
