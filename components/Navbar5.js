import { useEffect } from "react";
import Link from "next/link";

//started as a carbon copy of 
const Navbar5 = () => {
  // useEffect(() => {
  //   const shortenMenuOnScroll = () => {
  //     if (window.pageYOffset > 20) {
  //       document.querySelector("nav").classList.add("top-nav-collapse");
  //     } else {
  //       document.querySelector("nav").classList.remove("top-nav-collapse");
  //     }
  //   };
  //   window.addEventListener("scroll", shortenMenuOnScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", shortenMenuOnScroll);
  // }, []);

  //DIRTY HACK SINCE MDB BOOTSTRAP DOESN'T CLOSE NAVBAR ON DROPDOWN CLICK
  const dropDownMenuClicked = e => {
    e.preventDefaut = false;
      if (window.innerWidth < 993){document.getElementById("navbarNav").classList.remove('show');}
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar pb-md-0">
      {/* <div> */}
      <div className="container flex-row-lg">
        <Link href="/">
          <img src="\images\logo.png"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>            
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/services"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu" onClick={e => {dropDownMenuClicked(e)}} >
                  <li><Link href="/services/general_waste"><a className="dropdown-item">General Waste</a></Link></li> 
                  <li><Link href="/services/dry_mixed_recycling"><a className="dropdown-item">Dry Mixed Recycling</a></Link></li>
                  <li><Link href="/services/cardboard_and_paper"><a className="dropdown-item">Cardboard & Paper Recycling</a></Link></li>
                  <li><Link href="/services/glass"><a className="dropdown-item">Glass Recycling</a></Link></li>
                  <li><Link href="/services/food_waste"><a className="dropdown-item">Food Waste</a></Link></li>
                  <li><Link href="/services/polystyrene_collection"><a className="dropdown-item">Polystyrene Collection</a></Link></li>
                  <li><Link href="/services/man_and_van_clearance"><a className="dropdown-item">Man & Van Clearance</a></Link></li>
                  <li><Link href="/services/waste_electrical_and_electronic_equipment"><a className="dropdown-item">WEEE Waste Collection</a></Link></li>
                  <li><Link href="/services/office_clearance"><a className="dropdown-item">Office Clearance</a></Link></li>
                  <li><Link href="/services/confidential_waste"><a className="dropdown-item">Confidential Waste Collection</a></Link></li>
                  <li><Link href="/services/event_waste_management"><a className="dropdown-item">Event Waste Management</a></Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link"  href="/environment">Environment</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item call-now-navbar-button" style={{  marginTop: "1px" }}>
                <a href="tel:+441202257530"><button type="button" className="btn btn-success btn-lg">
                        CALL 01202 257 530 <i className="fas fa-phone ps-2"></i>
                </button></a>
              </li>
          </ul>
        </div>
      </div>
      <div className="subMenu">
      <div className="container">
           <ul className="flex-horizontal-vertical-between">
                  <li><Link href="/services/general_waste"><a className="subMenu-item">General Waste</a></Link></li> 
                  <li><Link href="/services/dry_mixed_recycling"><a className="subMenu-item">Dry Mixed Recycling</a></Link></li>
                  <li><Link href="/services/cardboard_and_paper"><a className="subMenu-item">Cardboard & Paper</a></Link></li>
                  <li><Link href="/services/glass"><a className="subMenu-item">Glass Recycling</a></Link></li>
                  <li><Link href="/services/food_waste"><a className="subMenu-item">Food Waste</a></Link></li>
                  <li  > {/*className="call-now-navbar-button" */}
                <a href="tel:+441202257530"><button type="button" className="btn btn-success">
                        GET A QUOTE
                </button></a>
              </li>
            </ul>
      </div> 
      </div> 
      {/* </div> */}
    </nav>
    
    {/* <nav className="navbar navbar-expand-lg secondary-navbar fixed-top scrolling-navbar">
                <ul>
                  <li><Link href="/services/general_waste"><a className="dropdown-item">General Waste</a></Link></li> 
                  <li><Link href="/services/dry_mixed_recycling"><a className="dropdown-item">Dry Mixed Recycling</a></Link></li>
                  <li><Link href="/services/cardboard_and_paper"><a className="dropdown-item">Cardboard & Paper Recycling</a></Link></li>
                  <li><Link href="/services/glass"><a className="dropdown-item">Glass Recycling</a></Link></li>
                  <li><Link href="/services/food_waste"><a className="dropdown-item">Food Waste</a></Link></li>
                  <li className="nav-item call-now-navbar-button" style={{  marginTop: "1px" }}>
                <a href="tel:+441202257530"><button type="button" className="btn btn-success btn-lg">
                        GET A QUOTE
                </button></a>
              </li>
              </ul>

    </nav> */}

    </>
  );
};

export default Navbar5;
