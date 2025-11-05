import React from "react";

function Footer(){
    return(
        <div className="footer">
            <>
            <footer className="footer bg-dark text-white py-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Left Side - Copyright */}
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            © {new Date().getFullYear()} <strong>Remnow Solutions</strong>.
          </div>

          {/* Right Side - Links */}
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
            <a href="/" className="text-white text-decoration-none">Home</a>
            <a href="/websites" className="text-white text-decoration-none">Websites</a>
            <a href="/digital-marketing" className="text-white text-decoration-none">Digital Marketing</a>
          </div>
        </div>
      </div>
    </footer>
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Preloader 
   <div id="preloader">
    <div className="line" />
  </div>  
*/}

</>

         </div>
    )    
}

export default Footer;