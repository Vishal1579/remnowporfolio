import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Header(){

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // NEW

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
    document.body.classList.toggle("mobile-nav-active");
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

    return(
        <div className="header">
            <header id="header" className=" header d-flex align-items-center sticky-top">
  <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
    <a
      href="/"
      className="logo d-flex align-items-center me-auto me-xl-0"
    >
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <img
  src={`${process.env.PUBLIC_URL}/assets/img/nlogo.png`}
  className="img-fluid"
  alt="Logo"
/>

     {/* <h1 className="sitename">Remnow Solution</h1> */}
    </a>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <a href="/" className="active">
            Home
            <br />
          </a>
        </li>
       
    <li className={`dropdown ${openDropdown === "websites" ? "dropdown-active" : ""}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown("websites"); }}>
          <span>Websites</span>
            <i className="bi bi-chevron-down toggle-dropdown" />
          </a>
          <ul style={{ display: openDropdown === "websites" ? "block" : "none" }}>
                <Link to="/websites/1" className="details-link">
                                  Springfield
                              </Link>
            <li>
            <Link to="/websites/2" className="details-link">Culture and Cuisine LLC</Link>
            </li>
            <li>
            <Link to="/websites/4" className="details-link">Muthamizh Sangam</Link>
            </li>
            <li>
            <Link to="/websites/3" className="details-link">TTK Developers</Link>
            </li>
            <li>
            <Link to="/websites/5" className="details-link">V.Saravanan & Co</Link>
            </li>
            <li>
            <Link to="/websites/6" className="details-link">Jeyar Cottage</Link>
            </li>
            <li>
            <Link to="/websites/7" className="details-link">Green Trends</Link>
            </li>
            <li>
            <Link to="/websites/8" className="details-link">Durai Wheels</Link>
            </li>
            <li>
            <Link to="/websites/9" className="details-link">JD Memorial Trust</Link>
            </li>
            <li>
            <Link to="/websites/10" className="details-link">Thorsden</Link>
            </li>
            <li>
            <Link to="/websites/11" className="details-link">Studio11</Link>
            </li>
           
          </ul>
        </li>

       
        <li className={`dropdown ${openDropdown === "digital" ? "dropdown-active" : ""}`}>
  <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown("digital"); }}>
    <span>Digital Marketing</span>
    <i className="bi bi-chevron-down toggle-dropdown" />
  </a>
  <ul style={{ display: openDropdown === "digital" ? "block" : "none" }}>
  
          
           
            <li>
             <Link to="/digitalmarketing/1" className="details-link">Kurinji Muthamizh Sangam</Link>
            </li>
            <li>
            <Link to="/digitalmarketing/2" className="details-link">Culture & Cuisine LLC</Link>
            </li>
            <li>
            <Link to="/digitalmarketing/3" className="details-link">Studio 11 Kodambakkam</Link>
            </li>
            <li>
            <Link to="/digitalmarketing/4" className="details-link">Voltas Brand Store</Link>
            </li>
            <li>
            <Link to="/digitalmarketing/5" className="details-link">Jeyar Cottage</Link>
            </li>
            <li>
            <Link to="/digitalmarketing/6" className="details-link">Durai Wheels</Link>
            </li>
            <li>
            <Link to="/digitalmarketing/7" className="details-link">Green Trends</Link>
            </li>
           
           
           
          </ul>
        </li>
       
        <li className={`dropdown ${openDropdown === "app" ? "dropdown-active" : ""}`}>
  <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown("app"); }}>
    <span>App Development</span>
    <i className="bi bi-chevron-down toggle-dropdown" />
  </a>
  <ul style={{ display: openDropdown === "app" ? "block" : "none" }}>
  
            <li>
              <a href="/app">Letsoh</a>
            </li>
            <li>
              <a href="/app">ANIT Tool</a>
            </li>
            <li>
              <a href="/app">Distropal App</a>
            </li>
           
          </ul>
        </li>
       
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
       {/* Hamburger Icon */}
        <i
          className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
          onClick={toggleMobileNav}
        />

    </nav>
    <div className="header-social-links">
      {/*<a href="#" className="twitter">
        <i className="bi bi-twitter-x" />
      </a>*/}
      <a href="https://www.facebook.com/RemnowSolutions/" target="_blank" className="facebook">
        <i className="bi bi-facebook" />
      </a>
      <a href="https://www.instagram.com/remnow_solutions/#" target="_blank" className="instagram">
        <i className="bi bi-instagram" />
      </a>
      <a href="https://www.linkedin.com/company/remnowsolutions/" target="_blank" className="linkedin">
        <i className="bi bi-linkedin" />
      </a>
    </div>
  </div>
</header>

        </div>
    )    
}

export default Header;