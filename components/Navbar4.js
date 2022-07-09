import React, {useState} from 'react';
import Link from "next/link";


//NEVER USE BOOTSTRAP MATERIAL DESIGN

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBHamburgerToggler,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';


// import {
//   MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
//   MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
// } from "mdbreact";



const Navbar4 = () => {

    const [navBarOpen, setNavBarOpen] = useState(false);

    const toggleNavBar = () => {setNavBarOpen(!navBarOpen);}

    const closeNavBar = () => {setNavBarOpen(false);}

    return (
      // <MDBNavbar color="indigo" dark expand="md">
      //   <MDBNavbarBrand>
      //     <strong className="white-text">Navbar</strong>
      //   </MDBNavbarBrand>
      //   <MDBNavbarToggler onClick={toggleNavBar} />
      //   <MDBCollapse id="navbarCollapse3" isOpen={navBarOpen} navbar>
      //     <MDBNavbarNav left>
      //       <MDBNavItem active>
      //         <Link href="#!">Home</Link>
      //       </MDBNavItem>
      //       <MDBNavItem>
      //       <Link href="#!">Home</Link>
      //       </MDBNavItem>
      //       <MDBNavItem>
      //       <Link href="#!">Home</Link>
      //       </MDBNavItem>
      //       <MDBNavItem>
      //         <MDBDropdown>
      //           <MDBDropdownToggle nav caret>
      //             <span className="mr-2">Dropdown</span>
      //           </MDBDropdownToggle>
      //           <MDBDropdownMenu>
      //             <MDBDropdownItem href="#!">Action</MDBDropdownItem>
      //             <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
      //             <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
      //             <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
      //           </MDBDropdownMenu>
      //         </MDBDropdown>
      //       </MDBNavItem>
      //     </MDBNavbarNav>
      //     <MDBNavbarNav right>
      //       <MDBNavItem>
      //         <MDBFormInline waves>
      //           <div className="md-form my-0">
      //             <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      //           </div>
      //         </MDBFormInline>
      //       </MDBNavItem>
      //     </MDBNavbarNav>
      //   </MDBCollapse>
      // </MDBNavbar>
      <>
      <MDBNavbar expand="md" fixed='top' >
        <MDBContainer fluid>
        
          <MDBNavbarBrand >
              <Link href="/"><img src="\images\logo.png"></img></Link>
          </MDBNavbarBrand>
          <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={toggleNavBar} className="d-lg-none" expand="md"/> 
          {/* <MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger3.svg?color=00FBD8" onClick={toggleNavBar} />  */}
          <MDBCollapse id="navbarCollapse11" isOpen={navBarOpen} navbar>
          {/* className='ms-auto' style={{width: 'auto', marginLeft: 'auto'}} */}
            <div style={{marginLeft: 'auto'}} >
            <MDBNavbarNav right>
              <MDBNavItem active className="nav-item">
                <Link  aria-current="page" href="/"><a className="nav-link active">Home</a></Link>
              </MDBNavItem>
              <MDBNavItem>
               <MDBDropdown>
                 <MDBDropdownToggle nav caret>
                   <span className="mr-2">Services</span>
                 </MDBDropdownToggle>
                 <MDBDropdownMenu>
                 {/* <ul className="dropdown-menu" onClick={closeNavBar} >
                  <li><Link href="/services/general_waste">
                    <a className="dropdown-item">General Waste</a>
                  </Link></li> 
                  <li><Link href="/services/dry_mixed_recycling">
                      <a className="dropdown-item">Dry Mixed Recycling</a>
                  </Link></li>
                  <li><Link href="/services/cardboard_and_paper">
                    <a className="dropdown-item">Cardboard & Paper Recycling</a>
                  </Link></li>
                  <li><Link href="/services/glass">
                    <a className="dropdown-item">Glass Recycling</a>
                  </Link></li>
                  <li><Link href="/services/food_waste">
                    <a className="dropdown-item">Food Waste</a>
                  </Link></li>
                  <li>
                    <Link href="/services/polystyrene_collection"><a className="dropdown-item">Polystyrene Collection</a></Link>
                  </li>
                  <li><Link href="/services/man_and_van_clearance">
                    <a className="dropdown-item">Man & Van Clearance</a>
                  </Link></li>
                  <li><Link href="/services/waste_electrical_and_electronic_equipment">
                    <a className="dropdown-item">WEEE Waste Collection</a>
                  </Link></li>
                  <li><Link href="/services/office_clearance">
                      <a className="dropdown-item">Office Clearance</a>
                  </Link></li>
                  <li><Link href="/services/confidential_waste">
                      <a className="dropdown-item">Confidential Waste Collection</a>
                  </Link></li>
                  <li><Link href="/services/event_waste_management">
                      <a className="dropdown-item">Event Waste Management</a>
                  </Link></li>
                </ul> */}
            
                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                 </MDBDropdownMenu>
               </MDBDropdown>
             </MDBNavItem>
             <MDBNavItem active>
                <li className="nav-item"><Link  aria-current="page" href="/environment"><a className="nav-link active">Environment</a></Link></li>
              </MDBNavItem>
              <MDBNavItem active>
                <li className="nav-item"><Link  aria-current="page" href="/contact"><a className="nav-link active">Contact</a></Link></li>
              </MDBNavItem>
              <MDBNavItem >
              <li className="nav-item call-now-navbar-button" style={{  marginTop: "1px" }} >
                <a href="tel:+441202257530">
                  <button type="button" className="btn btn-success btn-lg">CALL 01202 257 530 <i className="fas fa-phone ps-2"></i></button>
                </a>
              </li>
              </MDBNavItem>
            </MDBNavbarNav>
            </div>
          </MDBCollapse>
        </MDBContainer>
        
      </MDBNavbar>
    </>
    );
};

export default Navbar4;