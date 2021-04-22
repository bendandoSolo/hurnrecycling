import React, { useEffect } from "react";
import Link from 'next/link'





const Navbar2 = () => {

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


    return (
<header>
<nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">

  <div className="container-fluid">
  
  <Link href="/">
  <img src="\images\logo-transparent.png" /*style={{width: "100%", height: "50vh"}}*/  ></img>
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
    
     <ul className="navbar-nav mb-2 mb-lg-0" >


        <li className="nav-item">
          <Link href="/">
              <a className="nav-link" href="/">HOME</a>
          </Link>
        </li>

        <li className="nav-item dropdown">
		   <a className="nav-link  dropdown-toggle" href="/services" data-bs-toggle="dropdown">SERVICES</a>
		    <ul className="dropdown-menu">
            
			      <li><Link href="/"><a className="dropdown-item" href="#"> Service 1</a></Link></li>
			      
        <li><a className="dropdown-item" href="#"> Service 2 </a></li>
			  <li><a className="dropdown-item" href="#"> Service 3 </a></li>
        <li><a className="dropdown-item" href="#"> Service 4</a></li>
			  <li><a className="dropdown-item" href="#"> Service 5 </a></li>
			  <li><a className="dropdown-item" href="#"> Service 6 </a></li>
        <li><a className="dropdown-item" href="#"> Service 7</a></li>
			  <li><a className="dropdown-item" href="#"> Service 8 </a></li>
			  <li><a className="dropdown-item" href="#"> Service 9 </a></li>
		    </ul>
		    </li>

        <li className="nav-item">
          <Link href="/clients">
             <a className="nav-link" href="#">CLIENTS</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/environment">
               <a className="nav-link" href="#">ENVIRONMENT</a>
           </Link>
        </li>

        <li className="nav-item">
           <Link href="/contact">
             <a className="nav-link" href="#">CONTACT</a>
          </Link>
        </li>



        <li className="nav-item" style={{marginLeft: '20px', marginTop: '1px'}}>
        <button type="button" className="btn btn-success">CALL 01202 257 530</button>
        </li>
        


      </ul>



     
    </div>
  </div>
</nav>
</header>


    )




}


export default Navbar2;